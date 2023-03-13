// Given a string s consisting of words and spaces, return the length of the last word in the string.

// Example 1:

// Input: s = "Hello World"
// Output: 5
// Explanation: The last word is "World" with length 5.
// Example 2:

// Input: s = "   fly me   to   the moon  "
// Output: 4
// Explanation: The last word is "moon" with length 4.
// Example 3:

// Input: s = "luffy is still joyboy"
// Output: 6
// Explanation: The last word is "joyboy" with length 6.
// Constraints:

// 1 <= s.length <= 10^4
// s consists of only English letters and spaces ' '.
// There will be at least one word in s.

// You can not use JavaScript built-in method split() and trim(). You have to implement those yourself.

//solve problem #1

function findLengthLastWord(s) {
  let len = 0;
  i = s.length - 1;
  while (i > 0) {
    if (s[i] === " ") {
      if (len > 0) break;
    } else {
      len++;
    }
    i--;
  }
  return len;
}

//solve problem #2

function findLengthLastWord(s) {
  return s
    .split(" ")
    .filter((item) => item.length > 0)
    .at(-1).length;
}
