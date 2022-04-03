// Pick A Set Of First Elements
function first(arr, n) {
  return n === undefined ? arr.slice(0, 1) : arr.slice(0, n);
  //   if (n === undefined) {
  //     return arr[0];
  //   } else if (n === 0) {
  //     return [];
  //   } else if (n > 0) {
  //     return arr.splice(0, n);
  //   }
  //   return arr;
}

console.log(first(["a", "b", "c", "d", "e"]));
console.log(first(["a", "b", "c", "d", "e"], 0));
console.log(first(["a", "b", "c", "d", "e"], 1));
console.log(first(["a", "b", "c", "d", "e"], 2)); //[a, b]
console.log(first(["a", "b", "c", "d", "e"], 3)); // [a, b, c]
console.log(first(["a", "b", "c", "d", "e"], 4)); // [a, b, c]
