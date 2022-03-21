function setAlarm(employed, vacation) {
  if (employed === true && vacation === true) {
    return false;
  } else if (employed === false && vacation === true) {
    return false;
  } else if (employed === false && vacation === false) {
    return false;
  } else if (employed === true && vacation === false) {
    return true;
  }
}

console.log(setAlarm(true, true));
console.log(setAlarm(false, true));
console.log(setAlarm(false, false));
console.log(setAlarm(true, false));
