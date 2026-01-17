const config = require("./config");
const balance = require("./balance");
const saver = require("./saver");

async function startApp() {
  console.log("Web3 Wallet Balance Checker Started");

  const address = config.walletAddress;
  const data = await balance.getBalance(address);

  saver.saveBalance(data);

  console.log("Wallet:", address);
  console.log("Balance:", data.balance, "ETH");
}

startApp();
