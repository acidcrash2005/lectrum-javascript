const scenario = [
  {
    index: 1,
    meta: {
      title: "Collect backup information.",
      description: "Collects pieces of data that required for restore scenario"
    },
    async call(store, logs) {
      const data = 10;

      return data;
    },
    async restore(store, logs) {
      const data = store.get(this.index);

      // throw new TypeError("Test rollback, error!");

      return data;
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
      const result = data + 1;

      // throw new TypeError("Test, error!");

      return result;
    },
    async restore(store, logs) {
      const data = store.get(this.index);

      return data;
    }
  },
  {
    index: 3,
    meta: {
      title: "Test title",
      description: "Test description"
    },
    async call(store, logs) {
      const data = store.get(store.size);
      const result = data + 1;

      return result;
    },
    async restore(store, logs) {
      const data = store.get(this.index);

      return data;
    }
  }
];

module.exports = scenario;
