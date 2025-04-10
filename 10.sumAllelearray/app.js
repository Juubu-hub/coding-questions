let array = [4, 67, 45, 44, 55];
function sumArray() {
  let c = array.reduce((acc, i) => {
    return acc + i;
  }, 0);
  console.log(c);
}
sumArray();
