function reverse(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string = string+str[i];
  }
  return string;
}
console.log(reverse('junaid'));
