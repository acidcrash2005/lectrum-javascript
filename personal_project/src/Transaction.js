class Transaction {
  #scenarioSchema = {
    index: "number",
    call: "function",
    restore: "function",
    meta: {
      title: "string",
      description: "string"
    }
  };

  store = new Map();
  logs = [];
  status = null;

  #validation = (scenario, schema = this.#scenarioSchema) => {
    if (scenario.length === 0) {
      throw new Error(`Scenario should be not empty!`);
    }

    scenario.forEach(step => {
      for (let key in schema) {
        if (!step.hasOwnProperty(key)) {
          throw new Error(`Scenario property "${key}" is required!`);
        }

        const typeSchema =
          typeof schema[key] !== "object" ? schema[key] : "object";

        if (typeof step[key] !== typeSchema) {
          throw new Error(
            `Scenario property "${key}" should be ${
              schema[key] === "object" ? "an" : "a"
            } ${schema[key]}!`
          );
        }

        if (typeof schema[key] === "object") {
          this.#validation([step[key]], schema[key]);
        }
      }
    });
  };

  #addStatus = status => {
    if (status === "success") {
      this.status = `Transaction successful done!`;
    }

    if (status === "rollback") {
      this.status = `Transaction rollback recovery data success!`;
    }

    if (status === "fail") {
      this.status = `Transaction rollback recovery data fail!`;
    }
  };

  #addToLog = data => {
    const { index, meta, result, error } = data;

    let errorMessage = null;

    if (error) {
      const { name, message, stack } = error;

      errorMessage = {
        name,
        message,
        stack
      };
    }

    const log = {
      index,
      meta,
      stepResult: result || null,
      error: errorMessage
    };

    this.logs.push(log);
  };

  async dispatch(scenario) {
    this.#validation(scenario);
    let currentStep;

    try {
      for (const step of scenario) {
        const { store, logs } = this;
        currentStep = step;

        const result = await step.call(store, logs);
        store.set(step.index, result);
        this.#addToLog({ ...step, result });
      }
      this.#addStatus("success");
    } catch (error) {
      this.#addToLog({ ...currentStep, error });
      await this.rollback(scenario);
    }
  }

  async rollback(scenario) {
    const reverseScenario = [...this.store].reverse();
    const rollbackMap = new Map(reverseScenario);
    let currentStep;

    try {
      for (const [indexStep] of rollbackMap) {
        const { store, logs } = this;
        const step = scenario.find(({ index }) => index === indexStep);
        currentStep = step;

        const result = await step.restore(store, logs);
        this.store.delete(indexStep);
        this.#addToLog({ ...step, result });
      }
      this.#addStatus("rollback");
    } catch (error) {
      this.#addToLog({ ...currentStep, error });
      this.#addStatus("fail");
    }
  }
}

module.exports = Transaction;
