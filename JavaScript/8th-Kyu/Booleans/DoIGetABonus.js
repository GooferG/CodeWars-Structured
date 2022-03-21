function bonusTime(salary, bonus) {
  // your code here
  if (bonus === true) {
    let bonusPay = salary * 10;
    return `$${bonusPay}`;
  } else if (bonus === false) {
    return `$${salary}`;
  }
}

console.log(bonusTime(70000, true));
