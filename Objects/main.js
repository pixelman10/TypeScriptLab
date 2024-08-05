//=============== Objects =============:
//In objects,we commonly refer to a "key-value pair."Each property of an object is essentially a key-value pair,
//where the key is string(or a symbol) ,and the value can be any valid JavaScript data type( including other objects).
//For example in the following object:
let person = {
    name: "usman",
    age: 16,
    education: "Matric",
    Isstudent: true,
};
person.name = "Khan"; // change the value of any key.
console.log(person);
// person.key = value
//name is key and usman is value.
//here name,age,education are the keys.and the usman,16 and matric is corresponding values.The combination of key and
// its associated value is what we call a key-value pair.Objects use these pairs to oraganize and store data in a structured way.
//====== Object.keys(),Object.values(),Object.entries()=============:
let myObject = {
    car: "Toyota XLi ",
    model: 2006,
    manufacturer: "Toyota",
    capacityseats: 5,
};
console.log(Object.keys(myObject)); //yeh keys dikhae ga array kee shakal mai just like[ 'car', 'model', 'manufacturer', 'capacityseats' ]
console.log(Object.values(myObject)); //yeh values dikhae ga sirf array kee shakal mai just like [ 'Toyota XLi ', 2006, 'Toyota', 5 ]
console.log(Object.entries(myObject)); // yeh dono dikhae ga value kye pair array kee shkal mai[  [ 'car', 'Toyota XLi ' ], [ 'model', 2006 ],[ 'manufacturer', 'Toyota' ],  [ 'capacityseats', 5 ] ]
let studentdata = { ali: 80, asad: 63, ahmed: 76, anas: 85, sheriyar: 92, moiz: 90 };
let scores = Object.values(studentdata);
console.log(scores);
console.log(scores.length); // its mean yeh tadaad btae ga kitne values hai .
let sum = 0;
for (let i = 0; i < scores.length; i++) {
    sum = sum + scores[i];
    //  console.log(sum/scores.length);   yeh bhi use krskte the hum. 
}
let avg = sum / scores.length;
console.log(avg);
//=======Nested Objects========:
let studentdata2 = {
    age: 16,
    isEnrolled: true,
    id: 50062,
    address: { city: "Karachi", country: "Pakistan" }, //ap aik object ke andar bhi object bna skte ho.
};
console.log(studentdata2.address.city); //excess kiya hai adress mai se cityn ko.
console.log(studentdata2[`address`][`city`]); //its output is Karachi.
console.log(studentdata2[`address`].city);
//============ for-in loop ===========:
//its used for object only.
//index signature:[key:string]:any    its called index signature.
let studentdata3 = {
    name: "Asad",
    age: 17,
    isEnrolled: true,
    id: 5002,
    address: { city: "Karachi", country: "Pakistan" }, //ap aik object ke andar bhi object bna skte ho.
};
for (let key in studentdata3) {
    console.log(key);
    console.log(studentdata3[key]); // its just like studentdata3.name usse krr ryhrn hai hum.kyu ke humne uppar humne index signature use kiya jiski waja se error chla gya aur neeche yeh option agaya\
    console.log(`${key} : ${studentdata3[key]}`);
}
let academyFees = {
    english: 8000,
    math: 10000,
    physics: 9000,
    chemistry: 9000,
};
console.log(`Fees of English subject is ${academyFees.english}.`);
console.log(`Fees of Physics subject is ${academyFees.physics}.`);
console.log(`Fees of Math subject is ${academyFees.math}.`);
console.log(`Fees of Chemistry subject is ${academyFees.chemistry}.`);
academyFees.english = 11000;
console.log(`Fees of English subject is ${academyFees.english}.`);
//======== Inquirer =======:    inquirerbhi basically object mai aata hai.
// import inquirer from "inquirer";
// const answer = await inquirer.prompt([
//     {
//         type:'list',
//         name:'choose',
//         message:'select any one',
//         choices:['yes','no']
//     }
// ])
//=======Practice=======:
//========Anonymous types========:
let person1 = {
    name: 'Jahangir',
    age: 28,
    studying: 'Masters of Engineering in NED University',
    bachelor: "1 divsion",
};
let studentgrades = {
    math: 90,
    science: 85,
    history: 88,
    english: 95,
};
let grades = Object.values(studentgrades);
let sum1 = 0;
for (let i = 0; i < grades.length; i++) {
    sum1 = sum1 + grades[i];
    //console.log(sum1/grades.length);   yeh bhi use krskte the hum. 
}
let avg1 = sum1 / grades.length;
console.log(avg1);
export {};
//make a object jiske andar object,array majood ho.
