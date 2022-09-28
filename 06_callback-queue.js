/**
 * When you run some JavaScript code in a browser, the engine starts to parse the code.
 * Each line is executed and popped on and off the call stack. But, what about Web API's?
 * Web API's are not something JavaScript recognizes,
 * so the parser knows to pass it off to the browser for it to handle.
 * When the browser has finished running its method,
 * it puts what is needed to be ran by JavaScript into the callback queue.
 * The callback queue cannot be ran until the call stack is completely empty.
 * So, the event loop is constantly checking the call stack to see if it is empty
 * so that it can add anything in the callback queue back into the call stack.
 * And finally, once it is back in the call stack, it is ran and then popped off the stack.
 */

console.log("1");
// goes on call stack and runs 1

setTimeout(() => {
	console.log("2"), 1000;
});
// gets sent to web api
// web api waits 1 sec, runs and sends to callback queue
// the javascript engine keeps going

console.log("3");
// goes on call stack and runs 3
// event loop keeps checking and see call stack is empty
// event loop sends calback queue into call stack
// 2 is now ran

// 1
// 3
// 2

// Example with 0 second timeout

console.log("1");

setTimeout(() => {
	console.log("2"), 0;
});

console.log("3");

// 1
// 3
// 2

// Still has the same output

/**
 * In the last example, we get the same output.
 * How does this work if it waits 0 seconds?
 * The JavaScript engine will still send off the setTimeout() to the Web API to be ran
 * and it will then go into the callback queue and wait until the call stack is empty to be ran.
 * So, we end up with the exact same end point.
 */
