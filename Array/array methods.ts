//=====Methods===:
//Push and Pop:
let myFruits: string[] = ['Apple' , 'Mango' , 'Pineapple' , 'Strawberry'];
myFruits[0] = "Banana";
console.log(myFruits);

myFruits.push(); //it is used to add element in the last of an array.
myFruits.pop(); //it is used to remove last element of an array.

console.log(myFruits);




// Concat Method :- it is used to join to array in one/single array. In this method we dont use type annotations.
let numArray  =["One" , "Two" , "Three" ,"Four"];
let numArray2  = [ "Five" , "Six"];
let finalArray = numArray.concat(numArray2)
console.log(finalArray);




//Unshift and Shift method:-
let myCartoons: string[] = ['Ben 10' , 'Chota Bheem' , 'Tom and Jerry'];
myCartoons.unshift("Oggy and Cockroaches");//it is used to add element in the start of an array.
console.log(myCartoons);

myCartoons.shift() //it is used to remove element in the start of an array.
console.log(myCartoons);


let allowedStudents : string[] = ['Ali','Abrar','Shahid','Nawaz','Daniyal','Ameen','extra'];
if(allowedStudents.length > 5){
    allowedStudents.pop()
}
console.log(allowedStudents);




//Slice and Splice method:-
let myFriends : string[] = ['Hunain','Naji','Umar','Sheriyar','Anas','Hassam'];
console.log(myFriends.slice(0,5)); //Its output is ['Hunain','Naji','Umar','Sheriyar','Anas']

console.log(myFriends.splice(2,6));//Its output is ['Umar','Sheriyar','Anas','Hassam']





//Math.random:- It is used to generate random number.It is generate number between 0 to 0.99999.
//Math.floor round off karke value btata tha just like 1.9767853 => 2.
let myGuests: string[] = ['Sohail','Sharjeel','Shaheen','Riaz','Abdullah','Sami'];
let length1 = myGuests.length;
let randomIndex = Math.floor(Math.random() * length1);
let billPerson =  myGuests[randomIndex];
console.log(billPerson);






//For-each method:
let arr: string[] =['Ali','Raza','Moiz'];

arr.forEach((element,index) =>{
    if(index === 0){
        arr[index] = element + " Khan"
    }
    console.log(arr[0])
})

//Its output is:-
//Ali Khan
//Ali Khan
//Ali Khan


arr.forEach((element,index)=>{
    if(index === 4){
        arr[index] = element + " Butt";    
    }
    console.log(arr[4]);
})

//Its output is:-
//undefined
//undefined
//undefined





//Sort and join Method:-
let myCar : string[] = ["Corolla","Audi","Mercedes","Ferrari"];
console.log(myCar.sort()); // it is used to sort an to alphabetic manner.
//Its output is :-
//[ 'Audi', 'Corolla', 'Ferrari', 'Mercedes' ]

console.log(myCar.join());// it is used to join an array in a single string .
//its output is:-
//Audi,Corolla,Ferrari,Mercedes





/*=====INDEX-OF METHOD=======:its a array method, it is identify the position of letter arrays
 letter starts with index number 0. */

let myname = "usman";
console.log(myname.indexOf("s"));
//Its output is:-
//1    : Its answer is according to index numbers.

//Includes Method:it isn identify the element is an array or not.Its answer in boolean datatype.

let myarray = ["Apple","Mangoes","Peach","Banana"];
console.log(myarray.indexOf("Banana"));  // its answer is 3rd because banana position is 3 in array.
console.log(myarray.includes("Apple")); // its answwer is true because banana is here in array.
console.log(myarray.includes("Mango")); // its answer is false.



//Map method:it is used to repeat sentence with diffeernet element

let transportation: string [] = ["BMW's compact sedan. ","Audi Q7.","Honda Civic"];
transportation.map((items) => console.log(`I would like to own a ${items}`));

let myarray1 = ["Apple","Mangoes","Peach","Banana"];
myarray1.map((items)=> console.log(`${items} is good for health.`) )


myarray1.forEach((index)=>{
    console.log(`${index} is good for health too much.`);
})



