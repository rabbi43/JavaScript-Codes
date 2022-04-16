// JavaScript Document
export let text = "welcome";
export function setText(txt){
   text = txt;
}

// for access this module in the other files type bellow code =>
import {text} from '12_modules.js'
console.log(text)
//call function:
setText("Hello!")// it will do change the value of text var.
console.log(text)



