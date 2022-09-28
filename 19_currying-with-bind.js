/**
 * Currying with bind
 * 
 * Currying is breaking down a function with multiple arguments into one or
 * more functions that each accept a single argument.
 */

function multiply(a, b) {
	console.log(a * b);
}

let multiplyByTwo = multiply.bind(this, 2);
multiplyByTwo(4); // 8

let multiplyByTen = multiply.bind(this, 10);
multiplyByTen(6); // 60


// Exercise: Find the largest number in an array

const array = [1, 2, 3];

function getMaxNumber(arr) {
	console.log(Math.max.apply(null, arr));
}

getMaxNumber(array); // 3


// Exercise 2: How would you fix this?

const character = {
	name: "Simon",
	getCharacter() {
		console.log(this.name);
	}
};

// const giveMeTheCharacterNOW = character.getCharacter;

//How Would you fix this?
// console.log("?", giveMeTheCharacterNOW()); //this should return 'Simon' but doesn't

// ANSWER
// change this line
const giveMeTheCharacterNOW = character.getCharacter.bind(character);
console.log("?", giveMeTheCharacterNOW()); // ? Simon
