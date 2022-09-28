/**
 * The call stack keeps track of where we are in the code, so we can run the program in order.
 */

function subtractTwo(num) {
	console.log(num - 2);
}

function calculate() {
	const sumTotal = 4 + 5;
	console.log(subtractTwo(sumTotal));
}

debugger;

calculate();


/**
 * Things are placed into the call stack on top and removed as they are finished.
 * It runs in a first in last out mode. Each call stack can point to a location inside the memory heap.
 * In the above snippet the call stack looks like this.
 */

anonymous; // file is being ran
// CALL STACK

// hits debugger and stops the file
// step through each line

calculate(
	// steps through calculate() sumTotal = 9
	anonymous
);
// CALL STACK

// steps into subtractTwo(sumTotal) num = 9

subtractTwo; // returns 9 - 2
calculate(anonymous);
// CALL STACK

// subtractTwo() has finished and has been removed

calculate(
	// returns 7
	anonymous
)(
	// CALL STACK

	// calculate() has finished and has been removed

	anonymous
);
// CALL STACK

// and finally the file is finished and is removed

// CALL STACK
