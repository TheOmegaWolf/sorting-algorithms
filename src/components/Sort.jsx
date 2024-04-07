import React from "react";
import Button from "react-bootstrap/Button";
import style from "./Sort.module.css";
function heapSort(arr) {
  let comparisons = 0;
  let movements = 0;
  let startTime = performance.now(); // Start time measurement

  function heapify(arr, n, i) {
    let largest = i;
    let left = 2 * i + 1;
    let right = 2 * i + 2;

    comparisons += 2; // Two comparisons above

    if (left < n && arr[left] > arr[largest]) {
      largest = left;
    }

    if (right < n && arr[right] > arr[largest]) {
      largest = right;
    }

    if (largest !== i) {
      movements += 3; // Three movements to swap elements
      [arr[i], arr[largest]] = [arr[largest], arr[i]];
      heapify(arr, n, largest);
    }
  }

  function buildMaxHeap(arr) {
    const n = arr.length;
    for (let i = Math.floor(n / 2) - 1; i >= 0; i--) {
      heapify(arr, n, i);
    }
  }

  function sort(arr) {
    const n = arr.length;
    buildMaxHeap(arr);
    for (let i = n - 1; i > 0; i--) {
      movements += 3; // Three movements to swap elements
      [arr[0], arr[i]] = [arr[i], arr[0]];
      heapify(arr, i, 0);
    }
  }

  sort(arr);
  let sortedArray = arr;
  let endTime = performance.now(); // End time measurement
  let timeTaken = endTime - startTime; // Time taken for sorting
  console.log("heap sorting : ");
  return [sortedArray, timeTaken, comparisons, movements];
}

function mergeSort(arr) {
  let comparisons = 0;
  let movements = 0;
  let startTime = performance.now(); // Start time measurement

  function merge(left, right) {
    let result = [];
    let leftIndex = 0;
    let rightIndex = 0;

    while (leftIndex < left.length && rightIndex < right.length) {
      comparisons++;
      if (left[leftIndex] < right[rightIndex]) {
        result.push(left[leftIndex]);
        leftIndex++;
      } else {
        result.push(right[rightIndex]);
        rightIndex++;
      }
      movements++;
    }

    return result.concat(left.slice(leftIndex)).concat(right.slice(rightIndex));
  }

  function mergeSortHelper(arr) {
    if (arr.length <= 1) {
      return arr;
    }

    const middle = Math.floor(arr.length / 2);
    const left = arr.slice(0, middle);
    const right = arr.slice(middle);

    return merge(mergeSortHelper(left), mergeSortHelper(right));
  }

  const sortedArray = mergeSortHelper(arr);
  let endTime = performance.now(); // End time measurement
  let timeTaken = endTime - startTime; // Time taken for sorting
  console.log("merge sorting :");
  return [sortedArray, timeTaken, comparisons, movements];
}

