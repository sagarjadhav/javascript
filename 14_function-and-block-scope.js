/**
 * Most programming languages are block scoped,
 * meaning every time you see a new { } (curly braces) is a new lexical environment.
 * However, JavaScript is function scoped, meaning it only creates a new local environment
 * if it sees the keyword function on the global scope.
 * To give us access to block scope, in ES6 let and const were added to the language.
 * Using these can prevent memory leaks, but there is still an argument to be made for using var.
 */

// Function Scope
function loop() {
	for (var i = 0; i < 5; i++) {
		console.log(i);
	}

	console.log("final", i); // returns final 5
}

// Block Scope
function loop2() {
	for (let i = 0; i < 5; i++) {
		// can access i here
	}

	console.log("final", i); // returns an error here
}

loop();

/*
	1
	2
	3
	4
	final 5
*/

loop2();
// ReferenceError: i is not defined


// LET AND CONST

/**
 * Variable declarations with let and const work differently
 * from the var variable declaration and I wanted to take a minute to explain.
 * When a lexical scope is entered and the execution context is created,
 * the engine allocates memory for any var variable in that scope and initializes it to undefined.
 * The let and const variables only get initialized on the line they are executed
 * on and only get allocated undefined if there is no assignment to the variable.
 * Trying to access a let or const variable before it is declared or outside
 * of its block without returning it will result in a Reference Error.
 */
