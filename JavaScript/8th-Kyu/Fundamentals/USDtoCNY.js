// Create a function that converts US dollars (USD) to Chinese Yuan (CNY) . The input is the amount of USD as an integer,
// and the output should be a string that states the amount of Yuan followed by 'Chinese Yuan'

function usdcny(usd) {
  return (usd * 6.75).toFixed(2) + " Chinese Yuan";
}

console.log(usdcny(15));

// a.toFixed(2)

function usdcny(usd) {
  let cny = 6.75;
  let USDtoCNY = (usd * cny).toFixed(2);
  return USDtoCNY + " Chinese Yuan";
}
