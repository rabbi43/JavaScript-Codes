// JavaScript Document
// 16 April,2022
// author : fazle rabbi
// all codes written by quoda code editor (mod/premium) apk using my Android Phone🤩
// facebook: cutt.ly/frfb

// I added these keywords because i have no computer,i have only an android deivice,i use quoda code editor (premium) apk for writing codes.
// these keywords help me on code auto completion
/*
JavaScript Document
document,write,getElementById,querySelector
for,var,let,const,add,style,
addEventListener,classList,parentElement
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
// Focus event:

// blur
// focus
// focus in
// focus out

var input =document.querySelector("input");

/*input.addEventListener("blur",function(){
   alert("hi");
})*/


input.addEventListener("focus",function(e){
   var msg =document.querySelector("h1");
   // msg.innerHTML=e.target.value;
   input.style.border="2px solid red";
   
   
})


input.addEventListener("blur",function(e){
   var msg =document.querySelector("h1");
   // msg.innerHTML=e.target.value;
   input.style.border="0px solid red";
   input.value = e.target.value.toUpperCase();
   
})















