const debuger = require("debug");
const log = debuger("results");

const Transaction = require("./Transaction.js");
const scenario = require("./scenario_releas");

const transaction = new Transaction();
(async () => {
  try {
    await transaction.dispatch(scenario);
    const { store, logs, status } = transaction;
    log("Store", store);
    log("Logs", logs);
    log("Status", status);
  } catch (error) {
    // Send email about broken transaction
    console.log(error);
  }
})();
