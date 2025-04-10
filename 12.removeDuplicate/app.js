let numbers = [1, 2, 2, 2, 45, 6, 899, 99, 99];
function removeDuplicates(arr) {
  return arr.filter((val, i) => {
    return arr.indexOf(val) === i;
  }, 0);
}
console.log(removeDuplicates(numbers));
