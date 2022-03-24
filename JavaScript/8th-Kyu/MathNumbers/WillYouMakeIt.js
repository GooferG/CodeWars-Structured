const zeroFuel = (distanceToPump, mpg, fuelLeft) => {
  // TODO
  if (distanceToPump > mpg * fuelLeft) {
    return false;
  } else if (distanceToPump <= mpg * fuelLeft) {
    return true;
  }
};

console.log(zeroFuel(50, 25, 2));
console.log(zeroFuel(100, 50, 1));
console.log(zeroFuel(50, 25, 2));
