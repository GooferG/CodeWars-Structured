var ArrowFunc = function (arr) {
  return arr.map((item) => String.fromCharCode(item)).join(""); //Complete this function
};

console.log(ArrowFunc([84, 101, 115, 116]));
console.log(ArrowFunc([70, 85, 83, 32, 82, 79, 72, 32, 68, 65, 72]));