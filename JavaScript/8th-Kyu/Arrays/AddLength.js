// function addLength(str) {
//   let newString = str.split(" ");
//   console.log(newString);
//   let newArr = [];
//   for (let i = 0; i < newString.length; i++) {
//     let stringLength = newString[i].length;
//     newArr.push(`${newString[i]} ${stringLength}`);
//   }
//   //start-here
//   return newArr;
// }

function addLength(str) {
  return str.split(" ").map(function (v) {
    return v + " " + v.length;
  });
}

console.log(addLength("apple ban"));
console.log(addLength("you will win"));
