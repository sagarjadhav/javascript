/**
 * Code in JavaScript is always run inside a type of execution context.
 * Execution context is simply the environment within which your code is ran.
 * There are 2 types of execution context in JavaScript, global or function.
 * There are 2 stages as well to each context, the creation and executing phase.
 * As the JavaScript engine starts to read your code,
 * it creates something called the Global Execution Context.
 */


// Function Execution Context

/**
 * Only when a function is invoked, does a function execution context get created.
 */


// Creation Phase

/**
 * 1. argument object created with any arguments
 * 2. initializes this keyword to point called or to the global object if not specified
 */


// Executing Phase

/**
 * 3. Variable Environment created - memory space for variable and functions created
 * 4. initializes all variables to undefined and places them into memory with any new functions
 */


// Function Execution Context creates arguments object and points 'this' to the function
function showArgs(arg1, arg2) {
	console.log("arguments: ", arguments);
	console.log(`argument 1 is: ${arg1} and argument 2 is: ${arg2}`);
}

showArgs("hello", "world");

// arguments: { 0: 'hello', 1: 'world' }
// argument 1 is hello and argument 2 is world

function noArgs() {
	console.log("arguments: ", arguments);
}

noArgs();

// arguments: {}
// even though there are no arguments, the object is still created


/**
 * The keyword arguments can be dangerous to use in your code as is.
 * In ES6, a few methods were introduced that can help better use arguments.
 */

function showArgs(arg1, arg2) {
	console.log("arguments: ", arguments);
	console.log(Array.from(arguments));
}

showArgs("hello", "world");

// arguments: { 0: 'hello', 1: 'world' }
// [ 'hello', 'world' ]

function showArgs2(...args) {
	console.log(console.log("arguments: ", args));
	console.log(Array.from(arguments));
	console.log(`${args[0]} ${args[1]}`);
}

showArgs2("hello", "world");

// arguments: [ 'hello', 'world' ]
// [ 'hello', 'world' ]
// hello world
