const debuger = require("debug");
const log = debuger("debug");

class Transaction {
  store = new Map();
  logs = [];

  constructor() {}

  #validation = scenario => {
    const schema = {
      index: "number",
      call: "function",
      restore: "function",
      meta: {
        type: "object",
        values: {
          title: "string",
          description: "string"
        }
      }
    };

    scenario.forEach(step => {
      for (let key in schema) {
        if (!step.hasOwnProperty(key)) {
          throw new Error(`Scenario property "${key}" is required!`);
        }

        if (
          typeof step[key] !== schema[key] &&
          typeof step[key] !== schema[key].type
        ) {
          throw new Error(
            `Scenario property "${key}" should be ${
              schema[key] === "object" ? "an" : "a"
            } ${schema[key]}!`
          );
        }
      }
    });
  };

  async dispatch(scenario) {
    this.#validation(scenario);

    for (const step of scenario) {
      const { store, logs } = this;

      try {
        const result = await step.call(store, logs);

        store.set(step.index, result);
      } catch (e) {
        this.rollback(scenario);
      }
    }
  }

  async rollback(scenario) {
    console.error("Error scenario!");
  }
}

module.exports = Transaction;
