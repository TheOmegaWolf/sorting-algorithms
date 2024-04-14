import React, { useState } from "react";
import style from "./RandomSorting.module.css";
import { Button } from "react-bootstrap";
import Charts from "./Charts";
import { bubbleSort,heapSort,mergeSort, quickSort, selectionSort, quickSortMedianOfThree, insertionSort } from '../utils/sorting';
import CurrentStats from "./CurrentStats";
const RandomSorting = (props) => {
  const { size } = props;
  const [currArray, setCurrArray] = useState([]);
  const [stats, setStats] = useState({});
  const [sortedArray, setSortedArray] = useState([]);
  const [currStats, setCurrStats] = useState({})
  function getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min)) + min; //The maximum is exclusive and the minimum is inclusive
  }
  function setStatistics(currArray) {
    let [sortedArray, timeTaken, comparisons, movements] =
      mergeSort(currArray);
    const [sortedArray2, timeTaken2, comparisons2, movements2] =
      heapSort(currArray);
    const [sortedArray3, timeTaken3, comparisons3, movements3] =
      quickSort(currArray);
    const [sortedArray4, timeTaken4, comparisons4, movements4] =
      quickSortMedianOfThree(currArray);
    const [sortedArray5, timeTaken5, comparisons5, movements5] =
      insertionSort(currArray);
    const [sortedArray6, timeTaken6, comparisons6, movements6] =
      selectionSort(currArray);
    const [sortedArray7, timeTaken7, comparisons7, movements7] =
      bubbleSort(currArray);
    setSortedArray(sortedArray);
    setStats({
      mergeSort: {
        name: "mergeSort",
        sortedArray,
        timeTaken,
        comparisons,
        movements,
        timeComplexity: "O(n log n)",
      },
      heapSort: {
        name: "heapSort",
        sortedArray: sortedArray2,
        timeTaken: timeTaken2,
        comparisons: comparisons2,
        movements: movements2,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
      },
      quickSort: {
        name: "quickSort",
        sortedArray: sortedArray3,
        timeTaken: timeTaken3,
        comparisons: comparisons3,
        movements: movements3,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
      },
      quickSortMedianOfThree: {
        name: "MedianOfThreeQs",
        sortedArray: sortedArray4,
        timeTaken: timeTaken4,
        comparisons: comparisons4,
        movements: movements4,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
      },
      insertionSort: {
        name : "insertionSort",
        sortedArray: sortedArray5,
        timeTaken: timeTaken5,
        comparisons: comparisons5,
        movements: movements5,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
      },
      selectionSort: {
        name : "selectionSort",
        sortedArray: sortedArray6,
        timeTaken: timeTaken6,
        comparisons: comparisons6,
        movements: movements6,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
      },
      bubbleSort: {
        name : "bubbleSort",
        sortedArray: sortedArray7,
        timeTaken: timeTaken7,
        comparisons: comparisons7,
        movements: movements7,
        timeComplexity: "O(n log n)",
        spaceComplexity: "O(n)",
      },
    });
  }
  return (
    <>
      <div
        className={`${style.entryLabel} ${style.dflex} ${style.flexcol} ${style.cover}`}
      >
        <div className={`${style.center} ${style.dflex} ${style.mtb20}`}>
          <Button
            onClick={() => {
              console.log(size);
              let arr = new Array(size);
              for (let i = 0; i < size; i++) {
                arr[i] = getRandomInt(-200, 200);
              }
              setCurrArray(arr);
              setStatistics(arr);
            }}
          >
            Randomize!
          </Button>

         
        </div>
        <div className={`${style.dflex} ${style.center}`}>
        <Button
          variant={"dark"}
          className={style.sortButton}
          onClick={() => {
            console.log(currArray);
            const [sortedArray, timeTaken, comparisons, movements] =
              mergeSort(currArray);
            setStatistics(currArray);
            setCurrStats({
              timeTaken,
              comparisons,
              movements,
              timeComplexity: "O(nlogn)",
              spaceComplexity: "O(n)",
            });
          }}
        >
          Merge Sort
        </Button>
        <Button
          variant={"dark"}
          className={style.sortButton}
          onClick={() => {
            console.log(currArray);
            const [sortedArray, timeTaken, comparisons, movements] =
              heapSort(currArray);
            setStatistics(currArray);
            setCurrStats({
              timeTaken,
              comparisons,
              movements,
              timeComplexity: "O(nlogn)",
              spaceComplexity: "O(n)",
            });
          }}
        >
          Heap Sort
        </Button>
        <Button
          variant={"dark"}
          className={style.sortButton}
          onClick={() => {
            console.log(currArray);
            const [sortedArray, timeTaken, comparisons, movements] =
              quickSort(currArray);
            setStatistics(currArray);
            setCurrStats({
              timeTaken,
              comparisons,
              movements,
              timeComplexity: "O(nlogn)",
              spaceComplexity: "O(n)",
            });
          }}
        >
          Quick Sort
        </Button>
        <Button
          variant={"dark"}
          className={style.sortButton}
          onClick={() => {
            console.log(currArray);
            const [sortedArray, timeTaken, comparisons, movements] =
              quickSortMedianOfThree(currArray);
            setStatistics(currArray);
            setCurrStats({
              timeTaken,
              comparisons,
              movements,
              timeComplexity: "O(nlogn)",
              spaceComplexity: "O(n)",
            });
          }}
        >
          Quick Sort with 3 Medians
        </Button>
        <Button
          variant={"dark"}
          className={style.sortButton}
          onClick={() => {
            console.log(currArray);
            const [sortedArray, timeTaken, comparisons, movements] =
              insertionSort(currArray);
            setStatistics(currArray);
            setCurrStats({
              timeTaken,
              comparisons,
              movements,
              timeComplexity: "O(nlogn)",
              spaceComplexity: "O(n)",
            });
          }}
        >
          Insertion Sort
        </Button>
        <Button
          variant={"dark"}
          className={style.sortButton}
          onClick={() => {
            console.log(currArray);
            const [sortedArray, timeTaken, comparisons, movements] =
              selectionSort(currArray);
            setStatistics(currArray);
            setCurrStats({
              timeTaken,
              comparisons,
              movements,
              timeComplexity: "O(nlogn)",
              spaceComplexity: "O(n)",
            });
          }}
        >
          Selection Sort
        </Button>
        <Button
          variant={"dark"}
          className={style.sortButton}
          onClick={() => {
            console.log(currArray);
            const [sortedArray, timeTaken, comparisons, movements] =
              bubbleSort(currArray);
            setStatistics(currArray);
            setCurrStats({
              timeTaken,
              comparisons,
              movements,
              timeComplexity: "O(nlogn)",
              spaceComplexity: "O(n)",
            });
          }}
        >
          Bubble Sort
        </Button>
      </div>
        <div className={style.newArray}>[{currArray.join(",")}]</div>
        <div className={`${style.newArray} ${style.bold}`}>Sorted Arr : [{sortedArray.join(",")}]</div>
      </div>
      <CurrentStats currStats={currStats} />
      <Charts stats={stats} />
    </>
  );
};

export default RandomSorting;
