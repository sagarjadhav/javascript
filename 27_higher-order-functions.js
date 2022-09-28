/**
 * Higher Order Functions
 * 
 * A Higher Order Function (HOF) is a function that either takes a function as an argument or returns another function.
 * There are 3 kinds of functions in JavaScript.
 */

// function ()
// function (a,b)
// function hof() { return function () {} }

/**
 * Instead of writing multiple functions that do the same thing, remember DRY (don't repeat yourself).
 * Imagine in the example below, if you separated each code out into individual functions
 * how much more code you would be writing and how much code would be repeated.
 */

const giveAccessTo = name => `Access granted to ${name}`;

function auth(roleAmt) {
	let array = [];
	for (let i = 0; i < roleAmt; i++) {
		array.push(i);
	}

    console.log('true');
}

function checkPerson(person, fn) {
	if (person.level === "admin") {
		fn(100000);
	} else if (person.level === "user") {
		fn(500000);
	}

	console.log(giveAccessTo(person.name));
}

checkPerson({ level: "admin", name: "Brittney" }, auth);
// "Access granted to Brittney"


/**
 * Take the example below of how you can separate code out and break it down to make it more reusable.
 */

 function multBy(a) {
	return function(b) {
		return a * b;
	};
}

// can also be an arrow function
const multiplyBy = a => b => a * b;

const multByTwo = multiplyBy(2);
const multByTen = multiplyBy(10);

multByTwo(4); // 8
multByTen(5); // 50
