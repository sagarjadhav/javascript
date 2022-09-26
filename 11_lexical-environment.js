/**
 * A lexical environment is basically the scope or environment the engine is currently reading code in.
 * A new lexical environment is created when curly brackets {} are used,
 * even nested brackets {{...}} create a new lexical environment.
 * The execution context tells the engine which lexical environment
 * it is currently working in and the lexical scope determines the available variables.
 */

function one() {
	var isValid = true; // local env
	console.log(isValid);

	two(); // new execution context
}

function two() {
	var isValid; // undefined
	console.log(isValid);
}

var isValid = false; // global
console.log(isValid);

one();
two();

/* 
	one() isValid = true
	two() isValid = undefined
	global() isValid = false
	------------------------
	call stack
*/
