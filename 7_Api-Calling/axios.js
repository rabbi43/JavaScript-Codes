const axios = require('axios');

const mkR =async(config) => {
  return await axios(config)
};

// Getting a resourse:
const getData =() => {
  mkR('https://jsonplaceholder.typicode.com/posts/1')
  .then((res) => console.log(res.data))
  .catch((err) => console.log(err))
};
//getData()

// Creating a resourse:
const sendData =() => {
  mkR({
    url : 'https://jsonplaceholder.typicode.com/posts',
    method : 'post',
    data : JSON.stringify({
     title : 'foo',
     body: 'bar',                                               userId: 1,
   }),
  })
   .then((res) => console.log(res.data))
   .catch((err) => console.log(err))
};
//sendData()


// Updating a resourse:

const updateData = () => {
   mkR({
   url : 'https://jsonplaceholder.typicode.com/posts/1',
   method : 'patch',
   data : JSON.stringify({
    body : 'im updateD......',
   }),
 })
  .then((res) => console.log(res))
  .catch((err) => console.log(err))
}
updateData()
