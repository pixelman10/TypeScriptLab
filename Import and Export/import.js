"use strict";
// ==== Modules ======
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const export_js_1 = __importDefault(require("./export.js")); //import with default export.
console.log((0, export_js_1.default)());
const export_js_2 = require("./export.js"); //import with simple export.
console.log((0, export_js_2.div)(121, 11));
console.log(export_js_2.favFootballer);
console.log(export_js_2.userNames);
// as ka keywoed ksi bhi cheez ka name change krne ke liye hota hai import ke time;
const export_js_3 = require("./export.js");
console.log(export_js_3.friend);
console.log(export_js_3.friend.Qualification);
const export_js_4 = require("./export.js");
console.log(export_js_4.a, export_js_4.b);
