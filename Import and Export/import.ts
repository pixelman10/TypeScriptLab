// ==== Modules ======


import fan from "./export.js";  //import with default export.

console.log(fan());


import { div  ,favFootballer ,userNames } from "./export.js";//import with simple export.

console.log(div(121,11));
console.log(favFootballer);
console.log(userNames);



// as ka keywoed ksi bhi cheez ka name change krne ke liye hota hai import ke time;
import { friend as person } from "./export.js";
console.log(person);
console.log(person.Qualification);


import {a , b as c} from "./export.js";
console.log(a,c);



