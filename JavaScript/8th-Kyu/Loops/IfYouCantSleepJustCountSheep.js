// If you can't sleep, just count sheep=

var countSheep = function (num) {
  //your code here
  let countSheep = "";
  for (let i = 1; i <= num; i++) {
    countSheep += `${i} sheep...`;
  }
  return countSheep;
};

console.log(countSheep(0));
console.log(countSheep(1));
console.log(countSheep(2));
console.log(countSheep(3));
console.log(countSheep(4));
