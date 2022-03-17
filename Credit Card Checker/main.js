// All valid credit card numbers
const valid1 = [4, 5, 3, 9, 6, 7, 7, 9, 0, 8, 0, 1, 6, 8, 0, 8]
const valid2 = [5, 5, 3, 5, 7, 6, 6, 7, 6, 8, 7, 5, 1, 4, 3, 9]
const valid3 = [3, 7, 1, 6, 1, 2, 0, 1, 9, 9, 8, 5, 2, 3, 6]
const valid4 = [6, 0, 1, 1, 1, 4, 4, 3, 4, 0, 6, 8, 2, 9, 0, 5]
const valid5 = [4, 5, 3, 9, 4, 0, 4, 9, 6, 7, 8, 6, 9, 6, 6, 6]

// All invalid credit card numbers
const invalid1 = [4, 5, 3, 2, 7, 7, 8, 7, 7, 1, 0, 9, 1, 7, 9, 5]
const invalid2 = [5, 7, 9, 5, 5, 9, 3, 3, 9, 2, 1, 3, 4, 6, 4, 3]
const invalid3 = [3, 7, 5, 7, 9, 6, 0, 8, 4, 4, 5, 9, 9, 1, 4]
const invalid4 = [6, 0, 1, 1, 1, 2, 7, 9, 6, 1, 7, 7, 7, 9, 3, 5]
const invalid5 = [5, 3, 8, 2, 0, 1, 9, 7, 7, 2, 8, 8, 3, 8, 5, 4]

// Can be either valid or invalid
const mystery1 = [3, 4, 4, 8, 0, 1, 9, 6, 8, 3, 0, 5, 4, 1, 4]
const mystery2 = [5, 4, 6, 6, 1, 0, 0, 8, 6, 1, 6, 2, 0, 2, 3, 9]
const mystery3 = [6, 0, 1, 1, 3, 7, 7, 0, 2, 0, 9, 6, 2, 6, 5, 6, 2, 0, 3]
const mystery4 = [4, 9, 2, 9, 8, 7, 7, 1, 6, 9, 2, 1, 7, 0, 9, 3]
const mystery5 = [4, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 2, 3]
const mystery6 = [1, 9, 1, 3, 5, 4, 0, 4, 6, 3, 0, 7, 2, 5, 6, 3]

// An array of all the arrays above
const batch = [valid1, valid2, valid3, valid4, valid5, invalid1, invalid2, invalid3, invalid4, invalid5, mystery1, mystery2, mystery3, mystery4, mystery5, mystery6]
const batchTest = [valid1, valid2, invalid1, invalid2, mystery1];

// Add your functions below:

// convertToArray takes a string of numbers as an argument. This function returns an array of numbers.
const convertToArray = string => {
   let arrayOfNumbers = string.split('');
    return arrayOfNumbers.map(x => Number(x));
}; // End convert to Array

console.log(convertToArray('123442134332244'))

// validateCred() takes an array of numbers as a parameter and returns a boolean. The function checks if the cards are valid (returns true) or invalid (returns false)
function validateCred(array) {
    // console.log(array);
    let value = array.join('')
    // console.log(value);
    // Accept only digits, dashes or spaces
    if (/[^0-9-\s]+/.test(value)) { return false} ;

    let nCheck = 0
    let bEven = false

    value = value.replace(/\D/g, "")

    // Reverse loop
    for (let i = value.length - 1; i >= 0; i--) {
        let cDigit = value.charAt(i), nDigit = parseInt(cDigit, 10)

        if (bEven && (nDigit *= 2) > 9) { nDigit -= 9} ;
        // console.log('cDigit is equal to: ' + cDigit);
        // console.log('nDigit is equal to: ' + nDigit);
        nCheck += nDigit
        bEven = !bEven
    } // End reverse loop

    return (nCheck % 10) === 0

} // End validateCred()

// console.log(validateCred(mystery1));

// findInvalidCards takes an array of nested arrays as a parameter. This function returns an array of nested arrays with invalid credit card numbers
const findInvalidCards = batch => {
    let invalidCards = [];
    batch.forEach(element => {
        if (validateCred(element) === false) {
            invalidCards.push(element);
        }; 
    }); // End forEach
    return invalidCards
}; // End findInvalidCards()

// console.log(findInvalidCards(batchTest));

// idInvalidCardCompanies() takes one parameter, an array of nested arrays. It returns an array of company names of which each invalid company belongs to. 

const idInvalidCardCompanies = batch => {
    let companyNames = [];
    batch.forEach(element =>{
        // console.log(element[0]);
        switch (element[0]) {
            case 3:
                companyNames.push('Amex (American Express)');
                break;
            case 4:
                companyNames.push('Visa');
                break;
            case 5:
                companyNames.push('Mastercard');
                break;
            case 6: 
                companyNames.push('Discover');
                break;
            default:
                companyNames.push('Company not found');
        };// end switch case */
    }); // End .forEach() Method
   // return [...new Set(companyNames)];
    return companyNames.filter((element, index) =>{
        return companyNames.indexOf(element) === index;
    });
}; // End idInvalidCardCompanies()

// console.log(idInvalidCardCompanies(findInvalidCards(batch)));