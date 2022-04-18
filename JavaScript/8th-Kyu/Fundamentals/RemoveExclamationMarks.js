function removeExclamationMarks(s) {
  let search = "!";
  let repalceWith = "";
  return s.split(search).join(repalceWith);
}

console.log(removeExclamationMarks("Hel!lo World!!!!!"));
