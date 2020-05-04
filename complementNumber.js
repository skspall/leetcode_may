/*
    Given a positive integer, output its complement number. The complement strategy is to flip the bits of its binary representation.

    Example 1:

    Input: 5
    Output: 2
    Explanation: The binary representation of 5 is 101 (no leading zero bits), and its complement is 010.
*/

/**
 * @param {number} num
 * @return {number}
 */

var findComplement = function(num) {
  let binaryNum = num.toString(2).toString();
  let complementNum = "";
  for (let i = 0; i < binaryNum.length; i++) {
    complementNum += binaryNum[i] == "1" ? "0" : "1";
  }
  return parseInt(complementNum, 2);
};
