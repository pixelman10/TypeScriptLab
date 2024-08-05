"use strict";
//CLASS 5
//Unary Operators:
let a = 5;
let b = 7;
let cart1 = a++; //answer is 5.
let cart2 = --b; //answer is 6.
//Prefix icrement:
let cart3 = ++b; //answer is 7.
let cart4 = --a; //answer is 5.
//Postfix Increment:
let cart5 = b++; //answer is 7.    //postfix mai value update next line pe hoti hai.uss waqt uski value wohi rahegee .Lekin agli line mai change hojaye gee .Just like that:
let cart7 = b; //answer is 8.
let cart6 = a--; //answer is 5.
console.log(cart1);
console.log(cart2);
console.log(cart3);
console.log(cart4);
console.log(cart5);
console.log(cart6);
console.log(cart7); //answer is 8.
console.log("line 25", b++); //answer is 8 because last line mai answer 8 tha.Ab next line mai yeh 9 hojaye ga.
console.log("Line 26", b); //answer is 9.
//Combining Operators:
console.log(4 + 4 * 5); //answer is 24 because BODMAS Rule is applied.The answer is not 40. 
console.log(5 + 2 - 3 * 2 / 2 % 2); //its answer is 6 because BODMAS rule is applied.
/*BODMAS stands for:

Brackets
Orders (i.e., powers and roots, such as squares and square roots)
Division
Multiplication
Addition
Subtraction*/
let c = 4;
let d = 2;
console.log(++c + c++ + ++d + d++); //the answer is 16.
console.log(--c - c++ + --d - d++); //This answer is 0.
//ASSIGNMENT OPERATOR:(=)
let e = 5;
e += 6;
// e -=6;
// e *=6;
// e /=6;
console.log(e); //the answer is 11 because e contain the value of 5.
//Comparison Operator:
//5==2 is false  
//5!=2 is true    
//5>2 is true
//5<2 is false
let num1 = 12;
let num2 = 24;
let equalComaparison = num1 == num2; //answer is false.
let isNotequalComaparison = num1 != num2; //answer is true.      != means not operator.
let greaterthanComaparison = num1 > num2; //answer is false.
let lessthanComaparison = num1 < num2; //answer is true.
console.log(equalComaparison);
console.log(isNotequalComaparison);
console.log(greaterthanComaparison);
console.log(lessthanComaparison);
