/**
 * Closures
 * 
 * Closures allow a function to access variables from an enclosing scope or environment
 * even after it leaves the scope in which it was declared.
 * In other words, a closure gives you access to its outer functions scope from the inner scope.
 * The JavaScript engine will keep variables around inside functions that have a reference to them,
 * instead of "sweeping" them away after they are popped off the call stack.
 * 
 * Two of the major reasons closures are so beneficial are memory efficiency and encapsulation.
 */

 function a() {
	let grandpa = 'grandpa'
	return function b() {
		let father = 'father'
		let random = 12345 // not referenced, will get garbage collected
		return function c() {
			let son = 'son'
			console.log(`closure inherited all the scopes: ${grandpa} > ${father} > ${son}`);
		}
	}
}

a()()();

// closure inherited all the scopes: grandpa > father > son
