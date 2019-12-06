let DB = [
  {
    countNum: 1022655445588779,
    balance: 150000,
    currency: "EUR",
    // status: "black"
    status: "green"
  },
  {
    countNum: 1127398172398712,
    balance: 0,
    currency: "USD",
    status: "green"
  }
];

const users = [
  {
    name: "Gennadiy",
    email: "acidcrash2005@gmail.com",
    countNum: 1022655445588779
  },
  {
    name: "Vasiliy",
    email: "unknow@gmail.com",
    countNum: 1127398172398712
  }
];

const getUser = email => {
  const user = users.find(user => user.email === email);

  if (!user) {
    throw new Error("No user in BD!");
  }

  return user;
};

const getBalance = user => {
  const { countNum } = user;

  const count = DB.find(count => count.countNum === countNum);

  if (!count) {
    throw new Error(`No count in base with number ${countNum}!`);
  }

  if (count.status === "black") {
    throw new Error(
      `The count ${countNum} in black list and arrest!!! Run the police are coming!!!`
    );
  }

  return count;
};

const sendMoney = countInfo => {
  const { countNum, balance } = countInfo;

  return {
    ...countInfo,
    countNum,
    balance: balance - 100
  };
};

const scenario = [
  {
    index: 1,
    meta: {
      title: "Auth user",
      description: "Authentication user by login & pass"
    },
    async call() {
      return getUser("acidcrash2005@gmail.com");
    },
    async restore(store, logs) {
      return store.get(this.index);
    }
  },
  {
    index: 2,
    meta: {
      title: "Get user balance",
      description: "User active balance on count."
    },
    async call(store) {
      const user = store.get(store.size);

      return getBalance(user);
    },
    async restore(store, logs) {
      return store.get(this.index);
    }
  },
  {
    index: 3,
    meta: {
      title: "Send money",
      description: "Send 100 EUR to count"
    },
    async call(store) {
      const countInfo = store.get(store.size);

      return sendMoney(countInfo);
    },
    async restore(store, logs) {
      return store.get(this.index);
    }
  },
  {
    index: 4,
    meta: {
      title: "Change data",
      description: "Change balance on user count"
    },
    async call(store) {
      const newBalance = store.get(store.size);

      DB = DB.map(count => {
        if (count.countNum === newBalance.countNum) {
          return {
            ...count,
            ...newBalance
          };
        }

        return count;
      });

      return DB;
    },
    async restore(store, logs) {
      return store.get(this.index);
    }
  }
];

module.exports = scenario;
