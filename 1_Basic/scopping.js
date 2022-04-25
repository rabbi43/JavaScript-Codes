//25 April 2022
var x = 10;
//console.log(x)

function global(){
  var x = 10;
  var y = 20;
  var result = x+y;
  console.log(result)

   function local(){
    console.log(`Hi there,`)
   }
   //local();

    var data = {
     name : 'smith',
     age : 20,
     lang : ['C','Java','Python']
    };
    console.log(data.lang[2])
}
//global()

// Lexical Scoping:
function parentFunc(){
    console.log(`im inside parent`);
    var data =['c','java'];
    function childFunc(){
        console.log(`im inside child`)
        console.log(`Lexical = ${data}`)
    }
    var x = 1000;
    console.log(x)
    childFunc()

}
parentFunc()

// Closures: কিন্তু এখানে আরো মজার ব্যাপার হচ্ছে ইভেন আমরা যদি প্যারেন্ট ফাংশনটা রিটার্ন করে ফেলি তারপরেও আমরা চাইল্ড ফাংশন থেকে প্যারেন্ট ফাংশনের ভ্যারিয়েবল, ফাংশন অথবা অবজেক্ট অ্যাক্সেস করতে পারবো। কারণ এগুলো রিটার্ন হওয়ার পরও মেমোরী তে থেকে যায়। আর এটাই হচ্ছে ক্লোজারস।
function closuresDemo(){
   var x = 10;
   return function(){
    var y = 20;
    var r = x+y;
    console.log(r)
   }
   
}
closuresDemo()();



function test(){
    var x = 10;
    return function(){
     var y = 30;
     var result = x+y;
     console.log(result)
    }
    
}
test()();


