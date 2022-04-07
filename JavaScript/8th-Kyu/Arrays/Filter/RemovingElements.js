// Removing Elements

// function removeEveryOther(arr) {
//   //your code here
//   let newArr = [];
//   arr.forEach((item, index) => {
//     console.log(`${item} + ${index}`);
//     if (index % 2 === 0) {
//       newArr.push(item);
//     }
//   });
//   return newArr;
// }

function removeEveryOther(arr) {
  return arr.filter((element, index) => {
    return index % 2 === 0;
  });
}

console.log(removeEveryOther(["Hello", "Goodbye", "Hello Again"]));
