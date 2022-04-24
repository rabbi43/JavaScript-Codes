## [Array](#array)
## [Object](#object)
## [Iffes](#object)
## [Function](#object)

<a name="top"><br>

<a name="array">

## Array:
```js
let data = [10,20,30,40,50,60];
console.log(data)
let i = 2;
console.log(`Index of ${i} = ${data[i]}`)
// For adding items in array:
data[6] = 999;
console.log(data)
// For changing value of array items:
data[0] = 'im changed';
console.log(data)

// Array methods: pop,push,shift,unshift,sort,reverse,slice,splice,indexOf()
var friendsName = ['sakib','alamin','pahchan','showrov','pallab'];
console.log(friendsName)
friendsName.pop()
console.log(friendsName)
friendsName.push('PUSHED')
console.log(friendsName)
friendsName.shift()
console.log(friendsName)
friendsName.unshift('UNSHIFTED')
console.log(friendsName)

friendsName.sort()
console.log('Sorted...'+friendsName)

var personName = ['smith','david','john','anisul','abul','kashem'];
//personName.splice(1) //Remove all index value from 1 to end.
//console.log(personName)
personName.splice(0,3) // Remove index value of ~ (0,1,2)
console.log(personName)

// Copy/Change Value of an array:
var myFriendsInfo = ['sakib','pahchan','pallab','mumin'];
console.log(`Main array = ${myFriendsInfo}`)
let x = myFriendsInfo;
console.log(`Copied 1 array = ${x}`)
let y = myFriendsInfo.slice(0,3);
console.log(`Copied 2 array = ${y}`)
y[0] = 'rabbi';
console.log(y)

// Nested array:
var info = ['john','smith',['abul','kashem']];
console.log(info)
console.log(info[2][0]) // Return abul.

// Object inside an array:
{
 let data = [
	'smith',
	20,
	'java',
	{
	name:'sakib',
	age : 20,
	gpa : 4.25,
	}
     ];
 console.log(data)
 console.log(data[3])
 console.log(data[3].name)
 console.log(data[3].age)
 console.log(data[3].gpa)
}

// ðŸ¤–Complex Data StructureðŸ¤– :
{
  const fakeData = ['smith','Natalia','Roberto','james','george',{
	name : 'carlos',
	age : 29,
	id : 111,
	lang : ['php','javaScript','python',{ details : 'These all are programming languages...'}],
  }];

  console.log(fakeData)
  console.log(fakeData[5].lang[0]) // Output should be php.
  console.log(fakeData[5].lang[3].details)

}

```

[**⬆️ Back to Top ⬆️**](#top)



