/**
 * Primitive vs Non Primitive
 */


/**
 * Primitive
 * 
 * Primitive values are defined by being immutable, they cannot be altered.
 * The variable assigned to a primitive type may be reassigned to a new value,
 * but the original value can not be changed in the same way objects can be modified.
 * Primitives are passed by value, meaning their values are copied and then placed somewhere else in the memory.
 * They are also compared by value.
 * There are currently 7 primitive data types in JavaScript.
 */

// string
// number
// bigint
// boolean
// null
// undefined
// symbol


/**
 * Non Primitive 
 * 
 * The only type that leaves us with is objects.
 * Objects are able to be mutated and their properties are passed by reference,
 * meaning their properties are not stored separately in memory.
 * A new variable pointing to an object will not create a copy,
 * but reference the original objects location in memory.
 * Therefore, changing the 2nd object will also change the first.
 */

const originalObj = {
	nested: {
		nestedKey: "nestedValue"
	},
	key: "value"
};

// originalObj points to location 1 in memory
const assignObj = originalObj;

// assignObj will point to 1 in memory
const shallowObj = { ...originalObj };

// shallowObj points to a new location 2, but references location 1 for the nested object
const deepObj = JSON.parse(JSON.stringify(originalObj));
// deepObj clones all parts of the object to a new memory address

console.log(deepObj);


/**
 * If you try to check if 2 objects with the same properties are equal with obj1 = obj2, it will return false.
 * It does this because each object has its own address in memory as we learned about.
 * The easiest way to check the contents of the objects for equality is this.
 */

JSON.stringify(obj1) === JSON.stringify(obj2);
// This will return true if all the properties are the same.
