function find_average(array) {
  // your code here
  let average = array.reduce((acc, c) => acc + c, 0);
  return average / array.length;
}

console.log(find_average([1, 2, 3, 5]));
