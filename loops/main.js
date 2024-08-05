"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const prompt_sync_1 = __importDefault(require("prompt-sync"));
const prompt = (0, prompt_sync_1.default)(); //npm install prompt-sync
//npm i --save-dev @types/prompt-sync
//Loop:Allowing for reapeated execution of code.
//=============== FOR LOOP ==================.
for (let i = 0; i < 10; i++) {
    console.log("PAKISTAN ZINDABAD");
}
//i is known as iteration method.
for (let i = 0; i < 6; i++) {
    console.log(`Watering a plant ${i + 1}.`);
}
for (let i = 1; i <= 10; i++) {
    console.log(`6 x ${i} = ${i * 6}`);
}
//=========even and odd numbers==========:
for (let i = 1; i <= 100; i++) {
    if (i % 2 === 0) {
        console.log(`Even Numbers =`, i);
    }
    else {
        console.log(`Odd Numbers =`, i);
    }
    ;
}
//==========sum of n numbers:============    //for example:1+2+3+4+5=15
let sum = 0;
let input = Number(prompt(`Enter how many first n numbers you want to add:`));
for (let i = 1; i <= input; i++) {
    sum = sum + i;
}
console.log(sum);
//===========count vowels of a string==========
let inputstring = prompt(`Enter any string: `);
let inputLength = inputstring.length;
let vowels = "aeiou"; //includes method in  string and arrays.  yeh function dekhta hai true aur false mai anaswer deta hai yeh check krne ke liye hota hai.
for (let i = 0; i < inputLength; i++) {
    let letters = inputstring[i];
    if (vowels.includes(letters)) {
        console.log(`It is vowel: `, letters);
    }
    else
        (console.log(`It is not a  vowel:`, letters));
}
//=====INDEX-OF METHOD=======:its a array method, it is identify the position of letter arrays letter starts with index number 0. 
let myname = "usman";
console.log(myname.indexOf("s"));
let myarray = ["Apple", "Mangoes", "Peach", "Banana"];
console.log(myarray.indexOf("Banana")); // its answer is 3rd because banana position is 3 in array.
console.log(myarray.includes("Banana")); // its answwer is true because banana is here in array.
//================ WHILE LOOP =================.
let bus = 5;
while (bus > 0) {
    console.log(`Bus arrives in ${bus} minutes.`);
    bus--;
}
let truck = 0;
while (truck < 5) {
    console.log(`Bus arrives in ${truck} minutes.`);
    truck++;
}
//above and this method is same just some changing.
let car = 0;
while (car < 6) {
    console.log(`hello messi.`);
    car = car + 1;
}
let x = 0;
while (x < 4) {
    console.log('Cricket', x);
    console.log('Football', x);
    x++; //or x=x + 1;
}
//any table,loop  easy method of table:
let y = 1;
while (y < 11) {
    console.log(y * 7);
    y++;
}
//just add little bit beauty.
let a = 1;
while (a < 11) {
    console.log(`9 x ${a} = ${a * 9}`);
    a++;
}
//Print values upto 100.
let q = 1;
while (q <= 100) {
    console.log(q);
    q++;
}
let w = 100;
while (w >= 1) {
    console.log(w);
    w--;
}
let e = 100;
while (e >= -100) {
    console.log(e);
    e--;
}
//Even and Odd  numbers method:
let r = 1;
while (r <= 100) {
    if (r % 2 === 0) {
        console.log(`Even Numbers =`, r);
    }
    else {
        console.log(`Odd Numbers =`, r);
    }
    r++;
}
// let t=1;
// while(true){       //its called infiity loop condition mai humne yeh btaa dityaa yeh true hai but yeh nhi btaya kab tak chalna hai loop ne.
//     if(t % 2 === 0){
//         console.log(`Even Numbers =`,t);
//     }else{
//         console.log(`Odd Numbers =`,t);  
//     }
//     t++;
// }
let u = 1;
while (true) {
    if (u % 2 === 0) {
        console.log(`Even Numbers =`, u);
    }
    else {
        console.log(`Odd Numbers =`, u);
    }
    u++;
    break;
} //yeh condition ke leehaz se chalke break hojae ga infinity nhi chlega.
let o = 1;
while (o <= 100) {
    console.log(`9 x ${o} = ${o * 9}`);
    o++;
}
let p = 7;
while (p > 0) {
    console.log(`Hey boi.`, p);
    p--;
}
//============== do-while loop ================.
//requirements one condition.
// let i=0;
// do{
//     console.log(`hello jimmy.`)
// }while(i< 6)
//its called infinity loop.
let i = 0;
do {
    console.log(`hello jimmy.`);
    i = i + 1;
} while (i < 6);
let m = 0;
do {
    console.log(`13 x ${m} = ${m * 13}`);
    m++;
} while (m <= 100);
//for(let i= 0; i < 100; i++){}
//while(i < 6){
// i++}
//do{
//i--}while(i<8)
for (let i = 100; i > 0; i--) {
    console.log(i);
}
