//Step 9(a).

//Note:All parameters are required.
function ali(){}
let annonymous = function(){}
//let annonymoufunc:()=> ReturnType = function():ReturnType{}
const arrowfunc = () =>{}
let reducearrowfunc = (a:number, b:number) => a * b;


//====== Named Function =======: Jiss Function ka name ho.
function subtract1(x:number,y:number): number{
    return x - y
}

console.log(subtract1(65,63));


//====== Anonymous function ======:  Means function ka name nah ho.
let tuddler = function(a:number,b:number,c:number): number{
    return a + b * c;
}

console.log(tuddler(1,7,9));


//====== Anonymous function with explict type ======:
let moore:(x:number,y:number,z:number)=>number = function(x:number,y:number,z:number): number{
    return x + y / z;

}
console.log(moore(4,8,4));


let Kane:(x:number,y:number,z:number)=> number = function(x:number,y:number,z:number): number{
    return x + y * z;

}
console.log(Kane(4,8,4));


//===== Type names dont matter ======: types name matter nhi krta bss jo usse type dee ho woh same ho.
let myAdd:(increment:number, baseValue:number)=> number = function (x:number,y:number):number{ //agar parameters kee type badlenge tou error aayega.
    return x + y;
}
console.log(myAdd(655,451)); 



//===== Lambda Function =======: means (Arrow function) & single line function.
//Arrow Function Syntax:  let variable name = (paramters:type) =>{}
let myDivision = (c:number, d:number ) => c / d;
console.log(myDivision(81,9));


//====== Function with a Function Type Alias ========:
//type humesha Capital letter se start kare.
//void type ka mtlb hota hai yeh function kuch bhi return nhi karega.

type Greetfunction = (a:string) => void;
function greeter(Greetfunction:string){
    console.log(`Your look so cool`);  //it is written because it is not return it is console.
}

greeter("Alex");// it is not written because function return type is void.




//  Step 9 (b):

//====== Named with Optional parameters====:
function buildName(fname:string, lname?:string):string {
    if(lname){
        return fname + " " + lname;
    }else{
        return fname;
    }
}
    
console.log(buildName("Usman"));//its okay because we declare one parameter is optional.
//console.log(buildName("Muhammad","Usman","Khan")); //error too many arguments.
console.log(buildName("Usman","Khan"));//its also okay



//===== Anonymous Function Type with Optional Parameter ======:
let buildName1 : (identity:string, Sirname?:string) => string = 
function(fname:string, lname?:string){
    if(lname){
        return fname + " " + lname
    }else{
        return fname
    }    
}
console.log(buildName1("Jamal"));//its okay because we declare one parameter is optional.
//console.log(buildName1("Anas","Jamal","Aijaz")); //error too many arguments.
console.log(buildName1("Anas","Jamal"));//its also okay




//  STEP 9 (c)
//========  Named Function With Default Parameter ======:
function buildName2(fname:string, lname = "Khan"){
    if(lname){
        return fname + " " + lname
    }else{
        return fname
    }    
}
console.log(buildName2("Umar"));//its work correctlt because last parameter is default.
console.log(buildName2("Anas","Jamal"));//default parameter is removed by input you value.
//console.log(buildName2("Syed","Ali","Bilal")); it shows error because we decalre 2 parameters in above part.




//========  Named Function With Default and Optional Parameter ======:
let buildName3 : (identity:string, Sirname?:string) => string = 
function(fname:string, lname = "Khan"): string{
    if(lname){
        return fname + " " + lname
    }else{
        return fname
    }    
}

let result1 = buildName3("Umair");  //its output is umair khan because in function we code default parameter.
console.log(result1);

let result2 = buildName3("Hamza","Butt");
console.log(result2);




// STEP 9 (c):

//===== Function Rest Parameter =======:

function buildName4 (fname:string,...restofName:string[]){ //jitne chahe argument de skte hai rest parameter mai.
    return fname + " " + restofName.join(" ");  //join ka method alag alag string ko aik string bna dega.Space se join krke aik string bna dega. 
}   //custom spearatoe beech mai space dega.

let employeName = buildName4 ("Asif","Ayan","Anas","Jamal","Siddiqui");
console.log(employeName);  //its output is Asif Ayan Anas Jamal Siddiqui



//====== Anonymous Function with Rest Parameter =======:
let buildName5 : (fname:string, ...restofName:string[]) => string =
function(fname:string,...restofName:string[]){
    return fname + " " + restofName.join(" ")
}

let employeName1 = buildName5("Taha","Ammar","Anwar","sami");
console.log(employeName1); //its output is Taha Ammar Anwar



// Step 9 (e):
let mypromise1 = new Promise((resolve,reject)=>{
    console.log("Promise pending.")
    setTimeout(()=>{
      //  console.log("Promise resolved.")
      //  resolve(["Ali","Ammar","Zoha"])
        console.log("Promise rejected.")
        reject(new Error ("Data Fetch Failed."))
       },1000)
})

mypromise1.then((res)=> {console.log(res);
}).catch((err)=> {console.log(err);
})

/*its output is:
Promise pending.
Promise rejected.
Error: Data Fetch Failed.
    at Timeout._onTimeout (G:\Practice session\Functions\promise.js:108:16)
    at listOnTimeout (node:internal/timers:573:17)
    at process.processTimers (node:internal/timers:514:7)  */


    

// Step 9(f):

//====== Function_overloads =====:
//overload gives us type-checked calls.

function add(a:number, b:number):number;
function add(a:string, b:string):string;
function add(a:boolean, b:boolean):boolean;


function add(a:any, b:any):any{
    return a + b;
}

console.log(add(5,8));
console.log(add("Hello", " Java"));
console.log(add(true,false));



function addition(arg1:number, arg2:number):number; //option 1.
function addition(arg1:string, arg2:string):string; //option 2.
function addition(arg1:boolean, arg2:boolean):boolean; //option 3.
/*this is not part of overload the list,
so it has only 3 overloads */

function addition(arg1:any, arg2:any):any{
    return arg1 + arg2;
}

//Calling "addition" with other parameters types would cause an error except for the three options.
console.log(addition(5,8));
console.log(addition("Hello", " Java"));
console.log(addition(true,false));







