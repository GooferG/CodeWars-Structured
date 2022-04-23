function twoSort(s) {
  return s.sort()[0].split("").join("***");
}

console.log(twoSort(["java", "php", "python", "javascript", "full stack"]));
