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


/*const makeRequest =()=>{
   
   return new Promise((resolve,reject)=>{
      const xhr =new XMLHttpRequest();
      xhr.open('GET','https://jsonplaceholder.typicode.com/posts/1')
      xhr.setRequestHeader('Content-Type','application/json')
      xhr.onload=()=>{
         // console.log(xhr.statusText)
      let x = xhr.response;
      console.log(JSON.parse(x))
      }
      xhr.onerror=()=>{
         console.log(new Error("Error are happend!"))
      }
      xhr.send()      
    })
}

const getData = ()=>{
   makeRequest()
   .then((res)=>console.log(res))
   
}
getData()

*/

// Getting a resourse:
/*fetch('https://jsonplaceholder.typicode.com/posts/1')
.then((res)=>res.json())
.then((res)=>console.log(res))
*/
// Creating a resourse:

/*fetch('https://jsonplaceholder.typicode.com/posts',{
   method : 'POST',
   body : JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
   }),
   headers: { 
   'Content-type': 'application/json; charset=UTF-8',
   },
})
.then((res)=>res.json())
.then((res)=>console.log(res))

*/



// Getting a resourse:

fetch('https://jsonplaceholder.typicode.com/posts',{
   method : 'POST',
   body : JSON.stringify({
      title: 'foo',
      body: 'bar',
      userId: 1,
   }),
   headers : {
     'Content-type' : 'application/json' 
   },
})
.then((res)=>res.json())
.then((res)=>console.log(res))












