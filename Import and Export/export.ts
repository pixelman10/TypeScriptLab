// ====== Modules ======:


export default fan;

//Koi bhi important kaam jo aapne apne project maim kiya ho woh ap default mai rakh skte hai.
//aik file mai aik hee default export hota hai.

function fan(){
    return`Give me a Fresh and cool air.`
}

//Array:
export let userNames: string[] = ["Ammar","Abu Bakar","Talha"];

//Function:
export function div(num1:number, num2:number):number{
    return num1 / num2;
}

//Variable:
export let favFootballer:string = "Leonel Messi"; 

//Object:
export let friend ={
    name:"Anas Jaml",
    age:16,
    gender:"Male",
    Qualification:"Matric",
}

//Const:
const a= 16;
//export a; it shows error
const b = 7;
export {a , b} //aik hee line ke andar easily export bhi krskte hai.

