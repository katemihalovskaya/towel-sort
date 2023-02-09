module.exports = function towelSort (matrix) {
  let arr = [];
 if(Array.isArray(matrix) && matrix.length) {
  for (let i = 0; i < matrix.length; i++) {
    if(i%2) {
      matrix[i].reverse().forEach(el => {
        arr.push(el);
      });
    } else {
      matrix[i].forEach(el => {
        arr.push(el);
      })
    }
  }
 }
  return arr;
}