function areYouPlayingBanjo(name) {
  // Implement me
  return name.charAt(0) === "R" || name.charAt(0) === "r"
    ? `${name} plays banjo`
    : `${name} does not play banjo`;
}

console.log(areYouPlayingBanjo("Adam"));
console.log(areYouPlayingBanjo("Ringo"));

// if (name.charAt(0) === "R" || name.charAt(0) === "r") {
//   return `${name} plays banjo`;
// } else {
//   return `${name} does not play banjo`;
// }
