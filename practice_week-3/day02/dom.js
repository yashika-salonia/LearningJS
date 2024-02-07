//DOM (Document Object Model)
/* It is an application programming interface (API) for manipulating HTML documents.
i.e. it helps in adding,removing, and modifying parts of the document/HTML
When webpage is loaded, the browser creates  DOM of the page*/

//Selecting an element by id
let elm=document.getElementById("firstList");
console.log(elm);

//Modifying list element
elm.innerHTML="<p>Hello</p>";

//Selecting an element by class 
let elmclass = document.getElementsByClassName("list");
//console.log(clsEl.length);

//Modifying list element
for(let i=0; i<elmclass.length; i++){
    elmclass[i].innerHTML="<p>World</p>";
}