import "./App.css";
import { useEffect, useState } from "react";
import Sort from "./components/Sort";
import "bootstrap/dist/css/bootstrap.min.css";
import RandomSorting from "./components/RandomSorting";

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
                [i]: e.target.value,
              });
            }}
            className="box"
          />
        </>
      );
    }
    return elems;
  }
  const intElems = Object.values(dispElems).map((x) => parseInt(x));
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
        {size > 0 && size < 20 ? (
          <>
            <div className="entryLabel">
              Enter elements of array Manually (if you want randomized larger samples,
              enter size > 20) :<></>
            </div>
            <div className="dflex">{renderElements(size)}</div>
            <Sort currArray={intElems} />
          </>
        ) : size >= 20 ? (
          <>
            <RandomSorting size={size} />
          </>
        ) : (
          <></>
        )}
      </div>
    </div>
  );
}

export default App;
