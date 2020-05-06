/*
    Given a string, find the first non-repeating character in it and return it's index. If it doesn't exist, return -1.

    Examples:
    s = "leetcode"
    return 0.

    s = "loveleetcode",
    return 2.
*/

/**
 * @param {string} s
 * @return {number}
 */
var firstUniqChar = function(s) {
  for (let i = 0; i < s.length; i++) {
    const otherIndex = s.indexOf(s[i]);
    const lastIndex = s.lastIndexOf(s[i]);
    if (otherIndex == lastIndex) {
      return i;
    }
  }
  return -1;
};
