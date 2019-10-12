const validateStringArray = (value,source) => {
    const toArray = Array.from(value);

    if (toArray.includes('[') && toArray.includes(']') && toArray.includes(',')) {
        throw new Error(`'${value}' in [${source}] is not an array!`);
    }
};

const printErrorNumber = (value,source) => {
    throw new Error(`Function is interop because argument "${value}" in [${source}] not a number!`);
};

module.exports = {validateStringArray, printErrorNumber};