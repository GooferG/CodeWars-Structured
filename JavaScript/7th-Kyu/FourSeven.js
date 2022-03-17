function fourSeven(n) {
  // Your Code Here
  let myMap = new Map();
  myMap.set(4, "7");
  myMap.set(7, "4");
}

console.log(fourSeven(4));

function mapMap(a) {
  let map = new Map();

  map.set(4, 7); // a string key
  map.set(7, 4); // a numeric key
  map.set({}, 0);
  return map.get(a);
}

console.log(mapMap(3));

let myMap = new Map();
myMap.set("0", "foo");
myMap.set(1, "bar");
myMap.set({}, "baz");

let mapIter = myMap.values();

console.log(myMap.get("0"));
