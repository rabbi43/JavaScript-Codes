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

function highestRunScorer(playersInfo){
	var highestScorer = playersInfo[0][0];
 var highestScore = playersInfo[0][1];
 
 for(var x=1;x<playersInfo.length;x++){
 
 if(highestScore < playersInfo[x][1]){
 	 highestScore = playersInfo[x][1];
 	 highestScorer = playersInfo[x][0];
 }
 
}
  return highestScorer;
}

// 2d array 
var names = [
// 0-3 row
// 0-1 column
   ["sakib",10],
   ["alamin",403],
   ["pahchan",87],
   ["rabbi",49]

];
var p = highestRunScorer(names);
document.write(p);

