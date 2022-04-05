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
    pad(string, length){
        let stringLength = string.length;
        //console.log(`The string's length is ${stringLength}`)
        //console.log(`The desired length is ${length}`)
        if (stringLength >= length){
            return string;
        } // Checks the string length

        // let difference = Math.floor(length - stringLength);
        //console.log(`The difference between the two values is ${difference}`)

        /* if (difference % 2 === 0 ) { // checks if the result is even
            return 'x'.repeat(Math.floor(difference / 2)) + string + 'x'.repeat(Math.floor(difference / 2))
        } else {
            return string + 'x'.repeat(difference)
        } */

        let startPaddingLength = Math.floor((length - stringLength) / 2);
        let endPaddingLength = length - stringLength - startPaddingLength;

        let paddedString = 'x'.repeat(startPaddingLength) + string + 'x'.repeat(endPaddingLength);
        return paddedString;

    }, // End pad()
}; // End Lodash Object

console.log(_.pad('hi',5));


// Do not write or modify code below this line.
module.exports = _;