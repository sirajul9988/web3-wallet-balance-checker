async function fetchBalance(address) {
  return {
    balance: Math.random() * 5
  };
}

module.exports = {
  fetchBalance
};
