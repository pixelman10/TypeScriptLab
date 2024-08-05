// ===== SIR ZIA REPO =====:

//syntax : let arrayname : type[] = [];
//let arrayname : Array<arraytype> = []

//we call Array as list in python.
//Non primitive datatype: Array.

let message = "Hello";
console.log(message.split("").reverse().join(" "));



let stringarray: string[] = ["Ali","Sana","Dua","Raza"];
console.log(stringarray);
console.log(stringarray[3]);

let numberarray: number[] = [1,2,3,4,5,7];
console.log(numberarray);
console.log(numberarray[2] = 76);//replace krwa krr print krne ka tariqaaa.

//shift + backlash is used for or operator.
let array: (string| number)[] = ["Aleesha","Saad","Asad",2,6,10];
console.log(array);
console.log(array[3]=7);
console.log(array[2]= "Anas");


//Empty Array:
let array2 : number[] = [];
array2[0] = 12;
array2.push(1,2,3,4,5);  //push ke method se kuch bhi add kra skte hai,  Dynamically adding.
console.log(array2);

console.log(array2.length);


