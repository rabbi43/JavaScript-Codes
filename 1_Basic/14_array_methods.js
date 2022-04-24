// JavaScript Document
// 14 April,2022
// author : fazle rabbi
// all codes written by quoda code editor (mod/premium) apk using my Android Phone🤩
// facebook: cutt.ly/frfb



// methods name:
// pop,push,shift,unshift,splice

var data =["sakib","alamin","pahchan"];
console.log(data)
data.pop()
console.log(data)
data.push("pallab")
console.log(data)

// 24 April 2022
var fName = ['sakib','alamin','pahchan'];
console.log(fName)
fName[1]='rabbi';
console.log(fName)
console.log(fName.length)
console.log(fName['length'])                          for(let x=0;x<fName.length;x++){
  console.log(`Name = ${fName[x]}`)
}
console.log(`Index of sakib = ${fName.indexOf('sakib'>
var data = [1,2,3,4,5,6];
console.log('First output = '+data)
var splicedData =data.splice(3);
console.log('Second output = '+data)
console.log('New Data = '+splicedData)

// Copy array:
var marks = [20,30,40,50,60,70];
console.log('Marks = '+marks)
var copiedMarks = marks.slice(0,3);
//var copiedMarks = marks;
copiedMarks[0]=200;
console.log('Copied marks are '+copiedMarks)
//console.log('Marks = '+marks)
console.log(marks===copiedMarks)





