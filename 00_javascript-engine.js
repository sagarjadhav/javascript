// JAVASCRIPT ENGINE

/**
 * A JavaScript engine is a computer program that you give JavaScript code to
 * and it tells the computer how to execute it.
 * Basically a translator for the computer between JavaScript and a language that the computer understands.
 * But what happens inside of the engine? Well, that depends on the engine.
 * There are many JavaScript Engines out there and typically they are created by web browser vendors.
 * All engines are standardized by ECMA Script or ES.
 */


// THE PARSER

/**
 * Parsing is the process of analyzing the source code, checking it for errors, and breaking it up into parts.
 */


// THE AST

/**
 * The parser produces a data structure called the Abstract Syntax Tree or AST.
 * AST is a tree graph of the source code that does not show every detail of the original syntax,
 * but contains structural or content-related details.
 * Certain things are implicit in the tree and do not need to be shown, hence the title abstract.
 */


// THE INTERPRETER

/**
 * An interpreter directly executes each line of code line by line,
 * without requiring them to be compiled into a machine language program.
 * Interpreters can use different strategies to increase performance.
 * They can parse the source code and execute it immediately,
 * translate it into more efficient machine code, execute precompiled code made by a compiler,
 * or some combination of these. In the V8 engine, the interpreter outputs bytecode.
 */

/**
 * The first JavaScript engine was written by Brendan Eich,
 * the creator of JavaScript, in 1995 for the Netscape navigator web browser.
 * Originally, the JavaScript engine only consisted of an interpreter.
 * This later evolved into the SpiderMonkey engine, still used by the Firefox browser.
 */


// THE COMPILER

/**
 * The compiler works ahead of time to convert instructions into a machine-code
 * or lower-level form so that they can be read and executed by a computer.
 * It runs all of the code and tries to figure out what the code does and
 * then compiles it down into another language that is easier for the computer to read.
 * Have you heard of Babel or TypeScript?
 * They are heavily used in the Javascript ecosystem and you should now have a good idea of what they are.
 * Babel is a Javascript compiler that takes your modern JS code and returns browser compatible JS (older JS code).
 * Typescript is a superset of Javascript that compiles down to Javascript. Both of these do exactly what compilers do.
 * Take one language and convert into a different one!
 */


// THE COMBO

/**
 * In modern engines, the interpreter starts reading the code line by line
 * while the profiler watches for frequently used code and flags then
 * passes is to the compiler to be optimized.
 * In the end, the JavaScript engine takes the bytecode the interpreter outputs
 * and mixes in the optimized code the compiler outputs and then gives that to the computer.
 * This is called "Just in Time" or JIT Compiler.
 */

/**
 * Back in 1995 we had no standard between the browsers for compiling JavaScript.
 * Compiling code on the browser or even ahead of time was not feasible
 * because all the browsers were competing against each other and could not agree on an executable format.
 * Even now, different browsers have different approaches on doing things.
 * Enter WebAssembly a standard for binary instruction (executible) format.
 * Keep your eye on WebAssembly to help standardize browsers abilities to exectute JavaScript in the future! WebAssemby
 */
