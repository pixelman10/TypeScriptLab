"use strict";
//----- Tuples ------ :
//Tuple is known is typed array.Yeh aik assay array jiski length aur typr pre-defined hoti hai.
//Tuple mai jitne aur jesi type dedi hai witne aur waise hee value assign krne hoti hai.
//Syntax: let tuple:[type1, type2 .....] = [];
let tuple = ["Usman Khan", 27, true, { gender: "Male", age: 16 }];
console.log(tuple);
console.log(tuple[0]);
console.log(tuple[3]);
//let arr:[string,number,boolean] = ["Moiz",16]; it shows error because target is 3.
//let arr:[string,number,boolean] = ["Moiz",16,true,"Ahmed"] its hows error because target is 3. 
let typeArr = ["Anas", 16, true]; //its shows not error because requirements is fulfilled we used optional.
let typeArr1 = ["Anas", 16, true, { qualification: "Matric", gender: "Male" }];
let typeArr2 = ["Anas", 16, true, { qualification: "Matric", gender: "Male" }];
typeArr2.push("Aslam");
//we dont used default in tuples but we used optional.
let typeArr3 = ["Anas", 16, true, { qualification: "Matric", gender: "Male" }];
let tuple1 = ["Saif", 19, true];
let arra = [1, 3, 6, 9];
console.log(arra.filter((num) => num % 2 == 0));
let x;
const y = (x) => x * x;
console.log(y(2));
function example() {
    var x = 1;
    if (true) {
        var x = 2;
        console.log(x);
    }
    console.log(x);
}
example();
