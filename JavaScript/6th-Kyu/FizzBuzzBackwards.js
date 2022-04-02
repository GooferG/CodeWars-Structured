function reverseFizzBuzz(array) {
  // your code
  let fizz = array[0];
  console.log(fizz);
  let buzz = array[1];
  console.log(buzz);

  for (let i = 1; i <= 100; i++) {
    if (i % fizz === 0 && i % buzz === 0) {
      console.log("FizzBuzz");
    } else if (i % buzz === 0) {
      console.log("buzz");
    } else if (i % fizz === 0) {
      console.log("fizz");
    } else {
      console.log(i);
    }
  }
}

console.log(reverseFizzBuzz([3, 5]));
