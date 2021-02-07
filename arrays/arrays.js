const emptyArray = [];
const arrayOfNumbers = [12, 456, 1.3, 4e6];
const arrayOfStrings = ['Apple', 'Banana', 'Kiwi'];
const mixedArray = [12, 'Apple', false];
const arrayOfArrays = [arrayOfNumbers, arrayOfStrings];
const arraySpreading = [...arrayOfNumbers, ...arrayOfStrings];

arrayOfStrings[2] = 'Orange';
arrayOfStrings[1]; // → 'Banana'
arrayOfStrings.indexOf('Banana'); // → 1
arrayOfStrings.includes('Banana'); // → true

const [a, b] = arrayOfStrings; // destructuring, a = 'Apple', b = 'Banana'
