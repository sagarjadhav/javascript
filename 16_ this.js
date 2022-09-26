/**
 * this is the object that the function is a property of
 */

/**
 * In the example below, it is easy to understand that this is equal to the window object,
 * but what about inside of function a? Well, what object is function a apart of?
 * In the dev tools, if you expand the window object and scroll down the list,
 * you will see a() is a method on the window object.
 * By calling a(), you are essentially saying window.a() to the console.
 */

this; // Window {...}
window; // Window {...}
this === window; // true

function a() {
	console.log(this);
}

a(); // Window {...}


// EXAMPLE 1
const obj = {
	property: `I'm a property of obj.`,
	method: function() {
		// this refers to the object obj
		console.log(this.property);
	}
};

obj.method(); // I'm a property of obj.
// this refers to whatever is on the left of the . (dot) when calling a method


// EXAMPLE 2
function whichName() {
	console.log(this.name);
}

var name = "window";

const obj1 = {
	name: "Obj 1",
	whichName
};

const obj2 = {
	name: "Obj 2",
	whichName
};

whichName(); // window
obj1.whichName(); // Obj 1
obj2.whichName(); // Obj 2


// EXAMPLE 3
const a = function() {
	console.log("a", this);

	const b = function() {
		console.log("b", this);

		const c = {
			hi: function() {
				console.log("c", this);
			}
		};

		c.hi(); // new obj c called function
	};

	b(); // ran by a window.a(b())
};

a(); // called by window

// a Window {…}
// b Window {…}
// c {hi: ƒ}


// Here is this 4 ways:

/**
 * 1. new keyword binding - the new keyword changes the meaning of this to be the object that is being created.
 * 2. implicit binding - "this" refers to the object that is calling it. It is implied,
 *    without doing anything its just how the language works.
 * 3. explicit binding - using the "bind" keyword to change the meaning of "this".
 * 4. arrow functions as methods - "this" is lexically scoped, refers to it's current surroundings and no further.
 *    However, if "this" is inside of a method's function, it falls out of scope and belongs to the window object.
 *    To correct this, you can use a higher order function to return an arrow function that calls "this".
 */


// EXAMPLE 4

// new binding
function Person(name, age) {
	this.name = name;
	this.age = age;
	console.log(this);
}

const person1 = new Person("person1", 55);
// this = Person { name: 'person1', age: 55 }


//implicit binding
const person = {
	name: "person",
	age: 20,
	hi() {
		console.log(this);
	}
};

person.hi();
// this = person { name: 'person', age: 20, hi(){...} }


//explicit binding
let name = "Brittney";

const person3 = {
	name: "person3",
	age: 50,
	hi: function() {
		console.log("Hi " + this.name);
	}.bind(window)
};

person3.hi();
// hi Brittney
// this = window {...}


// arrow functions inside objects
const person4 = {
	name: "person4",
	age: 40,
	hi: function() {
		var inner = () => {
			console.log(this);
		};

		return inner();
	}
};

person4.hi();
// this = person4 { name: 'person4', age: 40, hi() {...} }
// if either function is changed around, it doesn't work
