import "./App.css";
import { useEffect, useState } from "react";
import Sort from "./components/Sort";

function App() {
  const [size, setSize] = useState(0);
  const [dispElems, setDispElems] = useState({});
  function renderElements(size) {
    const elems = [];
    for (let i = 0; i < size; i++) {
      elems.push(
        <>
          <input
            key={"input_" + i}
            value={dispElems[i]}
            onChange={(e) => {
              setDispElems({
                ...dispElems,
                [i]: e.target.value / 1,
              });
            }}
            className="box"
          />
        </>
      );
    }
    return elems;
  }
  return (
    <div className="MainContainer dflex flexcol">
      <div className="flex1 titleArea dflex">Sorting Algorithms</div>
      <div className="flex1 entryArea dflex flexcol">
        <div className="entryLabel">Enter size of array : </div>
        <input
          value={size}
          className="numBox"
          onChange={(e) => setSize(e.target.value)}
        />
        {size > 0 ? (
          <>
            <div className="entryLabel">Enter elements of array : </div>
            <div className="dflex">{renderElements(size)}</div>
            <div className="array">[{Object.values(dispElems).join(",")}]</div>
            <Sort currArray = {Object.values(dispElems)} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
