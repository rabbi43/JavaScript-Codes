const data = (x)=>{
   var value =x*x;
   console.log(value)
}
//data(5)

//var y = data(5);

const high =(num,callback)=>{
   callback(num)
}

high(6,data)