function quickSort(arr) {
  let comparisons = 0;
  let movements = 0;
  let startTime = performance.now(); // Start time measurement

  function partition(arr, low, high) {
    let pivot = arr[high];
    let i = low - 1;

    for (let j = low; j < high; j++) {
      comparisons++;
      if (arr[j] < pivot) {
        i++;
        movements += 3; // Three movements to swap elements
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    movements += 3; // Three movements to swap elements
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }

  function quickSortHelper(arr, low, high) {
    if (low < high) {
      let pi = partition(arr, low, high);
      quickSortHelper(arr, low, pi - 1);
      quickSortHelper(arr, pi + 1, high);
    }
  }

  quickSortHelper(arr, 0, arr.length - 1);
  let endTime = performance.now(); // End time measurement
  let timeTaken = endTime - startTime; // Time taken for sorting
  let sortedArray = arr;
  console.log("quick sort : ");
  return [sortedArray, timeTaken, comparisons, movements];
  console.log("Sorted Array:", arr);
  console.log("Comparisons:", comparisons);
  console.log("Movements:", movements);
  console.log("Time Taken (milliseconds):", timeTaken);
  console.log(
    "Time Complexity: O(n^2) in worst case, O(n log n) in average case"
  );
  console.log("Space Complexity: O(log n)");
}

function quickSortMedianOfThree(arr) {
  let comparisons = 0;
  let movements = 0;
  let startTime = performance.now(); // Start time measurement

  function medianOfThree(arr, low, high) {
    let mid = Math.floor((low + high) / 2);
    let a = arr[low],
      b = arr[mid],
      c = arr[high];
    let median = Math.max(Math.min(a, b), Math.min(Math.max(a, b), c));

    if (median === arr[low]) return low;
    if (median === arr[mid]) return mid;
    return high;
  }

  function partition(arr, low, high) {
    let pivotIndex = medianOfThree(arr, low, high);
    let pivot = arr[pivotIndex];
    movements += 3; // Three movements to swap elements
    [arr[pivotIndex], arr[high]] = [arr[high], arr[pivotIndex]];

    let i = low - 1;

    for (let j = low; j < high; j++) {
      comparisons++;
      if (arr[j] < pivot) {
        i++;
        movements += 3; // Three movements to swap elements
        [arr[i], arr[j]] = [arr[j], arr[i]];
      }
    }
    movements += 3; // Three movements to swap elements
    [arr[i + 1], arr[high]] = [arr[high], arr[i + 1]];
    return i + 1;
  }

  function quickSortHelper(arr, low, high) {
    if (low < high) {
      let pi = partition(arr, low, high);
      quickSortHelper(arr, low, pi - 1);
      quickSortHelper(arr, pi + 1, high);
    }
  }

  quickSortHelper(arr, 0, arr.length - 1);
  let endTime = performance.now(); // End time measurement
  let timeTaken = endTime - startTime; // Time taken for sorting
  let sortedArray = arr;
  console.log("quick sort median of 3 : ");
  return [sortedArray, timeTaken, comparisons, movements];
  console.log("Sorted Array:", arr);
  console.log("Comparisons:", comparisons);
  console.log("Movements:", movements);
  console.log("Time Taken (milliseconds):", timeTaken);
  console.log("Time Complexity: O(n log n)");
  console.log("Space Complexity: O(log n)");
}

function insertionSort(arr) {
  let comparisons = 0;
  let movements = 0;
  let startTime = performance.now(); // Start time measurement

  for (let i = 1; i < arr.length; i++) {
    let key = arr[i];
    let j = i - 1;

    while (j >= 0 && arr[j] > key) {
      comparisons++;
      movements++;
      arr[j + 1] = arr[j];
      j--;
    }
    movements++;
    arr[j + 1] = key;
  }

  let endTime = performance.now(); // End time measurement
  let timeTaken = endTime - startTime; // Time taken for sorting
  let sortedArray = arr;
  console.log("insertion sort : ");
  return [sortedArray, timeTaken, comparisons, movements];
  console.log("Sorted Array:", arr);
  console.log("Comparisons:", comparisons);
  console.log("Movements:", movements);
  console.log("Time Taken (milliseconds):", timeTaken);
  console.log("Time Complexity: O(n^2)");
  console.log("Space Complexity: O(1)");
}

function selectionSort(arr) {
  let comparisons = 0;
  let movements = 0;
  let startTime = performance.now(); // Start time measurement

  for (let i = 0; i < arr.length - 1; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      comparisons++;
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      movements += 3; // Three movements to swap elements
      [arr[minIndex], arr[i]] = [arr[i], arr[minIndex]];
    }
  }

  let endTime = performance.now(); // End time measurement
  let timeTaken = endTime - startTime; // Time taken for sorting
  let sortedArray = arr;
  console.log("selection sort : ");
  return [sortedArray, timeTaken, comparisons, movements];
  console.log("Sorted Array:", arr);
  console.log("Comparisons:", comparisons);
  console.log("Movements:", movements);
  console.log("Time Taken (milliseconds):", timeTaken);
  console.log("Time Complexity: O(n^2)");
  console.log("Space Complexity: O(1)");
}

function bubbleSort(arr) {
  let comparisons = 0;
  let movements = 0;
  let startTime = performance.now(); // Start time measurement

  const n = arr.length;
  for (let i = 0; i < n - 1; i++) {
    for (let j = 0; j < n - i - 1; j++) {
      comparisons++;
      if (arr[j] > arr[j + 1]) {
        movements += 3; // Three movements to swap elements
        [arr[j], arr[j + 1]] = [arr[j + 1], arr[j]];
      }
    }
  }

  let endTime = performance.now(); // End time measurement
  let timeTaken = endTime - startTime; // Time taken for sorting
  let sortedArray = arr;
  console.log("bubble sort : ");
  return [sortedArray, timeTaken, comparisons, movements];
  console.log("Sorted Array:", arr);
  console.log("Comparisons:", comparisons);
  console.log("Movements:", movements);
  console.log("Time Taken (milliseconds):", timeTaken);
  console.log("Time Complexity: O(n^2)");
  console.log("Space Complexity: O(1)");
}

const Sort = (props) => {
  const { currArray } = props;
  return (
    <>
      <div className="dflex">
        <Button
          variant={"dark"}
          className={style.sortButton}
          onClick={() => {
            console.log(currArray);
            const [sortedArray, timeTaken, comparisons, movements] =
              mergeSort(currArray);
            console.log(timeTaken, "msecs");
            console.log("Sorted Array:", sortedArray);
            console.log("Comparisons:", comparisons);
            console.log("Movements:", movements);
            console.log("Time Taken (milliseconds):", timeTaken);
            console.log("Time Complexity: O(n log n)");
            console.log("Space Complexity: O(n)");
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
            console.log(timeTaken, "msecs");
            console.log("Sorted Array:", sortedArray);
            console.log("Comparisons:", comparisons);
            console.log("Movements:", movements);
            console.log("Time Taken (milliseconds):", timeTaken);
            console.log("Time Complexity: O(n log n)");
            console.log("Space Complexity: O(n)");
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
            console.log(timeTaken, "msecs");
            console.log("Sorted Array:", sortedArray);
            console.log("Comparisons:", comparisons);
            console.log("Movements:", movements);
            console.log("Time Taken (milliseconds):", timeTaken);
            console.log("Time Complexity: O(n log n)");
            console.log("Space Complexity: O(n)");
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
            console.log(timeTaken, "msecs");
            console.log("Sorted Array:", sortedArray);
            console.log("Comparisons:", comparisons);
            console.log("Movements:", movements);
            console.log("Time Taken (milliseconds):", timeTaken);
            console.log("Time Complexity: O(n log n)");
            console.log("Space Complexity: O(n)");
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
            console.log(timeTaken, "msecs");
            console.log("Sorted Array:", sortedArray);
            console.log("Comparisons:", comparisons);
            console.log("Movements:", movements);
            console.log("Time Taken (milliseconds):", timeTaken);
            console.log("Time Complexity: O(n log n)");
            console.log("Space Complexity: O(n)");
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
            console.log(timeTaken, "msecs");
            console.log("Sorted Array:", sortedArray);
            console.log("Comparisons:", comparisons);
            console.log("Movements:", movements);
            console.log("Time Taken (milliseconds):", timeTaken);
            console.log("Time Complexity: O(n log n)");
            console.log("Space Complexity: O(n)");
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
            console.log(timeTaken, "msecs");
            console.log("Sorted Array:", sortedArray);
            console.log("Comparisons:", comparisons);
            console.log("Movements:", movements);
            console.log("Time Taken (milliseconds):", timeTaken);
            console.log("Time Complexity: O(n log n)");
            console.log("Space Complexity: O(n)");
          }}
        >
          Bubble Sort
        </Button>
      </div>
    </>
  );
};

export default Sort;
