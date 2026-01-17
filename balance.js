const api = require("./api");

async function getBalance(address) {
  const result = await api.fetchBalance(address);
  return {
    wallet: address,
    balance: result.balance || 0,
    checkedAt: new Date().toISOString()
  };
}

module.exports = {
  getBalance
};
