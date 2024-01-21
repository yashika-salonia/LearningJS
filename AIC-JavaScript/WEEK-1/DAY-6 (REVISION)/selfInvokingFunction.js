//Self invoked function
//The function which is called by itself just after it is defined.

//Syntax of self invoked function
//(function(){
    //code to be executed
//})

(function (){
    console.log('Hello world!');
})();

let text="This function is immediately invoked.";
(function(){
    alert(text);
})();