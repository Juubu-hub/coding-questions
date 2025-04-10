function palindrome(str) {
  let string = "";
  for (let i = str.length - 1; i >= 0; i--) {
    string = string + str[i];
  }
  if (string === str) {
    console.log(`${str} is palindrom`);
  } else {
    console.log(`${str} is not palindrom`);
  }
}
console.log(palindrome("level"));
