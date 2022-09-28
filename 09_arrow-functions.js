/**
 * Some people think of arrow functions as just being syntactic sugar for a regular function,
 * but arrow functions work a bit differently than a regular function.
 * They are a compact alternative to a regular function,
 * but also without its own bindings to this, arguments, super, or new.target keywords.
 * Arrow functions cannot be used as constructors and are not the best option for methods.
 */

var obj = {
		// does not create a new scope
		i: 10,
		b: () => console.log(this.i, this),
		c: function() {
			console.log(this.i, this);
	    }
    };

obj.b(); // prints undefined, Window {...} (or the global object)
obj.c(); // prints 10, Object {...}
