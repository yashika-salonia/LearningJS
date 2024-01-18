//Function- sum 
// Parameters are:- a, b and c
function sum(a,b,c){ 
    return a+b+c;
}
//Arguments are:- 25, 46 and 99
let s= sum(25,46,99); 
console.log("The value of sum is " + s);

//If only 1 parameter is defined in argument
function prod(x, y=7){
    console.log("Product is " + x*y);
}
prod(5);

