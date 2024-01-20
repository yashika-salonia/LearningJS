//Anonymous function are function that does not have any name.
//These functions are stored in variables

//Anonymous function
let show=function(){
    console.log("This is anonymous function");
};
show();

//Sum function
const sum=function(a,b){
    return "The sum of two digits is: "+a+b;
}
console.log(sum(78,43));

//Immediate invoked function
//() creates a function
(function(){
    console.log('This function is immediately executed')
})();
//() calls the function immediately
