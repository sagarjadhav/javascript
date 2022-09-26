/**
 * Lexical vs Dynamic Scope
 * 
 * A big gotcha for a lot of people working with *this is when a function is ran inside of another function.
 * It gets a little confusing, but we can remember who called the function.
 */

const obj = {
	name: "Billy",
	sing: function() {
		console.log("a", this);

		var anotherFunc = function() {
			console.log("b", this);
		};

		anotherFunc();
	}
};

obj.sing();

// a {name: "Billy", sing: ƒ}
// b Window {…}

/**
 * In the example above, the obj called sing() and then anotherFunc() was called within the sing() function.
 * In JavaScript, that function defaults to the Window object.
 * It happens because everything in JavaScript is lexically scoped except for the this keyword.
 * It doesn't matter where it is written, it matters how it is called.
 * Changing anotherFunc() instead to an arrow function will fix this problem, as seen below.
 * Arrow functions do not bind or set their own context for this.
 * If this is used in an arrow function, it is taken from the outside.
 * Arrow functions also have no arguments created as functions do.
 */

const obj1 = {
	name: "Billy",
	sing: function() {
		console.log("a", this);

		var anotherFunc = () => {
			console.log("b", this);
		};

		anotherFunc();
	}
};

obj1.sing();

// a {name: "Billy", sing: ƒ}
// b {name: "Billy", sing: ƒ}


// Okay, last example to really solidify our knowledge of this.

var b = {
	name: "jay",
	say() {
		console.log(this);
	}
};

var c = {
	name: "jay",
	say() {
		return function() {
			console.log(this);
		};
	}
};

var d = {
	name: "jay",
	say() {
		return () => console.log(this);
	}
};

b.say(); // b {name: 'jay', say()...}
// b called the function

c.say(); // function() {console.log(this)}
// returned a function that gets called later

c.say()(); // Window {...}
// c.say() gets the function and the Window runs it

d.say(); // () => console.log(this)
// returned the arrow function

d.say()(); // d {name: 'jay', say()...}
// arrow function does not rebind this and inherits this from parent

/**
 * After everything is said and done, using this can still be a bit confusing.
 * If you aren't sure what it's referencing, just console.log(this) and see where it's pointing.
 */
