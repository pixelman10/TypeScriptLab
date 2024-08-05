"use strict";
//----- For-in Loop-------:
//its used for object only.
//index signature:[key:string]:any    its called index signature.
let studentdata = {
    name: "Asad",
    age: 17,
    isEnrolled: true,
    id: 5002,
    address: { city: "Karachi", country: "Pakistan" }, //ap aik object ke andar bhi object bna skte ho.
};
for (let key in studentdata) {
    console.log(key); //Its output is :  
    //Its output is :
    /*name
    age
    isEnrolled
    id
    address*/
    console.log(studentdata[key]); // its just like studentdata3.name usse krr ryhrn hai hum.kyu ke humne uppar humne index signature use kiya jiski waja se error chla gya aur neeche yeh option agaya.
    // Its Output is:
    //Asad
    //17
    //true
    //5002
    //{ city: 'Karachi', country: 'Pakistan' }
    console.log(`${key} : ${studentdata[key]}`);
    //Its output is:
    /*name : Asad
    age : 17
    isEnrolled : true
    id : 5002
    address : [object Object]*/
}
let names = ["Ayan", "Ayesh", "Sohaib", "Laraib"];
for (let i in names) {
    console.log(i); //when you used i variable it passes index  number.
}
/*Its output is:
0
1
2
3
*/
let names1 = ["Ayan", "Ayesh", "Sohaib", "Laraib", "Sameer"];
for (let s in names1) {
    console.log(names1[s]);
}
/*Its output is:
Ayan
Ayesh
Sohaib
Laraib
Sameer
*/
let friend = {
    name: "Hassam Siddiqui",
    age: 16,
    gender: "Male",
    qualification: "Matric",
    adress: { country: "Pakistan", city: "Karachi" }
};
for (let key in friend) {
    console.log(key);
    console.log(friend[key]);
}
//-------- For-of loop -------:
//It is used to iterate over element of an array.
let friends = ["Naji", "Ahmed", "Anas", "Maheer", "Moiz", "Umar"];
for (let i of friends) {
    console.log(i); //it prints an array element seperately.
}
/*Its Output is :
Naji
Ahmed
Anas
Maheer
Moiz
Umar
*/
let teachers = ["Wasay", "Raza", "Rehmat", "Rehman", "Tayyab"];
teachers.forEach(element => {
    console.log(`My teacher ${element} Bhai is knowledgeable, patient.`);
});
teachers.map((items) => console.log(`My teacher ${items} Bhai is knowledgeable, patient, and always eager to help us 
    understand`));
for (let i of teachers) {
    console.log(`My teacher ${i} Bhai is knowledgeable, patient, and always eager to help us 
 understand and apply new concepts effectively.`);
}
//Three methods result and work is same.
