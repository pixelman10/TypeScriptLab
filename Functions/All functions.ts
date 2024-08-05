import { rejects } from "assert";
import { log } from "console";
import { resolve } from "path";

function mySum(a:number, b:number):number{
    return a + b;   
}

console.log(mySum(56,890));


let mySub = function (a:number,b:number):number{
    return a - b;
}

console.log(mySub(18,15));


let myMul:(a:number,b:number)=> number = function(x:number,y:number):number{
    return x * y;
}

console.log(myMul(78,3));


let myDiv = (a:number,b:number):number =>{
    return a / b
}

console.log(myDiv(81,9));


let myCom = (x:number,y:number,z:number) => x + y * z ;
console.log(myCom(5,89,5));


type buildname = (fname:string)=> string;
function buildname(fname:string){
    return fname;
} 

console.log(buildname("Ayaaz"));




function myName(fname:string, lname?:string){
    if(lname){
        return fname + " " + lname;
    }else{
       return fname;
    }
}

console.log(myName("Usman"));
console.log(myName("Usman","Khan"));


function myName2(fname:string, lname ="Khan"){
    if(lname){
        return fname + " " + lname;
    }else{
        return fname;
    }
}

console.log(myName2("Muhammad"));
console.log(myName2("Muhammad","Usman"));


let buildname1: (fname:string, lname?:string)=>string =
function(firstName:string, lastName="Khan"){
    if(lastName){
        return firstName + " " + lastName 
    }else {
        return lastName;
    }
}

console.log(buildname1("Sami"));
console.log(buildname1("Sami","Khan"));


function myMath(a:string,b:string):string;
function myMath(a:number,b:number):number;
function myMath(a:boolean,b:boolean):boolean;


function myMath(a:any ,b:any):any {
    return a + b
}

console.log(myMath(1,8));
console.log(myMath("dUA","kHan"));
console.log(myMath(true,false));



function buldName(arg1:string, ...arg2:string[]){
    return arg1 + " " + arg2.join(" ");
}
 
let friends = buldName("Amaar","Sohail","Nawaz","Asif","Ali");
console.log(friends);


let buldName1:(fname:string,...lname:string[])=>string =
function (fname:string,...lname:string[]){
    return fname + " " + lname.join(" Ahmed");
}

let members = buldName1("Sumair","Jammal","Israr","huziafa","Sami");
console.log(members);



function makingPizza(taskName:string,
    delay:number, cb:()=> void
){
    setTimeout(()=>{
        console.log(taskName);
        cb()
     },delay)
}

makingPizza("1. Preparing the Dough",0, ()=>{
    makingPizza("2. Preparing the Sauce",4000, ()=>{
        makingPizza("3. Assembling the Pizza",3000, ()=>{
            makingPizza("4. Baking the Pizza", 5000, ()=>{
                makingPizza("Pizza is Ready!",1000, ()=>{
                    console.log("Pizza is Delicious")
                })
            })
        })
    })
})


function makingSoaps(taskName:string,delay:number){
let promise:Promise<void> = new Promise((resolve,reject)=>{
    setTimeout(()=>{
        console.log(taskName);
        resolve()
    },delay)
})
  return promise
}

makingSoaps("Raw materials",0)
.then(()=> makingSoaps("Animal fat/Plant oil",2000))
.then(()=> makingSoaps("Caustic Soda/Caustic Potash",3000))
.then(()=> makingSoaps("Additives",3000))
.then(()=> makingSoaps("Abrasives",2000))
.then(()=> console.log("Soap is Ready!"))




function prepareSugar(taskName:string,delay:number){
    let promise:Promise<void> = new Promise((resolve,reject)=>{
        setTimeout(()=>{
            console.log(taskName);
            resolve()
        },delay)
    })
    return promise;
}


async function runpromise(){
 try{
    let step1 = await prepareSugar("Harvesting Sugar Cane",0);
    let step2 = await prepareSugar("Extracted juice from Sugar cane",2000);
    let step3 = await prepareSugar("Concentration of extracted juice",4000);
    let step4 = await prepareSugar("Crystalization of concentrated juice",5000);
    let step5 = await prepareSugar("Crystal seperation and drying ",2000);
} catch (error){
    console.log("Error")
}finally{console.log("Soap is Rady..!")}
}

runpromise();


let mypromise = new Promise((resolve,reject)=>{
    console.log("Promise Processed..");
    setTimeout(()=>{
        console.log("Promise failed.");
        reject(new Error("Data Fetch Failed"))
    },1000)
})

mypromise.then((res)=> console.log("Promise is successfull"))
.catch((err)=> console.log(err));


let mypromise1 = new Promise((resolve,reject)=>{
    let percentage = 60;
    if(percentage >= 55){
        resolve("Good")
    }else{
        reject("Bad")
    }
})

mypromise1.then((res)=> console.log(res))
.catch((err)=> console.log(err));





function washing(){
    console.log("Washing started...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Washing done!")
        },2000)
    })
}

function soaking(){
    console.log("Soaking started...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Soaking done!")
        },3000)
    })
}

function drying(){
    console.log("Drying started...");
    return new Promise((resolve,reject)=>{
        setTimeout(()=>{
            resolve("Drying done!")
        },5000)
    })    
}


async function washingClothes(){
 try{
    const result1 = await washing();
    console.log(result1);
    const result2 = await soaking();
    console.log(result2);
    const result3 = await drying();
    console.log(result3);
    }catch(error)
    {console.log("Error is Found.")
} finally{
    console.log("Folding laundry.")}
}

washingClothes();