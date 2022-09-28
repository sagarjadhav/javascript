/**
 * CLOSURES AND PROTOTYPES
 * 
 * Closures and Prototypal Inheritance are two things that make JavaScript special
 * and different from other programming languages.
 */


/**
 * Function Constructor
 * 
 * Functions are objects in JavaScript, which is not true for other languages. Because of that,
 * they can be called multiple ways, but they can also be constructors.
 * A function constructor creates a new object and returns it.
 * Every JavaScript function, is actually a function object itself.
 */

// examples of constructor functions in JavaScript
const five = new Number(5);
const assignFive = 5;

// this is different than using regular assignment
const newString = new String(`I am a new string`);
const assignString = `I am an assigned string`;

typeof five; // object
typeof assignFive; // number
typeof newString; //object
typeof assignString; // string

five === assignFive; // false
five == assignFive; // true - types are coerced

// Notice how the types are different
// depending on how they are created.

// Arrays, Booleans, Dates, Objects, and Strings
// can be created this way as well.