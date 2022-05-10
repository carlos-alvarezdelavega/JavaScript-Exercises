/* 
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. 
At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #

When you have a program that generates this pattern, define a binding size = 8 
and change the program so that it works for any size, outputting a grid of the given width and height.

*/
const calculateGrid = (width, height) =>{
    let patternOne = ' #';
    let patternTwo = '# ';

    for(let i = 0; i <= number; i++){
          if(i % 2 === 0) {
              console.log(patternOne);
          } else {
              console.log(patternTwo);
          }
    } // end loop */
}

let newLine = "";

for(let outter = 0; outter <= 8; outter++){
    newLine = newLine + '\n'
   for (let inner = 0; inner <= 8; inner++){
     if(inner % 2 === 0){
        newLine = newLine + ' '
     } else {
        newLine = newLine + '#'
     } // end column generator
    } // inner loop 
} // outter loop

console.log(newLine);
