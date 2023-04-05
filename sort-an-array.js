// Given an array of integers nums, sort the array in ascending order and return it.

// You must solve the problem without using any JavaScript built-in functions.

// Example 1:

// Input: nums = [5,2,3,1]
// Output: [1,2,3,5]
// Explanation: After sorting the array, the positions of some numbers are not changed (for example, 2 and 3), while the positions of other numbers are changed (for example, 1 and 5).
// Example 2:

// Input: nums = [5,1,1,2,0,0]
// Output: [0,0,1,1,2,5]
// Explanation: Note that the values of nums are not necessairly unique.

function sortArray(arr) {
  let bigNum = 0;
  for (let i = 0; i < arr.length - 1; i++) {
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[i] > arr[j]) {
        bigNum = arr[i];
        arr[i] = arr[j];
        arr[j] = bigNum;
      }
    }
  }
  return arr;
}
