// Task. Find the length of the last word.

// Examples
// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.

// var lengthOfLastWord = function(s) {
// // Write your solution here
// };

const lengthOfLastWord = function (s) {
  return s.trim().split(" ").at(-1).length;
};
