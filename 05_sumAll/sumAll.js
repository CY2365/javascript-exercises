const sumAll = function(begin, end) {
    // Variable to hold sum of all values. To be returned at the end.
    var sumOfAll = 0

    // Checks if parameters are a number or not and if it is a positive
    // value.
    if (typeof begin !== 'number' || typeof end !== 'number' || 
        begin < 0 || end < 0) {
        return 'ERROR'
    // Checks which value is greater and loops accordingly.
    } else if (begin < end) {
        for (let i = begin; i < end +1; i++) {
            sumOfAll += i
        }
    } else if (begin > end) {
        for (let i = begin; i > end - 1; i--) {
            sumOfAll += i
        }
    }
    return sumOfAll
};

// Do not edit below this line
module.exports = sumAll;
