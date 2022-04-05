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
    words(string){
        if(typeof string != 'string') {
            return "The argument is not a string." // Checks that the argument is a string. 
        } else {
            return string.split(" ");
        }

        
    }, // End words()
}; // End Lodash Object

console.log(_.words('Fred is queer.'));


// Do not write or modify code below this line.
module.exports = _;