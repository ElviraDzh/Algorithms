// It would be nice to have the following ArrayUtil object containing useful methods to manage arrays:

// const arr = [1, 2, 3];

// const min = ArrayUtil.min(arr); // 1
// const max = ArrayUtil.max(arr); // 3
// const avg = ArrayUtil.avg(arr); // 2
// const sum = ArrayUtil.sum(arr); // 6

// // The given array is not changed.
// const rev = ArrayUtil.reverse(arr); // [3, 2, 1]

// // Replaces the first value by the second one. The original array is updated.
// ArrayUtil.replace([1, 2, 3, 2], 2, 0); // [1, 0, 3, 0]

// // Replaces all elements by the given value. The original array is updated.
// ArrayUtil.fill([1, 2, 3], 0); // [0, 0, 0]

//  Implement ArrayUtil, without using built-in methods.
function max(array) {
  let maxNum = array[0];

  for (let i = 1; i < array.length; i++) {
    if (maxNum < array[i]) {
      maxNum = array[i];
    }
  }
  return maxNum;
}

function min(array) {
  let minNum = array[0];

  for (let i = 1; i < array.length; i++) {
    if (minNum > array[i]) {
      minNum = array[i];
    }
  }
  return minNum;
}
