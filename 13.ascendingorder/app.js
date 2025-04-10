let array = [98, 8, 7, 6, 5, 4, 3, 2, 1, 200, 1000];
function order(a) {
  return a.sort((a, b) => {
    return a - b;
  });
}
const d = order(array);
console.log(d);

