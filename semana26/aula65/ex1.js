const findFirstRecurringCharacters = (input) => {
    const charHashMap = {};
    for (const char of input) {
        if (charHashMap[char] === true) {
            return char;
        }
        charHashMap[char] = true;
        console.log(charHashMap);
    }
    return null;
};
