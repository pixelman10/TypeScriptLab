//============= TYPE ALIASES =========:

/*A type alias is a way to give a name to a specific type or combination of types.*/

/* In typescript,an alias can be created using type keyword.Type aliases you to create a new name for a type ,which can
 be helpful for simplifying complex types or making your code more readable.Here are a few examples of how to use type
aliases in typescript */

//==== Basic Type Aliases =====:
type Nameofperson = string;
let nameofperson:Nameofperson ="Ahmed";
console.log(nameofperson);
//Dislpay at terminal:Ahmed


//======= Alias For An Object Type ========:
type User ={
    name:string,
    id:number,
    isStudent:boolean,
}

let user:User ={
   name:"Ali",
   id:5087,
   isStudent:true, 
}
console.log(user);
//Display at terminal:{ name: 'Ali', id: 5087, isStudent: true }


//====== Alias For A Union Type =========:
type ID = string | number;

let userId: ID = 50628;
console.log(userId);//logs the initial number value.

userId = "UZIMAX";
console.log(userId);//logs the updated string value.

//Display at terminal:
//First 50628,
//then UZIMAX.



//======= Alias For A Function Type ========:
type Greetfunction = (name:string) => string;

const greet:Greetfunction = (name:string) =>{
    return `Assalam-u-Alaikium, Dear ${name}!.`
}
console.log(greet("Dua"));
//Display at terminal:Assalam-u-Alaikium, Dear Dua!.



//=======Alias For A Tuple Type ========:
type Circle = [number,number];
let circle:Circle = [20,50];
console.log(circle);
//Display at terminal:[ 20, 50 ].



//========= Alias For A Complex Type =========:
type Person = {
    name:string,
    age:number,
    gender:string,
    address:{
        street:string,
        city:string,
        country:string,
    }
}

let person: Person ={
    name:'Anas',
    age:16,
    gender:'male',
    address:{
        street:'Alalah housing Society',
        city:'Karachi',
        country:'Pakistan',
    }
}
console.log(person);
/*Display at terminal:
{
  name: 'Anas',
  age: 16,
  gender: 'male',
  address: {
    street: 'Alalah housing Society',
    city: 'Karachi',
    country: 'Pakistan'
  }
}   */




//========= Using Type Alias In Generics ============:
type User1 = {
    name:string,
    id:number,
    email:string
}

type Response1<T> = {
    status:number,
    payload:T,
}

type Userresponse = Response1<User1>;

let userresponse : Userresponse = {
    status:600,
    payload:{
        name:'Sohaib',
        id:80097,
        email:'Sohaib6742@gmail.com'
    }
}
console.log(userresponse);
/*Display at terminal:
{
  status: 600,
  payload: { name: 'Sohaib', id: 80097, email: 'Sohaib6742@gmail.com' }
}  */



//======= Intersection ========:Intersection= Used to join Types
type Person2 = {
    name:string,
    age:number,
    gender:string,
    isStudent:boolean,    
}  

type Human = {
    isAlive:boolean,
}

type Person1 = Person2 & Human; //Basically intersect plays union role in typescript ites arrange two objexts properties in one object.

let person1 : Person1 ={
    name:'Ali',
    age:20,
    gender:"Male",
    isStudent:true,
    isAlive:true,
}

console.log(person1.gender);

//Display at terminal: Male.





// Define individual type aliases
type StringOrNumber = string | number;
type BooleanOrArray = boolean | any[];

// Combine them into a union type alias
type CombinedType = StringOrNumber | BooleanOrArray;

// Example usage of the union type alias
let example1: CombinedType;
let example2: CombinedType;
let example3: CombinedType;

// Assigning values of different types to the variables
example1 = "Hello";  // string
example2 = 42;       // number
example3 = true;     // boolean
example3 = [1, 2, 3]; // array

// Function that accepts the union type
function processValue(value: CombinedType) {
  if (typeof value === "string") {
    console.log(`String value: ${value}`);
  } else if (typeof value === "number") {
    console.log(`Number value: ${value}`);
  } else if (typeof value === "boolean") {
    console.log(`Boolean value: ${value}`);
  } else if (Array.isArray(value)) {
    console.log(`Array value: ${value}`);
  } else {
    console.log("Unknown type");
  }
}

// Calling the function with different types of arguments
processValue("Hello");
processValue(42);
processValue(true);
processValue([1, 2, 3]);








 

