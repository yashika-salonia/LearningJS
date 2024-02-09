//Events in Javascript

//1. onclick attribute
function changeText(id){
    id.innerHTML="Oops!"
}

function displayDate(){
    document.getElementById("demo").innerHTML=Date();
}

//2. oninput attribute
function upperCase() {
    const x = document.getElementById("name");
    x.value = x.value.toUpperCase();
  }

//3. onchenge attribute
function upperCase() {
    const x = document.getElementById("fname");
    x.value = x.value.toUpperCase();
  }

//4. onmouseover attribute
function mOver(obj) {
    obj.innerHTML = "Text changes"
  }
  
  function mOut(obj) {
    obj.innerHTML = "Mouse Over Me"
  }

//Event Listner
document.getElementById("myBtn").addEventListener("click", function() {
    alert("Hello World!");
});

//Higher Order Functions (HOF)
//A function that accepts functions as parameters or returns a function.

//Function returning another function

//Ex-1 
function add(a,b){
    return a+b;
}
const addtwo=add(6,4);
console.log(addtwo); //5

//Ex-2
const msg=function (message){
    return function(m){
        console.log(`Hello ${message}, ${m}`);
    }
}
const name = msg('World');
name("This is an example");

//Call back
function name_fun(name){
    console.log("Hello, we welcomes "+name);
}
setTimeout(name_fun,3000,"You");

//Set timeout
function myfun(){
    console.log("hello world");
}
setTimeout(myfun,4000); //runs the function after 4 seconds

//Set interval
function myfun1(){
    console.log("Welcome!");
}
setInterval(myfun1,4000); //runs the function in every 4 seconds

//For each()
let num=[1,2,3,4,6];
num.forEach(num=>{
    console.log(num);
});

//Map()
let sqnum=num.map(num => num*num);
console.log(sqnum); //[1,4,9,16,25]

//Reduce()
let sum=num.reduce((acm,crt_value)=> acm+crt_value);
console.log(sum); 

//Filter()
let even=num.filter(num=> num%2 ==0);
console.log(even);

//Error Handling
//The most common way to handle errors in JavaScript is try and catch statement
//Try statements contains code to execute
//Catch statement contains the code if any error occur

//Try & catch 

//ex-1
try{
    console.log('This code is executed because there is no error');
}
catch(error){
    console.log('Error occured: ',error.message);
}

//ex-2
try{
    console.log('This code is executed because there is no error');
    throw new error('This is an error message');
}
catch(error){
    console.log('Error occured: ',error.message);
}
