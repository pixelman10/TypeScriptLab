//--------Type Assertion-----:

/* In Typescript, Type assertion is a technique that informs the compiler about the type of 
a variable. Type assertion allows you to set the type of a value and tell the compiler not
to infer it*/


//------Explicit Casting------:-

//Example:-
//use "as" a keyword:-

let value: unknown = "hello, typescript!";
let stringValue:string = value as string;  

console.log(stringValue.toUpperCase()); //Its output is HELLO, TYPESCRIPT!.


let bq:unknown ="Usman Khan";
console.log((bq as string).toLowerCase()); //its output is: usman khan.



//angular brackets:-
let value1: unknown = "hello, boss!";
let stringValue1: string = <string>value1;  
let smartwork:string = <string>value1;

console.log(stringValue.toUpperCase());//Its output is HELLO, BOSS!.



let dq:unknown = "Messsiii";
console.log((<string>dq).toUpperCase()); //Its output is: MESSSIII.




//======= Type Narrowing ======:

let name2: unknown = "Haroon Khan";
if(typeof(name2) == "string"){
    console.log(name2.toUpperCase());  //Its output is: HAROON KHAN
}


let arr:unknown = ["Hasan","Raza","Ahmed"];
//if(typeof(arr) == "Array") it shows error type narrowing sirf primitive data types kee hoti hai.
let num:unknown = 15;
if(typeof(num) == "number"){
    console.log(num.toFixed(4));   //Its output is 15.0000.
}else if (typeof(num)== "string"){
    console.log( num.toLowerCase());
}

//tofixed method add zero to the value just like you write 5 in tofixed function its add 5 zero in the value.

