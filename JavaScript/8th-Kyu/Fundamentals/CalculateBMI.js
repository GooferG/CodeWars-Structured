function bmi(weight, height) {
  let bodyMassIndex = weight / Math.pow(height, 2);
  console.log(bodyMassIndex);
  if (bodyMassIndex <= 18.5) {
    return "Underweight";
  } else if (bodyMassIndex <= 25) {
    return "Normal";
  } else if (bodyMassIndex <= 30) {
    return "Overweight";
  } else if (bodyMassIndex > 30) {
    return "Obese";
  }
}

console.log(bmi(80, 1.8));
console.log(bmi(80, 1.8));
console.log(bmi(80, 1.8));
console.log(bmi(80, 1.8));
console.log(bmi(80, 1.8));
