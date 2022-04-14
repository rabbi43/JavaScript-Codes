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
splice,slice,sort,typeof,break,continue,while,do
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


var div =document.querySelector("div");
div.style.background="red";
div.style.color="white";
div.style.padding="10px";
div.innerHTML="hello im changed";
// div.textContent="changed";


var link =document.querySelector("a");
link.href="https://new_link";


// create element:
var div2 =document.querySelector(".div2");
var heading =document.createElement("h1");
var text =document.createTextNode("Hello im heading 1...");
heading.appendChild(text);
div2.appendChild(heading)


// remove child:
var heading2 =document.querySelector("div2")[1];  
div2.removeChild(heading2)
// div2.replaceChild(newchild,oldchild)
// এই পদ্ধতিতে চাইল্ড রিপ্লেস করা হয়
// insertBefore(heading1,heading0)
// যাকে যুক্ত করতে চাই তাকে প্রথমে লিখতে হবে, তারপর যার পূর্বে যুক্ত করতে চাই তাকে লিখতে হবে
// এবং অবশ্যই যার পূর্বে যুক্ত করব তাকে ফাইন্ড করে নিতে হবে

div2.classList.add("classname");
div2.classList.remove("classname");
// এই পদ্ধতিতে নতুন ক্লাস যুক্ত করা হয় এবং ক্লাস রিমুভ ও করা হয়










