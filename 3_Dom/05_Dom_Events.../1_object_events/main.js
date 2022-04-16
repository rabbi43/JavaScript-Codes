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
for,var,let,const,add,style,addEventListener,classList,parentElement
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

// DOM EVENTS:
/*
1.object event
2.mouse event
3.keyboard event
3.clipboard event
4.focus event
5.drag & drop event
*/

// Object Event:
//  click,change,submit,media,load,unload,scroll,resize,toggle

// <input /> - text, number, password, email, color,  radio, checkbox, search, time, date, datetime, week, month, url, tel, file,
// <select>,
// <textarea

// click event
const body = document.querySelector("body")
for(var i=0;i<3;i++){
   const button = document.querySelectorAll("button")[i].addEventListener("click",function(){
   // alert("hi");
   body.style.background="pink";
  });
}


// change event:

// Use with input:
const input =document.querySelector("input").addEventListener("change",function(e){
   var h1 =document.querySelector("h1");
   // h1.innerHTML=e;
   // h1.innerHTML=e.type;
   // h1.innerHTML=e.target;
   // h1.innerHTML=e.target.value;
   // h1.innerHTML=e.target.id;
   // h1.innerHTML=e.target.className;
   
});


// Use with checkbox:
const ckbx =document.querySelectorAll("input[name=program]");
Array.from(ckbx).map((x)=>{
   x.addEventListener("change",function(e){
      if(e.target.checked){
         var h1 =document.querySelector("h1");
         h1.innerHTML=e.target.value;
      }      
   })
})

// Use with select:
const department = document.querySelector(".department").addEventListener("change",function(e){
    var h1 =document.querySelector("h1");
    h1.innerHTML=e.target.value;
})



// Submit Event:
const name = document.querySelector("input[name=name]")
const phone = document.querySelector("input[name=phone]")
const form = document.querySelector("form").addEventListener("submit",function(e){
   // alert("hi");
   e.preventDefault();
   var h1 =document.querySelector("h1");
   /*h1.innerHTML=name.value;
   h1.innerHTML=phone.value;*/
   
   /*const userInfo ={
      name : name.value,
      phone : phone.value,
   }*/
   
   const userInfo =[name.value,phone.value]
   
   h1.innerHTML=userInfo;
   name.value = "";
   phone.value="";
});


// Media Event:
//  canplay,play,playing,pause,progress,waiting,volumechange,ended
try{
   const video =document.querySelector("video").addEventListener("play",function(){
   alert("Video will be play!");
});

video.addEventListener("ended",function(){
   alert("You are changing the volume!");
})


video.addEventListener("ended",function(){
   alert("Thanks for watching the video!");
})

}catch(err){
   alert("Something went wrong!");
}


// Other Object Events:

// load, unload,
// scroll
// resize
// toggle - details

// window.addEventListener("load", function () {
//   console.log("load");
// });
// window.addEventListener("unload", function () {
//   console.log("unload");
// });

// window.addEventListener("scroll", function () {
//   console.log("scroll");
// });

// window.addEventListener("resize", function () {
//   const width = window.outerWidth;
//   const height = window.outerHeight;
//   console.log(`height: ${height}, width: ${width}`);
// });


const details =document.querySelector("details");
details.addEventListener("toggle",function(e){
   alert("You have clicked on details!")
})

var p =document.querySelector("p");
p.style.color="red";
p.style.textAlign="center"; 








