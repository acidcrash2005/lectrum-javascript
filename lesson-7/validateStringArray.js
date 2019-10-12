const validateStringArray = (value,source) => {
    const toArray = Array.from(value);

    if (toArray.includes('[') && toArray.includes(']') && toArray.includes(',')) {
        throw new Error(`'${value}' in [${source}] is not an array!`);
    }
};

module.exports = validateStringArray;