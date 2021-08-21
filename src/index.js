
// You should implement your task here.

module.exports = function towelSort (matrix) {
  if (!matrix || matrix.length === 0) return [];

  let newMatrix = [];
  for (let i = 0; i < matrix.length; i++) {
    if ((i) % 2) newMatrix = newMatrix.concat(matrix[i].reverse());
    else newMatrix = newMatrix.concat(matrix[i]);
  } 

  console.log(newMatrix);
  return newMatrix;
}
