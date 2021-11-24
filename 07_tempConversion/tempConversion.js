// Formula for C to F: C * 1.8 + 32
// Formula for F to C: (F - 32) * (5/9)

const ftoc = function(fahrenheit) {
    let celsius = (fahrenheit - 32) * (5/9)
    let rounded = Math.round(celsius * 10) / 10
    return rounded
};

const ctof = function(celsius) {
    let fahrenheit = celsius * 1.8 + 32
    var rounded = Math.round(fahrenheit * 10) / 10
    return rounded
};

// Do not edit below this line
module.exports = {
  ftoc,
  ctof
};
