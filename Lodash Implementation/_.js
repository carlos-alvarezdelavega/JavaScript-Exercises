// The Lodash Object
const _ = {
    clamp(num, lowerBound, upperBound) {
        if (num <= lowerBound) {
            return lowerBound;
        } else if(num >= upperBound) {
            return upperBound;
        } else {
            return num;
        }
    }, // End clamp()
}; // End Lodash Object

console.log(_.clamp(5,6,8))


// Do not write or modify code below this line.
module.exports = _;