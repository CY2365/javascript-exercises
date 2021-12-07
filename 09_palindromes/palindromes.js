// used guidance from solutions branch. Needed help with regular
// expresions. Also used return like in the solution for cleaner code.

const palindromes = function (string) {
    let cleanString = string.toLowerCase().replace(/[^A-Za-z]/g, "")
    return (cleanString
        .split("")
        .reverse()
        .join("") == cleanString);
};

// Do not edit below this line
module.exports = palindromes;
