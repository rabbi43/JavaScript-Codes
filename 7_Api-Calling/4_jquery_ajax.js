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

const makeRequest = async (url,method,data) =>{
   const result = await $.ajax({
      url : url,
      method : method,
      data : data,
   });
   //document.write(result);
   return result;
   // console.log(result)
}



const sendData =()=>{
   makeRequest("https://jsonplaceholder.typicode.com/posts/","POST",{
    title: 'foo',
    body: 'bar',
    userId: 1,
   })
   .then((res)=>console.log(res))
}
sendData()

const getData = () => {
   makeRequest("https://jsonplaceholder.typicode.com/posts/1","GET")
   // .then((res)=>console.log(res))
}

//getData()
















