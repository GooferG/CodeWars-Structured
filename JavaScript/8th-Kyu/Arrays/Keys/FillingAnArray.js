// Filling an array (part 1)
// https://www.codewars.com/kata/571d42206414b103dc0006a1/solutions/javascript

// Array(n).keys() will return the keys for each index

const arr = (n) => (n ? [...Array(n).keys()] : []);

console.log(arr(6));

let alphabet = ["a", "b", "c"];
let alphabet2 = [...alphabet.keys()];
console.log(alphabet2);
console.log([...alphabet.keys()]);
