const findFirstRecurringCharacters = (input: any) => {
    const charHashMap = {};
    for (const char of input) {
        if (charHashMap[char] === true) {
            return char;
        }
        charHashMap[char] = true;
        console.log(charHashMap)
    }
    return null;
  };

  // A complexidade algoritmica da função é de O(n)
