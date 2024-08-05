"use strict";
//======== FUNCTION =======:
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
//======= My Practice  =====:
///invoke means call.
/*A Function is reuseable block of code that performs a specific task or set of tasks.
They provide a way to encapsulate a sequence of instructions,group them together,and give them
a name,making it easier to understand ,maintain, and reuse code.

There are two types of function.

1)Pre-defined/Bulit-in function.*/
console.log();
//alert()
Math.floor(1.5); //yeh ksi bhi number ko round off krdeta hai.
//2)User-Defined function.
function sum(a, b) {
    return a + b;
}
console.log(sum(6, 7));
function mysum() {
    let a = 15;
    let b = 68;
    return a * b;
}
console.log(mysum());
//force= ma
function forceCalc() {
    let m = 10;
    let a = 30;
    let force = m * a;
    console.log(force);
}
forceCalc();
// ====== PromptSync =======: 
//Commands:npm i prompt-sync  & npm i --save-dev @types/prompt-sync.
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)();
let name = prompt(`Enter your name.`);
console.log(name);
//===== Prameters & Argumeters =====:
function print(greeting) {
    console.log(greeting);
}
print("John");
//======== Function-Scope ======:
function sum1(a, b) {
    let sum = a + b;
    console.log(sum);
}
//sum1(value1,value2) it shows erro0r beacuse its is declare after they call.
let value1 = parseInt(prompt(`Enter your first number: `)); //prompt mai value humesha sttring mai aati hai string se change krne ke liye parse int lagaya.
let value2 = parseInt(prompt(`Enter your Second number: `));
sum1(value1, value2);
function sum2() {
    let a = parseInt(prompt(`Enter your first number: `));
    let b = parseInt(prompt(`Enter your Second number: `));
    let sum = a + b;
    console.log(sum);
}
sum2();
// ==== Return  ======:
function sum3(c, d) {
    return c * d;
}
sum3(6, 5);
function greeting(str) {
    return str + " Khan"; //concatenate
}
console.log(greeting("Ahmed"));
function greetings(name, greeting = "hello") {
    console.log(`${greeting}, ${name}`);
}
greetings("noman");
//====== Nested Functon =======:
function myMath(x, y) {
    mysum();
    {
        return x + y;
    }
    mysum();
}
console.log(myMath(6, 8));
//====== DEFAULT PARAMETER =====:
function mypizza(size, flavour = "BBQ") {
    console.log(`Sir,here is your ` + size + ' ' + flavour + ` pizza.`);
}
mypizza("large");
mypizza("large", "Malai Boti"); //default parameter ko change karskte hai arguments mai
//======= Rest Parameters ======:
function Dname(firstname, ...restofname) {
    return firstname + " " + restofname.join(" ");
}
console.log(Dname("usman", "raza"));
//====== Arrow Function ========:
//()=> :Arrow function  :short end method to create function.
let addition2 = (a, b) => {
    let result = a + b;
    return result;
};
console.log(addition2(24, 54));
//arrow function is used for reduced the this concept.
//Single line.
let addition3 = (a, b) => a + b;
console.log(addition3(14, 16));
let addition4 = (a, b) => {
    return a + b;
};
let add = addition4(25, 29);
console.log(add);
console.log(addition4(14, 100));
let multiplycalc = (a, b) => {
    return a * b;
};
console.log(multiplycalc(5, 8));
//======= Spread Operator ======:
function halfFryEgg(egg, ...ingredients) {
    console.log(egg);
    console.log(...ingredients);
}
halfFryEgg(1, 2.5, 3, 5);
//its output is:
//1
//2.5 3 5   its just like rest parameter.
