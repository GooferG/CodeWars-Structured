// function warnTheSheep(queue) {
//   if (queue[queue.length - 1] === "wolf") {
//     return "Pls go away and stop eating my sheep";
//   } else if (queue[queue.length - 1] !== "wolf") {
//     let wolf = queue.indexOf("wolf") + 1;
//     let sheep = queue.length - wolf;
//     return `Oi! Sheep number ${sheep} You are about to be eaten by a wolf!`;
//   }
// }

function warnTheSheep(queue) {
  const position = queue.reverse().indexOf("wolf");
  return position === 0
    ? "Pls go away and stop eating my sheep"
    : `Oi! Sheep number ${position}! You are about to be eaten by a wolf!`;
}

console.log(
  warnTheSheep(["sheep", "wolf", "sheep", "sheep", "sheep", "sheep", "sheep"])
);

console.log(warnTheSheep(["wolf"]));
console.log(warnTheSheep(["sheep", "sheep", "wolf"]));
