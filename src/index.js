module.exports = function check(str, bracketsConfig) {
    let steck = [];
    function hasBrackets(bracket) {
        bracketsConfig.forEach(el => {
            if (el[0] === bracket) {
                steck.push(el[1]);
            } else if (el[1] === bracket) {
                steck.push("false");
            }
        });
    }
    str.split("").forEach(el => {
        el === steck[steck.length - 1] ? steck.pop() : hasBrackets(el);
    });
    return steck.length !== 0 ? false : true;
};
