/**
 * JavaScript is a garbage collected language.
 * If you allocate memory inside of a function,
 * JavaScript will automatically remove it from the memory heap when the function is done being called.
 * However, that does not mean you can forget about memory leaks.
 * No system is perfect, so it is important to always remember memory management.
 * JavaScript completes garbage collection with a mark and sweep method.
 */

var person = {
	first: "Brittney",
	last: "Postma"
};

person = "Brittney Postma";


/**
 * In the example above a memory leak is created.
 * By changing the variable person from an object to a string,
 * it leaves the values of first and last in the memory heap and does not remove it.
 * This can be avoided by trying to keep variables out of the global namespace,
 * only instantiate variables inside of functions when possible.
 * JavaScript is a single threaded language, meaning only one thing can be executed at a time.
 * It only has one call stack and therefore it is a synchronous language.
 */


// Synchronous

/**
 * So, what is the issue with being a single threaded language?
 * Lets's start from the beginning. When you visit a web page,
 * you run a browser to do so (Chrome, Firefox, Safari, Edge).
 * Each browser has its own version of JavaScript Runtime with a set of Web API's,
 * methods that developers can access from the window object.
 * In a synchronous language, only one thing can be done at a time.
 * Imagine an alert on the page,
 * blocking the user from accessing any part of the page until the OK button is clicked.
 * If everything in JavaScript that took a significant amount of time, blocked the browser,
 * then we would have a pretty bad user experience. This is where concurrency and the event loop come in.
 */
