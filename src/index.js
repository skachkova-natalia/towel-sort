
// You should implement your task here.

module.exports = function towelSort (matrix) {
  return (matrix || []).reduce((newMatrix, elem, i) => newMatrix = [...newMatrix, ...((i % 2) ? elem.reverse() : elem)], []); 
}
