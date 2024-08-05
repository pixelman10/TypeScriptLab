//CLASS 6
// npm init -y(package.json file)
//node package(npm i @types/node -D)

// let a: number = 5;
// let b: number = 2;
// let c: number;
// c = ++a + a++ + --b + b-- + a + b++ + b--;
//   6  +  6  +  1   + 1  + 7 + 0    +  1 : the answer will become 22.
// console.log("2" + c);

// Logical OPERATORS:
(5>0) && (2>0); //IS TRUE    &&:AND AND OPERATOR  
(5<0) || (5>0);//IS TRUE     ||:OR OPERATOR 
!(5>0);//IS FALSE              !:Not operator




let a = 5;
let b = 7;
let c = 9;
let d = 10;


let andOperator = (a>0) && (b>0) && (c>0);  //answer is true.           AIK bhi value yah condition false ho yeh answer false de dega .It is used to first false value.
console.log(andOperator);


let andOperator2 = (a>6) && (b>0) && (c>0);  //answer is false.           AIK bhi value yah condition false ho yeh answer false de dega .It is used to first false value.
console.log(andOperator2);


let orOperator = (a>6) || (b>6) || (c>6); //answer is true.              AIK bhi value yah condition true ho yeh answer true de dega .It is used to first true value. 
console.log(orOperator); 

let notOperator = !(a<0)//answer is true                               It is used to inverse the answer.True becomes false and false becomes true
console.log(notOperator);

let cities: string[] = ["Karachi","Paris","Jaddah","New jersey"];
cities.forEach(city=>{
    console.log(`${city}This is my one of the luxury country.`);
})
cities.map((items) => console.log(`${items} is one of the most rated city.`))




//IF and IF-ELSE STATEMENTS:
let isRaining = true;
if(isRaining){
    console.log("Wear a raincoat.")
}else{
    console.log("Wear a sunglasses.")
}
 
                   //OR

if(isRaining == true){
    console.log("Wear a raincoat.")
}else{
    console.log("Wear a sunglasses.")
}



let isRaining2 = false;
if(isRaining2){
    console.log("Wear a raincoat.")
}else{
    console.log("Wear a sunglasses.")
}



let weather ="clody";
if(isRaining){
    console.log("Baarish ho rhi hai.")
}else if(weather =="cloudy"){
console.log("Barish ho skti hai")
}else{
    console.log("Barish nhi ho rhi.")
}


