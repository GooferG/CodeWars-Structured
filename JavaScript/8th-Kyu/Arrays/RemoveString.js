// function noSpace(x) {
//   let newArrayString = x.split(" ");
//   let newNoSpaceString = [];
//   let emptyArray = [];
//   for (let i = 0; i < newArrayString.length; i++) {
//     if (newArrayString[i] === "") {
//       emptyArray.push(newArrayString[i]);
//     } else if (newArrayString[i] !== "") {
//       newNoSpaceString.push(newArrayString[i]);
//     }
//   }
//   let result = newNoSpaceString.join("");
//   return result;
// }

function noSpace(x) {
  return x.split(" ");
}

console.log(noSpace("8 j 8   mBliB8g  imjB8B8  jl  B"));
