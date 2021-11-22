const removeFromArray = function(theArray, ...remove) {
    // theArray is going to be modified permanently so newArray is made
    let newArray = theArray
    // For every item in the rest parameter remove, check if it occurs
    // in newArray. If it does, remove that item with splice from
    // newArray.
    for (let i in remove) {
        for (let x in newArray) {
            if (remove[i] === newArray[x]) {
                newArray.splice(x, 1)
            }
        }
    }
    // Return the spliced newArray.
    return newArray
};

// Do not edit below this line
module.exports = removeFromArray;

