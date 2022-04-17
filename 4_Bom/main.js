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

// Bom:(browser object model)
// location,popupBox,timingEvent
// location=>href,protocol,port,hostname,path

var button =document.querySelector("button").addEventListener("click",newLink)
var h1 =document.querySelector("h1")

function newLink(){
   //window.location.href="https://cutt.ly/frgithub";
   h1.innerHTML=location.protocol;
}


// PopUpBoxex:
// alert,prompt,confirm
var btn2 =document.querySelectorAll("button")[1];
btn2.addEventListener("click",function(){
   // alert("hi");
   var delt =confirm("Are you sute?")
   if(delt === true){
      document.write("Deleted!");
   }
   else{
      document.write("Not deleted!");
   }
})


// timingEvent:
// 1.setTimeout
// 2.setInterval

function timeOut(){
   setTimeout(()=>{
      document.write("Hello im setTimeout function!");
   },1000)
}

// timeOut()

// SetInterval:
function interVal(){
   setInterval(()=>{
      timeOut();
   },1000)
}
// interVal()

// Create a clock:

var div =document.querySelector("div");
var displayClock =document.querySelector("#clock"); 
// displayClock.innerHTML="Hello";

// window.addEventListener("load",startClock)

var clkBtn = document.querySelectorAll("button")[2].addEventListener("click",startClock)

function startClock(){
  
   const date =new Date();
   var h =date.getHours();
   var m =date.getMinutes();
   var s =date.getSeconds();
   
   if(s < 10){
      s = `0${s}`;
   }
   
   var time =`${h}:${m}:${s}`;
   displayClock.innerHTML=time;
   
   setInterval(startClock,1000)
   
   
}
// startClock()





// User registration successful:

var lastDiv =document.querySelector(".lastDiv");
var saveBtn =lastDiv.children[0];
var msg =lastDiv.children[1];


saveBtn.addEventListener("click",function(){
    msg.innerHTML="User registration successful!"; 
  setInterval(()=>{
    msg.innerHTML="";
  },3000)
})











