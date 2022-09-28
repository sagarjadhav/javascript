/**
 * Prototypal Inheritance
 * 
 * Almost all objects in Javascript pass down properties through a prototype chain.
 * We call this chain, prototypal inheritance. The child of the object "inherits" properties from its parent.
 * All objects in JavaScript are descended from the Object constructor unless deliberately created or altered to not do so.
 * The objects inherit methods and properties from Object.prototype.
 * The prototype property also has an accessor property called __proto__ that creates
 * a link between the current object and points to the object it was created from, the "prototype".
 */

 Object.prototype.__proto__;
 // null
 
 Object.prototype;
 {
   __proto__: null;
   // ...more methods and properties
 }
 
 Object;
 // function Object()
 // This is the object constructor function
 
 Object.prototype.constructor;
 // function Object()
 // Points to the constructor
 
 Object.__proto__;
 // function () {...}
 // Because it is created with a constructor function
 