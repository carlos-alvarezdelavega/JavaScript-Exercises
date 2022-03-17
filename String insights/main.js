let story =
  'Last weekend, I took literally the most beautiful bike ride of my life. The route is called "The 9W to Nyack" and it actually stretches all the way from Riverside Park in Manhattan to South Nyack, New Jersey. It\'s really an adventure from beginning to end! It is a 48 mile loop and it basically took me an entire day. I stopped at Riverbank State Park to take some extremely artsy photos. It was a short stop, though, because I had a really long way left to go. After a quick photo op at the very popular Little Red Lighthouse, I began my trek across the George Washington Bridge into New Jersey.  The GW is actually very long - 4,760 feet! I was already very tired by the time I got to the other side.  An hour later, I reached Greenbrook Nature Sanctuary, an extremely beautiful park along the coast of the Hudson.  Something that was very surprising to me was that near the end of the route you actually cross back into New York! At this point, you are very close to the end.';

let overusedWords = ["really", "very", "basically"];

let unnecessaryWords = ["extremely", "literally", "actually"];

// split the story string into individual words and save them in a new array called storyWords.
let storyWords = story.split(" ");

// console.log(storyWords.length);

// the ! Logical Opperator inverts the boolean value of the unnecessaryWords array. This, in turn, uses the .includes() method to filter out the words that are included in the unnecessaryWords array.

let betterWords = storyWords.filter(
  (words) => !unnecessaryWords.includes(words)
);

// This function takes two arrays as parameters. It countWords is set as an empty array. 
// A nested loop compares the two arrays and pushes the duplicates to countWords. 
// It returns a statement of the number of repeated countWords.

const calculateUnnecessaryWords = (array1, array2) => {
  let countWords = [];
  for (let i = 0; i < array1.length; i++) {
    for (let j = 0; j < array2.length; j++) {
      if (array1[i] === array2[j]) {
        countWords.push(array2[j]);
      } // End if statement
    } // End inner loop
  } // End outter loop
  return countWords.length;
}; // End function

/* calls function with the storyWords and unecessaryWords as parameters.

console.log(calculateUnnecessaryWords(storyWords, unnecessaryWords)); */

// This function counts the number of sentences in an array

const countSentences = (array) => {
  let sentenceCounter = 0;
  array.forEach((sentence) => {
    if (sentence.endsWith(".") || sentence.endsWith("!")) {
      sentenceCounter++;
    } // end if statement
  });
  return sentenceCounter;
};

// A function that finds the word that appears the greatest number of times

const findMostUsedWord = (array) => {
  const hashmap = array.reduce((acc, val) =>{
    acc[val] = (acc[val] || 0 ) + 1 
    return acc
  }, {}); // End hashmap variable
  return Object.keys(hashmap).reduce((a, b) => hashmap[a] > hashmap[b] ? a : b); // is hashmap[a] greater than hashmap[b] ? true retrun a / false return b 
}; // End function


const sentenceInsights = () => {
  return (
    "Your story has: " +
    storyWords.length +
    " words, " +
    countSentences(storyWords) +
    " sentences, " +
    calculateUnnecessaryWords(storyWords, unnecessaryWords) +
    " overused words, and" +
    " the most used word is: " +
    findMostUsedWord(storyWords) + "."
  );
};

console.log(betterWords.join(" "));
console.log(sentenceInsights());

/* Paractice Opportunities:

For the overused words, remove it every other time it appears.

Write a function that finds the word that appears the greatest number of times.

Replaced overused words with something else.

*/

