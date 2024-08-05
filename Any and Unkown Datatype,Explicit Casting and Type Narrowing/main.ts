//Two DataTypes:
//--------- Any Type -------:
/*The any type is the most flexible type in Typescript.It essentally turns off all type 
checking for the variables or expressions it is applied to.*/


//WE CANT ASSIGN TYPE ANY TO TYPE UNKNOWN.

let name1:any = "John";
name1 = 10;
name1 ={name:"Azaan",age:16};
name1 = true;


let myVal:any

myVal = true;   //ok
myVal = 10;     //ok
myVal = 'Hello';    //ok
myVal = ['A','B']   //ok
myVal = {name:'Khan',id:10}; //ok
myVal = Math.random();      //ok
myVal = null;   //ok
myVal = undefined;  //ok
myVal = () => {console.log('Hello world')} //ok
//myVal = unknown; it shows error.


//------- Unknown Type -------:
/*The Unkown type is a safer alternative to any because it still enforces type checking
and type safety.

Variables of type unknown can hold values of any type ,but you must perform type checks
or type assertion before using them in specific ways*/


//Unkown ke uppar koi method work nhi krta any ke uppar string,array,etc sabke method work krte hai.


let val:unknown;
val = true;   //ok
val  = 10;     //ok
val  = 'Hello';    //ok
val  = ['A','B']   //ok
val  = {name:'Usman',id:10}; //ok
val  = Math.random();      //ok
val  = null;   //ok
val = undefined;  //ok
val  = () => {console.log('Hello world');} //ok 
//val = any; it shoows error.


// Assigning a value of type unknown to variables of other types

let val1:unknown;

const val2:unknown = val1 //ok
const val3:any = val1 //ok
// const val4:boolean = val  // will throw error
// const val5:number = val  // will throw error
// const val6:string = val  // will throw error
// const val7:record<string,any> = val  // will throw error
// const val8:any[] = val  // will throw error
// const val9:(...args:any[])=>void = val  // will throw error


//---------Never------:

//A function that does not anything ever
//Yeh data type kuch bhi return nhi krti.

//Function returning never must not have a reachable end point

function error(message:string):never{
    throw new Error(message);
}

console.log(error);//Its output is : [Function: error]

//Inferred return type is never
function fail(){
    return error('Something failed');
}

console.log(fail); //Its output is : [Function: fail]


//Function returning never must not have a reachable end point
function infiniteLoop():never{
    while(true){
    }
}

console.log(infiniteLoop);//Its output is: [Function: infiniteLoop]








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

