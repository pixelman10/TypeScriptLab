"use strict";
//==== Generics =====:- In Typescript alllow you to create reuseable componenets or functions 
//that can work with multiple data types.
Object.defineProperty(exports, "__esModule", { value: true });
function logAndReturn(value) {
    return value;
}
let result = logAndReturn("Hey");
console.log(result);
let result2 = logAndReturn(6);
console.log(result2);
console.log(logAndReturn(true));
console.log(logAndReturn({ name: "Zafar", age: 16 }));
console.log(logAndReturn(() => console.log("Ali raza")));
//Agar generics nhi lage hote 
function logAndReturn1(value) {
    return value;
}
console.log(logAndReturn1("Hello Code"));
console.log(logAndReturn1(17));
//console.log(logAndReturn1(false)); 
// ======  STEP 0 ======:
let message = "Hello Typescript"; //Infering types, take your cursor on the variable name.
console.log(message);
//JSON Objects:
//JSON : Javascript Object Notation.
//JSON is a text-based data format that is used to store and transfer data.
//SYNTAX:{"name":"Vipin", "age":21, "gender":"male"}
const detail = {
    "name": "Usman",
    "age": 16,
    "gender": "male",
};
console.log(detail.gender);
//JSON ( Javascript Object Notation )
//JSON stands for Javascript Object Notation.
//JSON is a text-based data format that is used to store and transfer data.
// JSON syntax
const person = {
    "name": "Vipin",
    "age": 21,
    "gender": "male",
};
//But wait, Is JSON is similar to javaScript objects?
//The Answer is No.
/*JavaScript objects can contain functions but JSON not.
JavaScript objects can only be used in JavaScript but JSON can be created and used by other programming languages.

JSON Data:
JSON data consists of key/value pairs similar to JavaScript object properties.
The key and values are written in double quotes separated by a :. */
//Example :
// JSON data
// "name": "Vipin"
/*JSON data requires double quotes for the key.
JSON Object
The JSON object is written inside curly braces { }.

JSON objects can contain multiple key/value pairs.*/
//Example :
// JSON object
//{ "name": "Vipin", "age": 21 }
//JSON Array
//JSON array is written inside square brackets [ ].
//Example :
// JSON array
const detailarr = ["Vipin", "Ankit", "Raj"];
//Accessing JSON Data
//We can access JSON data using the dot notation.
//Example :
// JSON object
const detail1 = { "name": "Vipin", "age": 21 };
// accessing JSON object
console.log(detail1.name); // Vipin
//We can also use square bracket syntax [] to access JSON data.
//Example :
// JSON object
const detail2 = {
    "name": "Vipin",
    "age": 21
};
// accessing JSON object
console.log(detail2["age"]); // Vipin
/*Use of JSON
JSON is the most commonly used format for transmitting data (data interchange) from a server to a client and vice-versa.
JSON data are very easy to parse and use.
JSON is language independent(We can create and use JSON in other programming languages too).*/
let add = "Usman";
console.log(add.substring(0, 6));
