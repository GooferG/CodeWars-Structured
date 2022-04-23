function merge_arrays(a, b) {
  a = [...a, ...b];
  a.sort((a, b) => a - b);
  console.log(a);
  return a.filter((item, index) => a.indexOf(item) == index);
}

console.log(merge_arrays([1, 3, 4], [2, 4, 6]));

let findDuplicates = (arr) =>
  arr.filter((item, index) => arr.indexOf(item) == index);

console.log(findDuplicates([1, 3, 4, 2, 4, 6, 7, 9, 1, 2, 5]));

[2, 5, 8, 2, 5, 9].forEach((item, index, array) => {
  console.log(array.indexOf(item) == index);
});

[2, 5, 8, 2, 5, 9].forEach((item, index, array) => {
  console.log(`item ${item} is at index ${index} in ${array}`);
});
