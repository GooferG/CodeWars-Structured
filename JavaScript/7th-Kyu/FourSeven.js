// function fourSeven(n) {
//   // Your Code Here
//   let myMap = new Map();
//   myMap.set(4, "7");
//   myMap.set(7, "4");
// }

// console.log(fourSeven(4));

// function mapMap(a) {
//   let map = new Map();

//   map.set(4, 7); // a string key
//   map.set(7, 4); // a numeric key
//   map.set({}, 0);
//   return map.get(a);
// }

// console.log(mapMap(3));

// let myMap = new Map();
// myMap.set("0", "foo");
// myMap.set(1, "bar");
// myMap.set({}, "baz");

// let mapIter = myMap.values();

// console.log(myMap.get("0"));

function fourSeven(n) {
  while (n === 7 || n === 4) {
    return 28 / n;
  }
  return 0;
}

console.log(fourSeven(0));
console.log(fourSeven(1));
console.log(fourSeven(2));
console.log(fourSeven(3));
console.log(fourSeven(4));
console.log(fourSeven(5));
console.log(fourSeven(6));
console.log(fourSeven(7));
console.log(fourSeven(8));
console.log(fourSeven(0));
