/*JavaScript Document,document,write,getElementById,querySelectorfor,var,let,const,add,style,addEventListener,classList,parentElementchildren,nextElementSiblongpreviousElementSiblingquerySelectorAll,getElementsByTagNamecreateElement,createTextNode,appendChildremoveChild,insertBefore,function,innerHTML,Math,sqrt,pow,random,floor,ceilmax,date new Date(),object,array,date.get FullYear,Month,Hours,MinutesDay,constractor,pop,push,shift,unshiftsplice,slice,sort,break,continue,while,doif,else if,else,switch,case,default,Number,parseInt,parseFloat,toString()toFixed,toPrecision,length,charAt,toUppercase,concat,inside,Literals,name,Names,names,age,roll,concat,StudentsInfo,Students,student,info,var,let,const,return,console,log,fetch,axios,method,ajax,Xml http requestevent:onload(),onerror()property: response,responseText,responseType,responseUrl,status,statusTextfunction: open(),send(),setRequestHeader()methods:get,post,put,patch,deleteAPI: https://jsonplaceholder.typicode.com/posts,localStorage,setItem(),getItem,sessionStorage*/





const data = require('./fbid.json');

var btnDiv =document.querySelector("#btnDiv");
var btn1 =btnDiv.children[0];
var btn2 =btnDiv.children[1];
var btn3 =btnDiv.children[2];
var showData =document.querySelector("pre");
//btn1.innerHTML="hi";



btn1.addEventListener("click",function(){
   // alert("hi");
   showData.innerHTML=data.hackedData[0];
   
})









