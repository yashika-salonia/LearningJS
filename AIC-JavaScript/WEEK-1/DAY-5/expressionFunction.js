//Used to define a function inside an expression
//Expression function can also be expressed with arrow function

//Division function
let div=(x,y)=>{
    let z=x/y;
    return z;
};
console.log("Division of two digits: "+ div(91,7));

//Using name input from the user using function
function userip(call){
    let name=prompt('Enter your name: ');
    call(name);
}
userip(function(name){
    console.log('Welcome',name);
});