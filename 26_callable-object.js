/**
 * Callable Object
 * 
 * Because functions are objects in JavaScript, this also gives them the ability to have properties added to them.
 * This creates a callable object, a special object that creates properties not available on normal objects.
 * Below is a visualization of how this works under the hood.
 * This code can not be ran in the console, but it is a representation of how the object looks.
 */

function say() {
	console.log('say something')
}

say.yell = 'yell something'

// under the hood visual
// will not run or show in console
const funcObj = {
	// name will not exist if anonymous
	name: 'say',
	// properties get added
	// apply, arguments, bind, call, caller, length, name, toString
	yell: 'yell something',
}

// with an obj
const obj = {
	// nothing gets created
}
