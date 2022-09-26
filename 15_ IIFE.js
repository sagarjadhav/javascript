/**
 * IMMEDIATELY INVOKED FUNCTION EXPRESSION
 * 
 * Immediately Invoked Function Expression or more simply IIFE is a JavaScript function that runs as soon as it is defined.
 * Can also be referred to as a Self-Executing Anonymous Function.
 */

// Grouping Operator () creates a lexical scope

(function() {
	// statements
	console.log('Test');
})();

// Immediately invokes the function with 2nd set of ()

// Avoid polluting the global namespace or scope when possible.