//Slice:
let array3 = ["King","Queen","Prince","Princess","Audience"];  //it is used to alter array.
console.log(array3.slice(1,4));   //Yeh method beech mai se value lene ke liye use hoti hai.
//Iska strating aur ending item btana hota hai.Ending point aik zyada btana hita hai kyue ke wo ending point se pehle wale elements utha lega.
//Its answer is ["Queen","Prince","Princess"].

console.log(array3);// yeh slice ke badd poori array dikhae ga.


//Splice: It  is used to remove element in the middle of an array.
let spliceArray = ["Messi","Ronaldo","Vini JR","Lewandowski","Mbappe","Xabi Alonso",];
console.log(spliceArray.splice(1,2)) //Its output only ["Ronaldo","Vini JR"] 
console.log(spliceArray);//Its output only [ 'Messi', 'Lewandowski', 'Mbappe', 'Xabi Alonso' ]
console.log(spliceArray.splice(1));//its output is [ 'Lewandowski', 'Mbappe', 'Xabi Alonso' ]
console.log(spliceArray);//Its output is :[ 'Messi' ]

console.log(spliceArray.splice(1,3,"Yaseeen khan"));//Its output is : []
console.log(spliceArray); //its output is: [ 'Messi', 'Yaseeen khan' ]


//Ksi bhi array mai se data ko extract karna hai.



let myFriends3: string[] = ["Anas","Moiz","Hunain","Umar","Hassam","Shery"];
let result1 = myFriends3.splice(1);  //Agar isme 1 daaloge tou woh aik se aakhir tak sab utha lega
console.log(result1); //Its output is [ 'Moiz', 'Hunain', 'Umar', 'Hassam', 'Shery' ]
console.log(myFriends3);//Its output is [ 'Anas' ]

let resul2 = myFriends3.splice(1,1,"Dua","Areeb","Ufaira","Raza","Mutahir","Taha");
console.log(resul2);//Its output is [] because we given first index number and 1 element to remove.


let result3 = myFriends3.splice(1,6,"Dua","Areeb","Ufaira","Raza","Mutahir","Taha");
console.log(result3);//Its output is [ 'Dua', 'Areeb', 'Ufaira', 'Raza', 'Mutahir', 'Taha' ].




// filter(): means chaan ke ksi cheez ko nikalna.means bohat saari cheezen hai usme se apni mrzi kee
//cheizien niklana.
//yeh method array ke elements ko filter krta hai aur aik speciefied condition ko meet krta hai aur naya array bna deta hai.
//iss method mai condition lagti hai. 

let myNum: number[] = [1,2,3,4,5,6,7,8];
let evenNum = myNum.filter(num => num % 2 === 0);
console.log(evenNum);//Its output is : [ 2, 4, 6, 8 ]

let oddNum = myNum.filter(num => num % 2 !== 0);
console.log(oddNum); //Its output is : [ 1, 3, 5, 7 ]

let bigThan3 = myNum.filter(num => num > 3); //Its output is : [ 4, 5, 6, 7, 8 ]
console.log(bigThan3);

console.log(myNum); //Its output is: [  1, 2, 3, 4, 5, 6, 7, 8 ].


//filter method ke andar agar condtion match na kare tou empty array aati hai.
let meetCond = myNum.filter(num => num > 8 );
console.log(meetCond); //its output is: []



//find():
//It is similar to filter function.
//Yeh pehla element pick karat hai jo condtion satisfy kare. Filter sare element pick krta hai jo condition satisfy krta hai.


let myNum1: number[] = [1,2,3,4,5,6,7,8];
let result = myNum1.find(num => num > 3);
console.log(result);  //Its output is: 4


//find ke andar agar condtion match na kare tou undefined  aata hai output.
let notMeetCond = myNum1.find(num => num > 8);
console.log(notMeetCond);  //Its output is: undefined



//map():
//Map  array return krke deta hai aur forEacch kuch bhi return nhi krta.

let numbers: number[] = [1,3,5,7,9];
let myMap = numbers.map(num => num * 2);
console.log(myMap); //Its output is: [ 2, 6, 10, 14, 18 ] 


let numbers1: number[] = [1,3,5,7,9];
let myMap1= numbers.map(num => num > 11);
console.log(myMap1);  //Its output is: [ false, false, false, false, false ]






