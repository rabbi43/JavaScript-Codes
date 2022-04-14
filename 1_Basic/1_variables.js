// JavaScript Document
// 14 April,2022
// author : fazle rabbi
// all codes written by quoda code editor (mod/premium) apk using my Android Phone🤩
// facebook: cutt.ly/frfb

// I added these keywords because i have no computer,i have only an android deivice,i use quoda code editor (premium) apk for writing codes.
// these keywords help me on code auto completion
/*
JavaScript Document
document,write,getElementById,querySelector
for,var,let,const,add,style,
eventListener,classList,parentElement
children,nextElementSiblong
previousElementSibling
querySelectorAll,getElementsByTagName
createElement,createTextNode,appendChild
removeChild,insertBefore,function
innerHTML,Math,sqrt,pow,random,floor,ceil
max,date new Date(),object,array,
date.get FullYear,Month,Hours,Minutes
Day,constractor,pop,push,shift,unshift
splice,slice,sort,break,continue,while,do
if,else if,else,switch,case,default,
Number,parseInt,parseFloat,toString()
toFixed,toPrecision,length,charAt,
toUppercase,concat,inside,Literals,name,Names,names,age,roll,concat,StudentsInfo,Students,student,info,var,let,const,return,console,log,
*/
// Xml http request
// event:onload(),onerror()
// property: response,responseText,responseType,responseUrl,status,statusText
// function: open(),send(),setRequestHeader()
// methods:get,post,put,patch,delete
// API: https://jsonplaceholder.typicode.com/posts

function br(){
   document.write("<br>");
}
// =========================

// JavaScriptb এ তিনভাবে variable নেয়া যায়
// var,let,const

//  var এর ভ্যালু স্কোপ এবং স্কোপ এর বাহিরে সব যায়গায় পরিবর্তন হবে
var text1 = "im text 1";
document.write(text1);// output in browser
// console.log(x);// output in console/terminal

br()

{// এটি ব্যবহার করা হয়েছে একটি স্কোপ তৈরী করার জন্য
   var text1 ="im text 1...changed";
   document.write(text1);
}

br()

// এটি একটি নির্দিষ্ট স্কোপ এর মধ্যেই কেবল পরিবর্তন হবে
let text2 ="im text 2";
document.write(text2);

br()

{  // স্কোপ এর মধ্যে পূর্বে নেয়া ভ্যারিয়েবল আবার নেয়া যাবে
   let text2 ="im text 2...changed";
   document.write(text2);
}

br()

// এটির ভ্যালু অপরিবর্তনশীল
const text3 ="im text 3";
document.write(text3);
br()

{
   const text3 = "im text 3 changed"
   document.write(text3);

}






