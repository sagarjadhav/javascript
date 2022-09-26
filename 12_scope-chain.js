/**
 * Each environment context that is created has a link outside of its lexical environment called the scope chain.
 * The scope chain gives us access to variables in the parent environment.
 */


/**
 * In below example, all the functions have access to the global variable x,
 * but trying to access a variable from another function would return an error.
 * The example below will show how the scope chain links each function.
 */

var x = "x";

function findName() {
	console.log(x);
	var b = "b";
	console.log(printName());
}

function printName() {
	var c = "c";
	console.log("Brittney Postma");
}

function sayMyName() {
	var a = "a";
	console.log(findName());
}

sayMyName();

// sayMyName runs a = 'a'
// findName runs
// x
// b = 'b'
// printName runs c = 'c'
// Brittney Postma


/**
 * In below example, you can see that the functions only get access to
 * the variables in their parent container, not a child.
 * The scope chain only links down the call stack, so you almost have to think of it in reverse.
 * It goes up to the parent, but down the call stack.
 */

function sayMyName() {
	var a = "a";

    console.log(b, c); // returns error

    return function findName() {
		var b = "b";

        console.log(a); // a
		console.log(c); // returns error

        return function printName() {
			var c = "c";

			console.log(a, b); // a, b
		};
	};
}

sayMyName()()(); //each function is returned and has to be called
