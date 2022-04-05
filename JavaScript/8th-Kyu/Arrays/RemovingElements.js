// Removing Elements

function removeEveryOther(arr) {
  //your code here
  let newArr = [];
  arr.forEach((item, index) => {
    console.log(`${item} + ${index}`);
    if (index % 2 === 0) {
      newArr.push(item);
    }
  });
  return newArr;
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));

console.log(0 % 2 === 0);
