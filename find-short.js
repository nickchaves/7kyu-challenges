// Simple, given a string of words, return the length of the shortest word(s).

// String will never be empty and you do not need to account for different data types.

// My solution
function findShort(s){
    const sortedString = s.split(' ').sort((a,b) => a.length - b.length)
    return sortedString[0].length
}
console.log(findShort('hi my name is nick'))

/* Pseudo Code
-First I need to split the string into an array
-Then I'll sort the array be element length
-Then I'll return the length of the element at the zero index
*/

