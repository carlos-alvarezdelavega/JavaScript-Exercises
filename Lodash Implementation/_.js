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
    inRange(number, start, end) {
        if (end === undefined) {
            end = start
            start = 0
        }
    
        if (start > end) {
            let temp = start // this temporary value holds the original value of start
            start = end // start´s original value becomes end
            end = temp // end becomes the temporary value
        }

        if (number < start) {
            return false
        } else if (number >= end) {
            return false
        } else {
            return true
        }

    }, // End inRange()

}; // End Lodash Object

console.log(_.inRange(1,1,3));


// Do not write or modify code below this line.
module.exports = _;