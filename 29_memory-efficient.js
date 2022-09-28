/**
 * Memory Efficient
 * 
 * Using closures makes your code more memory efficient. Take the example below.
 */

function inefficient(idx) {
	const bigArray = new Array(7000).fill("😄");
	console.log("created!");
	// console.log(bigArray[idx]);
}

function efficient() {
	const bigArray = new Array(7000).fill("😄");
	console.log("created again!");
	return function(idx) {
		// console.log(bigArray[idx]);
	};
}

inefficient(688);
inefficient(1000);
inefficient(6500);

const getEfficient = efficient();

getEfficient(688);
getEfficient(1000);
getEfficient(6500);

// created!
// created!
// created!
// created Again!

// inefficient created the bigArray 3 times
// efficient created the bigArray only once
