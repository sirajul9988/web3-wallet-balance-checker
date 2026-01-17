const fs = require("fs");

function saveBalance(data) {
  fs.writeFileSync("data/balance.json", JSON.stringify(data, null, 2));
}

module.exports = {
  saveBalance
};
