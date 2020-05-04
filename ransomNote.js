/*
    Given an arbitrary ransom note string and another string containing letters from all the magazines, write a function that will return true if the ransom note can be constructed from the magazines ; otherwise, it will return false.

    Each letter in the magazine string can only be used once in your ransom note.

    Note:
    You may assume that both strings contain only lowercase letters.

    canConstruct("a", "b") -> false
    canConstruct("aa", "ab") -> false
    canConstruct("aa", "aab") -> true
*/

/**
 * @param {string} ransomNote
 * @param {string} magazine
 * @return {boolean}
 */
var canConstruct = function(ransomNote, magazine) {
  const arr = ransomNote.split("");
  let magazineCpy = magazine;
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    let index = magazineCpy.indexOf(arr[i]);
    if (index > -1) {
      count++;
      magazineCpy =
        magazineCpy.substring(0, index) + magazineCpy.substring(index + 1);
    }
  }

  if (count === arr.length) {
    return true;
  }
  return false;
};
