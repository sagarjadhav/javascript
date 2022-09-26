/**
 * The job queue or microtask queue came about with promises in ES6.
 * With promises we needed another callback queue that would give higher priority to promise calls.
 * The JavaScript engine is going to check the job queue before the callback queue.
 */

// 1 Callback Queue ~ Task Queue
setTimeout(() => {
	console.log("1", "is the loneliest number");
}, 0);

setTimeout(() => {
	console.log("2", "can be as bad as one");
}, 10);

// 2 Job Queue ~ Microtask Queue
Promise.resolve("hi").then(data => console.log("2", data));

// 3
console.log("3", "is a crowd");

// 3 is a crowd
// 2 hi
// undefined Promise resolved
// 1 is the loneliest number
// 2 can be as bad as one
