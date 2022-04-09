function gooseFilter(birds) {
  let geese = ["African", "Roman Tufted", "Toulouse", "Pilgrim", "Steinbacher"];
  console.log(!geese.includes("Hook Bill"));
  return birds.filter((item) => !geese.includes(item));
  // return an array containing all of the strings in the input array except those that match strings in geese
}

console.log(
  gooseFilter([
    "Mallard",
    "Hook Bill",
    "African",
    "Crested",
    "Pilgrim",
    "Toulouse",
    "Blue Swedish",
  ])
);
