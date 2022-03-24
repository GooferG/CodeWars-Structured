let deck = [
  "2♣",
  "3♣",
  "4♣",
  "5♣",
  "6♣",
  "7♣",
  "8♣",
  "9♣",
  "10♣",
  "J♣",
  "Q♣",
  "K♣",
  "A♣",
  "2♦",
  "3♦",
  "4♦",
  "5♦",
  "6♦",
  "7♦",
  "8♦",
  "9♦",
  "10♦",
  "J♦",
  "Q♦",
  "K♦",
  "A♦",
  "2♥",
  "3♥",
  "4♥",
  "5♥",
  "6♥",
  "7♥",
  "8♥",
  "9♥",
  "10♥",
  "J♥",
  "Q♥",
  "K♥",
  "A♥",
  "2♠",
  "3♠",
  "4♠",
  "5♠",
  "6♠",
  "7♠",
  "8♠",
  "9♠",
  "10♠",
  "J♠",
  "Q♠",
  "K♠",
  "A♠",
];

function defineSuit(card) {
  // good luck
  if (card.length === 3) {
    if (card.charAt(2) === "♣") {
      return "clubs";
    } else if (card.charAt(2) === "♦") {
      return "diamonds";
    } else if (card.charAt(2) === "♥") {
      return "hearts";
    } else if (card.charAt(2) === "♠") {
      return "spades";
    }
  } else if (card.length === 2) {
    if (card.charAt(1) === "♣") {
      return "clubs";
    } else if (card.charAt(1) === "♦") {
      return "diamonds";
    } else if (card.charAt(1) === "♥") {
      return "hearts";
    } else if (card.charAt(1) === "♠") {
      return "spades";
    }
  }
}

console.log(defineSuit("10♠"));

function defineSuit1(card) {
  // good luck
  if (card.charAt(1) === "♣") {
    return "clubs";
  } else if (card.charAt(1) === "♦") {
    return "diamonds";
  } else if (card.charAt(1) === "♥") {
    return "hearts";
  } else if (card.charAt(1) === "♠") {
    return "spades";
  }
}

console.log(defineSuit1("Q♠"));
console.log("10♠".length);
