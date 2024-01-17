//For loop
let i=0;
for(i=0;i<=3;i++){
    console.log(i);
}

let j=5;
for(j=5;j>=1;j--){
    console.log(j);
}

// let index=0;
//Old method
let friends =["Rohan","John","Raman"]
for(index=0;index<friends.length;index++){
        console.log("hello"+ friends[index]);
    }
//Quick method
//  friends.forEach(function f(element){
//  console.log("hello", + element);
// });

//ForIn loop
let emp={ name:"Ram", age:9}
for(key in emp){
    console.log(`The ${key} of emp is ${emp[key]}`);
}