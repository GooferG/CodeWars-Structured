// L1: Bartender, drinks!

function getDrinkByProfession(param) {
  switch (param.toLowerCase()) {
    case "jabroni":
      return "Patron Tequila";
      break;
    case "school counselor":
      return "Anything with Alcohol";
      break;
    case "programmer":
      return "Hipster Craft Beer";
      break;
    case "bike gang member":
      return "Moonshine";
      break;
    case "politician":
      return "Your tax Dollars";
      break;
    case "rapper":
      return "Cristal";
      break;
    default:
      return "Beer";
  }
}

console.log(getDrinkByProfession("Jabroni"));
console.log(getDrinkByProfession("SChool Counselor"));
console.log(getDrinkByProfession("programmer"));
console.log(getDrinkByProfession("bike gang member"));
console.log(getDrinkByProfession("politician"));
console.log(getDrinkByProfession("rapp"));

//  switch(expression) {
//   case x:
//     // code block
//     break;
//   case y:
//     // code block
//     break;
//   default:
//     // code block
// }
