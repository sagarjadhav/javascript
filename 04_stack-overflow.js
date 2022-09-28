/**
 * So what happens if you keep calling functions that are nested inside each other?
 * When this happens it's called a stack overflow.
 */

// When a function calls itself,
// it is called RECURSION
function inception() {
	inception();
}

inception();
// returns Uncaught RangeError:
// Maximum call stack size exceeded
