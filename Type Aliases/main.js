"use strict";
//============= TYPE ALIASES =========:
let nameofperson = "Ahmed";
console.log(nameofperson);
let user = {
    name: "Ali",
    id: 5087,
    isStudent: true,
};
console.log(user);
let userId = 50628;
console.log(userId); //logs the initial number value.
userId = "UZIMAX";
console.log(userId); //logs the updated string value.
const greet = (name) => {
    return `Assalam-u-Alaikium, Dear ${name}!.`;
};
console.log(greet("Dua"));
let circle = [20, 50];
console.log(circle);
let person = {
    name: 'Anas',
    age: 16,
    gender: 'male',
    address: {
        street: 'Alalah housing Society',
        city: 'Karachi',
        country: 'Pakistan',
    }
};
console.log(person);
let userresponse = {
    status: 600,
    payload: {
        name: 'Sohaib',
        id: 80097,
        email: 'Sohaib6742@gmail.com'
    }
};
console.log(userresponse);
let person1 = {
    name: 'Ali',
    age: 20,
    gender: "Male",
    isStudent: true,
    isAlive: true,
};
console.log(person1.gender);
// Example usage of the union type alias
let example1;
let example2;
let example3;
// Assigning values of different types to the variables
example1 = "Hello"; // string
example2 = 42; // number
example3 = true; // boolean
example3 = [1, 2, 3]; // array
// Function that accepts the union type
function processValue(value) {
    if (typeof value === "string") {
        console.log(`String value: ${value}`);
    }
    else if (typeof value === "number") {
        console.log(`Number value: ${value}`);
    }
    else if (typeof value === "boolean") {
        console.log(`Boolean value: ${value}`);
    }
    else if (Array.isArray(value)) {
        console.log(`Array value: ${value}`);
    }
    else {
        console.log("Unknown type");
    }
}
// Calling the function with different types of arguments
processValue("Hello");
processValue(42);
processValue(true);
processValue([1, 2, 3]);
