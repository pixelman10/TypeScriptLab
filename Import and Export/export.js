"use strict";
// ====== Modules ======:
Object.defineProperty(exports, "__esModule", { value: true });
exports.b = exports.a = exports.friend = exports.favFootballer = exports.div = exports.userNames = void 0;
exports.default = fan;
//Koi bhi important kaam jo aapne apne project maim kiya ho woh ap default mai rakh skte hai.
//aik file mai aik hee default export hota hai.
function fan() {
    return `Give me a Fresh and cool air.`;
}
//Array:
exports.userNames = ["Ammar", "Abu Bakar", "Talha"];
//Function:
function div(num1, num2) {
    return num1 / num2;
}
exports.div = div;
//Variable:
exports.favFootballer = "Leonel Messi";
//Object:
exports.friend = {
    name: "Anas Jaml",
    age: 16,
    gender: "Male",
    Qualification: "Matric",
};
//Cosnt:
const a = 16;
exports.a = a;
const b = 7;
exports.b = b;
