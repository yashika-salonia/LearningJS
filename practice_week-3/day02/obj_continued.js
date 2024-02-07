//Date object

let x=new Date(2018,9,20,8,29); 
//(year,month,date,hour,min,sec,milisec) 
//min parametr needed is year and month
console.log(x);

//Functions on date

//1. Get Time in milisecond
console.log(x.getTime());

//2.Get Year
console.log(x.getFullYear());
//similarly we can get hour, min,date,day(sunday-0 upto sat-6)

//Set new data
x.setFullYear(2020);
//similarly we can change hour, min,date,day 

//Change date by adding 50  days
let y=new Date(2018,9,20,8,29);
y.setDate(x.getDate()+50);
console.log(y);

//Comparing two dates
if(x>y){
    console.log("x is earlier date");
}
else if(y>x){
    console.log("y is earlier date");
}
else{
    console.log("x and y is same date");
}

//Creating objects with new keyword
let person=new Object();
person.name='yashika';
person.age=26;
console.log(person.name.toUpperCase());

//Object constructor for multiple objects with same format
function Student(first,age,cls){
    this.firstName=first;
    this.age=age;
    this.class=cls;
}
var student1=new Student("harsh",12,6);
var student2=new Student("amit",13,7);
var student3=new Student("ajay",9,4);

//Adding new property in student1
student1.grade='A';

//Adding in object constructor using protocols
Student.prototype.nationality='indian';

console.log(student1);
console.log(student2);
console.log(student3);

//Nested object
var user={
    id:101,
    email:'abc@gmail.com',
    personalInfo:{
        name:'abc',
        add:{
            street:'4',
            city:'delhi',
            country:'india',
        }
    }
};
console.log(user.personalInfo.add);

//Hoisting in Javascript

//Move only the declaration part at the top of the file accoring to current scope
//var on hoisting gives undefined but let and const give initializition error on hoisting

