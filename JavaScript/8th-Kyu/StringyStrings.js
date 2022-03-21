function stringy(size) {
  // your code here
  let binary = "1";
  for (let i = 1; i < size; i++) {
    console.log(i);
    if (i % 2 !== 0) {
      binary += "0";
    } else if (i % 2 === 0) {
      binary += "1";
    }
  }
  return binary;
}

console.log(stringy(8));

let shi = "shi";
let shit = shi.concat("t");
console.log(shit);
