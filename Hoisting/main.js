"use strict";
//-------- HOISTING ------ :-
/*In programming, "hoisting" is a behavior in JavaScript where variable and function
declarations are moved to the top of their containing scope during the compilation phase.
This means that variables and functions can be used before they are actually declared in the
code. However, it's important to note that only the declarations are hoisted, not the
initializations.

In TypeScript, hoisting works similarly to JavaScript since TypeScript is a superset
of JavaScript. Here’s how it works for different types of declarations: */
//Answer in Java script:
//Variable Declaration:
//Var:
console.log(a); //Its output is:undefined
var a = 10;
console.log(a); //Its output is: 10
//let:
//console.log(b); //Its output is: ReferenceError: Cannot access 'b' before initialization
let b = 10;
console.log(b); //Its output is: 10
//const:
//console.log(c); //Its output is: ReferenceError: Cannot access 'c' before initialization
const c = 10;
console.log(c); //Its output is: 10
//Function Hoisting:
//functiion declaration:
console.log(myfunction()); //Its output is: Hello, Buddy!
function myfunction() {
    return "Hello, Buddy!";
}
//function expression:
console.log(myfunction1());
var myfunction1 = function () {
    return "Hello Buddy.";
};
