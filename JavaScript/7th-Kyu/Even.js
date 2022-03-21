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
  let neArray = parseInt(NE);
  console.log(neArray);
  let noArray = parseInt(NO);
  console.log(noArray);

  if ((noArray = "")) {
    return (neArray = 0);
  } else if ((noArray = "")) {
    return (noArray = 0);
  }

  console.log(noArray);
  console.log(neArray);
  return [neArray, noArray];
}
