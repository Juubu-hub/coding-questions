let a=1;
function factorial(n) {
  for (let i = 1; i <= n; i++) {
     a = a * i;
  }
  return a;
}

console.log(factorial(5));

