//========= ENUMS ========:

/*They are commonly used when you want to represent a set of related values and choose one value from multiple options.
Enums provide a convenient way to define a set of named values and associate them with specific meanings.

In typescript,when enums constants are not explicity assigned numeric values,they are automatically assigned incremental
numeric values starting from 0.The default numeric value for the first enum  constant is 0,and subsequent enum constants
recievevalues incremented by 1.*/

enum roles{
    admin,
    user,
    bin
}

 console.log(roles.admin);  // jab koi value nhi do tou woh khud pehle wle ko 0 aur doosre wle ko1 value de dedete hai.aur agar thiird denge tou woh so on chlta rhega.
 console.log(roles.user);


 /*Enum matlab ek special type hota hai jo named values ko define karta hai. Jaise ek list of constants.

Enums ko related constants ko represent karne ke liye use kiya jata hai, jo code ko readable aur maintainable banata hai.

Imagine ek traffic light system. Traffic lights ke colors ko represent karne ke liye hum Enum use kar sakte hain:

RED: Signal stop ka indication deta hai.

YELLOW: Signal caution ka indication deta hai, prepare to stop or go.

GREEN: Signal go ka indication deta hai.

TrafficLight ek Enum hai jo teen members ko define karta hai: RED, YELLOW, aur GREEN. describe_traffic_light function
 har light ke action ko batata hai, jaise ki RED ka matlab hai stop, YELLOW ka matlab hai caution, aur GREEN ka matlab
 hai go.*/

//enums aik list of constants jisse value assign krte hai hum.

enum trafficlights {
    red="stop",
    yellow="prepare to stop or go",
    green="go"
}
console.log(trafficlights.yellow);

//_______________ enum __________________

enum Fuel {
     PETROL = "Rs 720",
     DIESEL = "Rs 300"
 }

console.log(Fuel.DIESEL);// output: Rs 300

 enum Fuel1 {
     PETROL1 ,
     DIESEL1
 }

 console.log(Fuel1[0]);// output: PETROL1
 console.log(Fuel1.DIESEL1);// output: 1
 console.log(Fuel1["0"]); // output: PETROL1
 console.log(Fuel1["PETROL1"]); // output: 0
 console.log(Fuel1[1]); // output: DIESEL1
 
 
 

 // _______________ const enum __________________

const enum Fuel2 {
         PETROL2= 500,
         DIESEL2 = 300
     }
    
//console.log(Fuel2)     const enum kee key ko access kr skte hai hum sirf.
// console.log(Fuel2[0]);// Error //const enum mai []brackets ke andar number nhi de skte .A const enum member can be accessed using a string literal.
console.log(Fuel2.DIESEL2);// 300
console.log(Fuel2["PETROL2"]); // 500
console.log(Fuel2["1"]); //It Shows Runtime error.


    

const enum Menu {
         Tikka = "RS 300",
         BeefBoti = "Rs 400",
    }
    
console.log(Menu.Tikka);// output: RS 300







