// Responsible Drinking

const hydrate = (d) => {
  if (d === 1) {
    return `${d} glass of water`;
  } else if (d > 1) {
    return `${d} glasses of water`;
  }
};

console.log(hydrate(1));
