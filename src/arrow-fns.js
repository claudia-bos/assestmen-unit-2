// Unit 2 Assessment: arrow-fns.js

// Set the value of giveMeTwo to an arrow function that returns 2.
//
// Ex.:
//   giveMeTwo();
//   => 2

const giveMeTwo = undefined;

const giveMeTwo = () => {
    return 2
}

// Set the value of addNums to an arrow function that takes in two numbers and
// returns their sum.
//
// Ex.:
//   addNums(1, 2);
//   => 3
const addNums = undefined;


const addNums = (number1, number2) => {
    return number1 + number2
}

// Set the value of max to an arrow function that takes in two numbers and
// returns the largest one.
//
// Ex.:
//   max(1, 2);
//   => 2
const max = undefined;

const max = (number1, number2) => {
    return Math.max(number1, number2)
}

// Given an array of numbers, return a new array that only includes the even
// numbers. Do this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   evens([1, 2, 3, 4, 5]);
//   => [2, 4]
function evens(nums) {
    const evenNumbers =  nums.filter((number) => {
       return number % 2 === 0
    })
    return evenNumbers
}

// Given an array of names, return a new array of greetings for each name. Do
// this using array iteration methods. Do NOT use a for loop.
//
// Ex.:
//   createGreetings(['Clive', 'Jill', 'Torgal']);
//   => ['Hello, Clive!', 'Hello, Jill!', 'Hello, Torgal!']
function createGreetings(names) {
  const greetings = names.map(name => {
        return "Hello, ${name}!" 
    })
    return greetings
}

// Given an array of words, return a new array where each word is uppercased
// and only includes words that are longer than 4 characters. Do this using
// array iteration methods (you may need more than one). Do NOT use a for loop.
//
// Ex.:
//   loudLongWords(['apple', 'pear', 'cake', 'pinata']);
//   => ['APPLE', 'PINATA']
function loudLongWords(words) {
    const longWords = words.filter((word) => {
        return word.length > 4
    })

    const upperCaseWords = longWords.map((word) => {
        return word.toUpperCase()
    })

   return upperCaseWords
}

export { addNums, createGreetings, evens, giveMeTwo, loudLongWords, max };

