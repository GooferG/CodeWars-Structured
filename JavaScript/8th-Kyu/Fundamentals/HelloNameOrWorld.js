function hello(name) {
  if (name) {
    let nameProper = name;
    nameProper = name[0].toUpperCase() + nameProper.substring(1).toLowerCase();
    return `Hello, ${nameProper}!`;
  } else {
    return `Hello, World!`;
  }
}

console.log(hello("asdfEWE"));
