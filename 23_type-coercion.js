/**
 * Type Coercion
 * 
 * Type coercion is the process of converting one type of value into another.
 * There are 3 types of conversion in JavaScript.
 */

// to string
// to boolean
// to number

let num = 1;
let str = "1";
num == str; // true
// notice loose equality ==, not ===
// double equals (==) will perform a type conversion
// one or both sides may undergo conversions
// in this case 1 == 1 or '1' == '1' before checking equality


/**
 * The triple equals (===) or strict equality compares two values without type coercion.
 * If the values are not the same type, then the values are not equal.
 * This is almost always the right way to check for equality in JavaScript,
 * so you don't accidentaly coerce a value and end up with a bug in your program.
 */
