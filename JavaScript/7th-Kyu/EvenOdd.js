// Even and Odd

function evenAndOdd(num) {
  // your code here
  let NE = "";
  let NO = "";
  num = Array.from(String(num), Number);
  // Loop through a number string and if add Even to NE : odd to NO
  for (let i = 0; i < num.length; i++) {
    if (num[i] % 2 === 0) {
      NE += num[i];
      // NE.push(num[i]);
    } else if (num[i] % 2 !== 0) {
      NO += num[i];
      // NO.push(num[i]);
    }
  }
  console.log(NE);
  //console.log(NO);

  if (NE.length === 0) {
    NE = 0;
  } else if (NO.length === 0) {
    NO = 0;
  }
  console.log(NE);
  console.log(NO);

  let neArray = parseInt(NE);
  console.log(neArray);
  let noArray = parseInt(NO);
  console.log(noArray);

  console.log(noArray);
  console.log(neArray);
  return [neArray, noArray];
}

// NE is even
// NO is odd

console.log(evenAndOdd(246));
// console.log(evenAndOdd(301));
//console.log(evenAndOdd(462));
