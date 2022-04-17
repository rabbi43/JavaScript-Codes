const makeRequest = (m,u,d)=>{
   const xhr = new XMLHttpRequest();
   xhr.open(m,u)
   
   xhr.setRequestHeader('Content-Type','application/json')
   
   xhr.onload=()=>{
      var x = xhr.response;
      console.log(JSON.parse(x))
   }
   xhr.send(JSON.stringify(d))
}


/*const getData =()=>{
   makeRequest('GET','https://jsonplaceholder.typicode.com/posts')
}
// getData()


const sendData = ()=>{
   makeRequest('POST','https://jsonplaceholder.typicode.com/posts',{
      title: 'foo',
      body: 'bar',
      userId: 1,
   })
   
   
}
sendData()*/

/*const updateData =()=>{
   makeRequest('PUT','https://jsonplaceholder.typicode.com/posts/1',{
      id: 1,
      title: 'im foo',
      body: 'im bar',
      userId: 1,
      
   })   
}

updateData()

*/
/*const updateSingleData =()=>{
   makeRequest('PATCH','https://jsonplaceholder.typicode.com/posts/1',{
      
      title: 'im changed',
      
      
   })   
}

updateSingleData()

*/

const deleteData =()=>{
   makeRequest('DELETE','https://jsonplaceholder.typicode.com/posts/1')  
}
deleteData()


