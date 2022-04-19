// function findNeedle(haystack) {
//   // your code here
//   haystack.filter(function (str) {
//     return `found the needle at position` + str.indexOf("needle") === -1;
//   });
// }

// console.log(
//   findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
// );

// var myArray = ["bedroomone", "bedroomonetwo", "bathroom"];
// var PATTERN = "bedroom",
//   filtered = myArray.filter(function (str) {
//     return str.indexOf(PATTERN) === -1;
//   });

// console.log(PATTERN);

function findNeedle(haystack) {
  let needle = haystack.indexOf("needle");
  return `found the needle at position ${needle}`;
}

console.log(
  findNeedle(["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"])
);

// let arr = ["hay", "junk", "hay", "hay", "moreJunk", "needle", "randomJunk"];

// console.log(arr.indexOf("needle"));
