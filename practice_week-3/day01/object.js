//Objects in Javascript

//Object is like a containers that hold data and functionality, similar to real-world objects like cars, houses, or may be a record about anything.

//Creating Objects in Javascript

//Ex-1
let person = {
    first_name:'Virat',
    last_name:'Kohli'
};
//Ex-2
let student_record = {
    stud_name:'Isha',
    stud_course:'B.Tech',
};

// Calling object parameters using two methods 

//1.Dot(.) notation
console.log(person.first_name);
console.log(student_record.stud_course);

//2. Array bracket[] notation
console.log(person['last_name']);

//Different ways used in object modification

//1. Undefined object
console.log(person.age); //Output - Undefined

//2. To modify name
person.first_name='Rohit';
//console.log(person.first_name);

//3. To delete a property
delete person.last_name;

//4. To add new property age
person.last_name='Sharma';
person.age = 35;

//5. To view all property at once
console.log(person);

//6. To check whether a property is in object or not
console.log('height' in person); //False

//7. To get all the keys along with its value
for(let key in person){
    console.log(key +": "+person[key]);
}

//Methods in Object

//1.Using anonymous function
person.sayHello=function(){
    console.log('Hello!');
}
person.sayHello();

//2.Normal function equating to object function
function greet(){
    console.log('Welcome!');
}
person.sayHello=greet;
person.sayHello;

//3. Creating function in object itself while declaring the object's parameters
let fruit={
    fruit_name:'Apple',
    fruit_color:'Red',
    sayfruit: function(){   //We can also create function with a simple syntax in this line as: sayfruit(){
        console.log( this.fruit_name +' is '+ this.fruit_color +' in color.');
    }
};
fruit.sayfruit();
