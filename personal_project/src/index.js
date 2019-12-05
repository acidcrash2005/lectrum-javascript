const debuger = require("debug");
const log = debuger("result");

const Transaction = require("./Transaction.js");
const scenario = require("./scenario");

const transaction = new Transaction();
(async () => {
  try {
    await transaction.dispatch(scenario);
    const { store, logs, status } = transaction;
    log(store);
    log(logs);
    log(status);
  } catch (error) {
    // Send email about broken transaction
    console.log(error);
  }
})();
