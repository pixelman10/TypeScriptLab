"use strict";
//Step 9(a).
//Note:All parameters are required.
function ali() { }
let annonymous = function () { };
//let annonymoufunc:()=> ReturnType = function():ReturnType{}
const arrowfunc = () => { };
let reducearrowfunc = (a, b) => a * b;
//====== Named Function =======: Jiss Function ka name ho.
function subtract1(x, y) {
    return x - y;
}
console.log(subtract1(65, 63));
//====== Anonymous function ======:  Means function ka name nah ho.
let tuddler = function (a, b, c) {
    return a + b * c;
};
console.log(tuddler(1, 7, 9));
//====== Anonymous function with explict type ======:
let moore = function (x, y, z) {
    return x + y / z;
};
console.log(moore(4, 8, 4));
let Kane = function (x, y, z) {
    return x + y * z;
};
console.log(Kane(4, 8, 4));
//===== Type names dont matter ======: types name matter nhi krta bss jo usse type dee ho woh same ho.
let myAdd = function (x, y) {
    return x + y;
};
console.log(myAdd(655, 451));
//===== Lambda Function =======: means (Arrow function) & single line function.
//Arrow Function Syntax:  let variable name = (paramters:type) =>{}
let myDivision = (c, d) => c / d;
console.log(myDivision(81, 9));
function greeter(Greetfunction) {
    console.log(`Your look so cool`); //it is written because it is not return it is console.
}
greeter("Alex"); // it is not written because function return type is void.
//  Step 9 (b):
//====== Named with Optional parameters====:
function buildName(fname, lname) {
    if (lname) {
        return fname + " " + lname;
    }
    else {
        return fname;
    }
}
console.log(buildName("Usman")); //its okay because we declare one parameter is optional.
//console.log(buildName("Muhammad","Usman","Khan")); //error too many arguments.
console.log(buildName("Usman", "Khan")); //its also okay
//===== Anonymous Function Type with Optional Parameter ======:
let buildName1 = function (fname, lname) {
    if (lname) {
        return fname + " " + lname;
    }
    else {
        return fname;
    }
};
console.log(buildName1("Jamal")); //its okay because we declare one parameter is optional.
//console.log(buildName1("Anas","Jamal","Aijaz")); //error too many arguments.
console.log(buildName1("Anas", "Jamal")); //its also okay
//  STEP 9 (c)
//========  Named Function With Default Parameter ======:
function buildName2(fname, lname = "Khan") {
    if (lname) {
        return fname + " " + lname;
    }
    else {
        return fname;
    }
}
console.log(buildName2("Umar")); //its work correctlt because last parameter is default.
console.log(buildName2("Anas", "Jamal")); //default parameter is removed by input you value.
//console.log(buildName2("Syed","Ali","Bilal")); it shows error because we decalre 2 parameters in above part.
//========  Named Function With Default and Optional Parameter ======:
let buildName3 = function (fname, lname = "Khan") {
    if (lname) {
        return fname + " " + lname;
    }
    else {
        return fname;
    }
};
let result1 = buildName3("Umair"); //its output is umair khan because in function we code default parameter.
console.log(result1);
let result2 = buildName3("Hamza", "Butt");
console.log(result2);
// STEP 9 (c):
//===== Function Rest Parameter =======:
function buildName4(fname, ...restofName) {
    return fname + " " + restofName.join(" "); //join ka method alag alag string ko aik string bna dega.Space se join krke aik string bna dega. 
} //custom spearatoe beech mai space dega.
let employeName = buildName4("Asif", "Ayan", "Anas", "Jamal", "Siddiqui");
console.log(employeName); //its output is Asif Ayan Anas Jamal Siddiqui
//====== Anonymous Function with Rest Parameter =======:
let buildName5 = function (fname, ...restofName) {
    return fname + " " + restofName.join(" ");
};
let employeName1 = buildName5("Taha", "Ammar", "Anwar", "sami");
console.log(employeName1); //its output is Taha Ammar Anwar
// Step 9 (e):
let mypromise1 = new Promise((resolve, reject) => {
    console.log("Promise pending.");
    setTimeout(() => {
        //  console.log("Promise resolved.")
        //  resolve(["Ali","Ammar","Zoha"])
        console.log("Promise rejected.");
        reject(new Error("Data Fetch Failed."));
    }, 1000);
});
mypromise1.then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err);
});
function add(a, b) {
    return a + b;
}
console.log(add(5, 8));
console.log(add("Hello", " Java"));
console.log(add(true, false));
/*this is not part of overload the list,
so it has only 3 overloads */
function addition(arg1, arg2) {
    return arg1 + arg2;
}
//Calling "addition" with other parameters types would cause an error except for the three options.
console.log(addition(5, 8));
console.log(addition("Hello", " Java"));
console.log(addition(true, false));
