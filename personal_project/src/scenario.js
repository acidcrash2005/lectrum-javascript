const debuger = require("debug");
const log = debuger("logger");

const scenario = [
  {
    index: 1,
    meta: {
      title: "Collect backup information.",
      description: "Collects pieces of data that required for restore scenario"
    },
    async call(store, logs) {
      return "1";
    },
    async restore(store, logs) {
      // Логика отката шага
    }
  },
  {
    index: 2,
    meta: {
      title: "Withdraw funds from source account.",
      description:
        "Takes off funds from source account and freezes it until entire scenario ends successfully or unsuccessfully."
    },
    async call(store, logs) {
      const data = store.get(store.size);
      log(data);
      return data + 1;
    },
    async restore(store, logs) {
      // Логика отката шага
    }
  },
  {
    index: 3,
    meta: {
      title: "Test title",
      description: "Test derct"
    },
    async call(store, logs) {
      const data = store.get(store.size);
      log(data);
      return data + 1;
    },
    async restore(store, logs) {
      // Логика отката шага
    }
  }
];

module.exports = scenario;
