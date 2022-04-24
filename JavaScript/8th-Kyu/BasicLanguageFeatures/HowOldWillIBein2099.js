function calculateAge(yearBorn, howOld) {
  // enter your code here.
  if (yearBorn == howOld) return "You were born this very year!";
  let year = Math.abs(yearBorn - howOld) == 1 ? "year" : "years";
  console.log(year);
  if (yearBorn < howOld) return `You are ${howOld - yearBorn} ${year} old.`;
  if (yearBorn > howOld)
    return `You will be born in ${yearBorn - howOld} ${year}.`;
}

console.log(calculateAge(2012, 2016));
console.log(calculateAge(3400, 3400));
console.log(calculateAge(2000, 1990));
console.log(calculateAge(2021, 2022));
console.log(calculateAge(2022, 2021));
console.log(calculateAge(2021, 1990));

console.log(Math.abs(1 - 7));
