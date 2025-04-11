let num = parseInt(prompt("enter any number"));
function prime(n) {
  if (n / n && n / 1 && !(n % 2 == 0)||n==2) {
    console.log("num is prime");
  } else {
    console.log("num is not prime ");
  }
}
prime(num);
