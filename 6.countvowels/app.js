let str = prompt("enter a string");
let vowels = "aeiouAEIOU";
let count = 0;

function countV(str) {
  for (const v of str) {
    if (vowels.includes(v)) {
      count++;
    }
  }
  return count;
}
const c = countV(str);
console.log(c);
