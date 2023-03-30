// Given a string s, reverse the order of characters in each word within a sentence while still preserving whitespace and initial word order.

// Example 1:
// Input: s = "Let's take LeetCode contest"
// Output: "s'teL ekat edoCteeL tsetnoc"

// Example 2:
// Input: s = "God Ding"
// Output: "doG gniD"

// Constraints:
// 1 <= s.length <= 5 * 104
// s contains printable ASCII characters.
// s does not contain any leading or trailing spaces.
// There is at least one word in s.
// All the words in s are separated by a single space.

//1-way with chartAt()
function reverseWords(s) {
  let newString = "";

  for (let i = s.length - 1; i >= 0; i--) {
    newString += s.charAt(i);
  }
  return newString.split(" ").reverse().join(" ");
}
//2-way
function reverseWords(s) {
  const arr = s.split(" ");

  const reverseArr = [];

  for (let i = 0; i < arr.length; i++) {
    let reverseWord = "";
    for (let j = arr[i].length - 1; j >= 0; j--) {
      reverseWord += arr[i][j];
    }
    reverseArr.push(reverseWord);
  }
  return reverseArr.join(" ");
}
