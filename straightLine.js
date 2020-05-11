/*
    You are given an array coordinates, coordinates[i] = [x, y], where [x, y] represents the coordinate of a point. Check if these points make a straight line in the XY plane.
   
    Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[5,6],[6,7]]
    Output: true

    Input: coordinates = [[1,2],[2,3],[3,4],[4,5],[7,7]]
    Output: false
*/

/**
 * @param {number[][]} coordinates
 * @return {boolean}
 */
var checkStraightLine = function(coordinates) {
  if (coordinates.length === 1) {
    return true;
  }

  var findSlope = function(cn, c0) {
    return (c0[1] - cn[1]) / (c0[0] - cn[0]);
  };

  let mainSlope = findSlope(coordinates[1], coordinates[0]);

  for (let i = 1; i < coordinates.length; i++) {
    let currSlope = findSlope(coordinates[i], coordinates[0]);
    if (currSlope !== mainSlope) {
      return false;
    }
  }
  return true;
};
