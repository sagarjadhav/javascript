/**
 * Hoisting is the process of putting all variable and function declarations into memory during the compile phase.
 * In JavaScript, functions are fully hoisted, var variables are hoisted and initialized to undefined,
 * and let and const variables are hoisted but not initialized a value.
 * Var variables are given a memory allocation and initialized a value of undefined
 * until they are set to a value in line.
 * So if a var variable is used in the code before it is initialized, then it will return undefined.
 * However, a function can be called from anywhere in the code base because it is fully hoisted.
 * If let and const are used before they are declared,
 * then they will throw a reference error because they have not yet been initialized.
 */

// function expression gets hoisted as undefined
var sing = function() {
	console.log("uhhhh la la la");
};

// function declaration gets fully hoisted
function sing2() {
	console.log("ohhhh la la la");
}

// function declaration gets hoisted
function a() {
	console.log("hi");
}

// function declaration get rewritten in memory
function a() {
	console.log("bye");
}

console.log(a()); // bye


// variable declaration gets hoisted as undefined
var favoriteFood = "grapes";

// function expression gets hoisted as undefined
var foodThoughts = function() {
	// new execution context created favoriteFood = undefined
	console.log(`Original favorite food: ${favoriteFood}`);

	// variable declaration gets hoisted as undefined
	var favoriteFood = "sushi";

	console.log(`New favorite food: ${favoriteFood}`);
};

foodThoughts();

// TAKEAWAYS

/**
 * Avoid hoisting when possible.
 * It can cause memory leaks and hard to catch bugs in your code.
 * Use let and const as your go to variables.
 */
