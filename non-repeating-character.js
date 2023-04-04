//  Given a string s, find the first non-repeating character in it and return its index. If it does not exist, return -1.

// Example 1:

// Input: s = "leetcode"
// Output: 0
// Example 2:

// Input: s = "loveleetcode"
// Output: 2
// Example 3:

// Input: s = "aabbaaa"
// Output: -1

function firstUniqChar(s) {
  for (let i = 0; i < s.length; i++) {
    let found = false;
    for (let j = 0; j < s.length; j++) {
      if (i !== j && s[i] === s[j]) {
        found = true;
        break;
      }
    }
    if (!found) return i;
  }

  return -1;
}
