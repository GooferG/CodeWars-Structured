function duckDuckGoose(players, goose) {
  return players[(goose - 1) % players.length].name;
}

console.log(duckDuckGoose(players, 1));
