function array(arr) {
  //Good luck
  let newArrayNumber = arr.split("");

  let arrayNumber = arr.split(" ");
  if (arr.length <= 3) {
    return null;
  } else if (arr.length > 3) {
    let newArray = arr.slice(1, -1);
    newArray = newArray.replace(/,/g, " ");
    return newArray;
  }
}

console.log(array(""));
console.log(array("1"));
console.log(array("1,2"));
console.log(array("1,2,3"));
console.log(array("1,2,3,4"));
console.log(array("1,2,3,4,5"));

let names = "Bilbo, Gandalf, Nazgul";

let arr = names.split(", ");
console.log(arr);

let str = "HI! I'm a bl'og";
newStr = str.replace(/[^0-9.]+/g, "");
console.log(newStr);
