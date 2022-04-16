// The Lodash Object
const _ = {
  clamp(num, lowerBound, upperBound) {
    if (num <= lowerBound) {
      return lowerBound;
    } else if (num >= upperBound) {
      return upperBound;
    } else {
      return num;
    }
  }, // End clamp()
  inRange(number, start, end) {
    if (end === undefined) {
      end = start;
      start = 0;
    }

    if (start > end) {
      let temp = start; // this temporary value holds the original value of start
      start = end; // start´s original value becomes end
      end = temp; // end becomes the temporary value
    }

    if (number < start) {
      return false;
    } else if (number >= end) {
      return false;
    } else {
      return true;
    }
  }, // End inRange()
  words(string) {
    if (typeof string != "string") {
      return "The argument is not a string."; // Checks that the argument is a string.
    } else {
      return string.split(" ");
    }
  }, // End words()
  pad(string, length) {
    let stringLength = string.length;
    //console.log(`The string's length is ${stringLength}`)
    //console.log(`The desired length is ${length}`)
    if (stringLength >= length) {
      return string;
    } // Checks the string length
    let startPaddingLength = Math.floor((length - stringLength) / 2);
    let endPaddingLength = length - stringLength - startPaddingLength;

    let paddedString =
      "".repeat(startPaddingLength) + string + " ".repeat(endPaddingLength);
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
    for (let key in object) {
      if (predicate(object[key])) {
        return key;
      } // end if statement
    } // End for...in loop
    return undefined;
  }, // End findKey()
  /* === Array Methods === */
  drop(array, number) {
    if (number === undefined) {
      return array.slice(1);
    } else if (number === 0) {
      return array;
    } else if (number >= array.length) {
      return [];
    }

    return array.slice(number);
  }, // End drop()
  dropWhile(array, predicate) {
    let dropNum = array.findIndex((element,index) =>{
      return !(predicate(element, index, array));
    }); // End dropNum 
    //
    let dropArray = this.drop(array, dropNum);
    //
    return dropArray;
  }, // End dropWhile()
  chunk(array, size) {
    let newArray = []; // Array where the 'chunks' will be stored
    //
    for(let i = 0; i < array.length; i += size){
      let portion = array.slice(i, i + size) // stores a portion of the array
      newArray.push(portion); // at each iteration pushes a new 'chunk' to the newArr variable
    }; // end for loop
    //
    return newArray;
  }, // End the chunk() method
}; // End Lodash Object




// Do not write or modify code below this line.
module.exports = _;
