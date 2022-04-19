



const makeRequest=(m,u,d)=>{
    const xhr = new XMLHttpRequest();
    xhr.open(m,u)
    xhr.setRequestHeader('Content-Type','application/json')
    xhr.onload=()=>{
    let x =xhr.response;
    console.log(JSON.parse(x))
    }
    xhr.onerror=()=>{
	console.log("Error here!")
    }
    xhr.send(JSON.stringify(d))
}
const sendData =()=>{
 makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
      title: 'foo',
      body: 'bar',
      userId: 1,
 })
}
sendData()





