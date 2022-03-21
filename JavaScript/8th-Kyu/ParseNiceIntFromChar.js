function getAge(inputString) {
  // return correct age (int). Happy coding :)
  let age = inputString.charAt(0);
  let ageInt = parseInt(age);
  return ageInt;
}

console.log(getAge("4 years old"));
