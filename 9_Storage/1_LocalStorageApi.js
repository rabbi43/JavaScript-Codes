/*JavaScript Documentdocument,localStorage,write,getElementById,querySelectorfor,var,let,const,add,style,addEventListener,classList,parentElementchildren,nextElementSiblongpreviousElementSiblingquerySelectorAll,getElementsByTagNamecreateElement,createTextNode,appendChildremoveChild,insertBefore,functioninnerHTML,Math,sqrt,pow,random,floor,ceilmax,date new Date(),object,array,date.get FullYear,Month,Hours,MinutesDay,constractor,pop,push,shift,unshiftsplice,slice,sort,break,continue,while,doif,else if,else,switch,case,default,Number,parseInt,parseFloat,toString()toFixed,toPrecision,length,charAt,toUppercase,concat,inside,Literals,name,Names,names,age,roll,concat,StudentsInfo,Students,student,info,var,let,const,return,console,log,fetch,axios,method,ajax,Xml http requestevent:onload(),onerror()property: response,responseText,responseType,responseUrl,status,statusTextfunction: open(),send(),setRequestHeader()methods:get,post,put,patch,deleteAPI: https://jsonplaceholder.typicode.com/posts,setItem()*/

//console.log(localStorage)
// setItem,getItem,removeItem
// Storing data into localStorage:


//localStorage.setItem("username","Adams Smith")
//localStorage.setItem("password","111000")
// Getting data from localStorage:
//const uN = localStorage.getItem("username");
//const pW = localStorage.getItem("password")
//console.log(`Username = ${uN} and Password = ${pW}`)

// Update data:
//localStorage.setItem("username","Adams")
//localStorage.setItem("password","111000")


// Removing/Deleting data:
//localStorage.removeItem("username")
//const uND =localStorage.getItem("username");
//console.log(uND)


var countries =["bangladesh","afganistan","pakistan","palestain"]
localStorage.setItem("countries",JSON.stringify(countries))
const uName = JSON.parse(localStorage.getItem("countries"))
console.log(uName)











