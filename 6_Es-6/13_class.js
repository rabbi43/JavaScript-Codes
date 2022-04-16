// JavaScript Document
class student{
   constructor(id,name){
      this.id = id;
      this.name = name;
   }
   
   set studentName(name){
      this.name = name;
   }
   
   get studentInfo(){
      return this.name+" "+this.id;
   }
   
}
var s1 =new student(100,"smith");
console.log(s1)

s1.studentName="david";
console.log(s1.name)




