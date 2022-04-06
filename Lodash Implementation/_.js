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

        let paddedString = ''.repeat(startPaddingLength) + string + ' '.repeat(endPaddingLength);
        return paddedString;

    }, // End pad()
    has(object, key) {
        let instance = object[key]; // checks if the object has a key with the assigned value
        if (instance === undefined) {
            return false;
        } else {
            return true;
        }
    }, // End has()
    invert(object) {
        let newObj = {}; //Stores the new object
        for (let key in object) {
            newObj[object[key]] = key;
        } // End for...in loop
        return newObj;
    },
    findKey(object, predicate) {
        for(let key in object) {
            if (predicate(object[key])) {
                return key;
            } // end if statement
        }; // End for...in loop
        return undefined;
    }, // End findKey()
}; // End Lodash Object




// Do not write or modify code below this line.
module.exports = _;