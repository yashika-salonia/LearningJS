//Select an element by Tag Name

let elm=document.getElementsByTagName("h2");
for(let i=0;i<elm.length; i++){
    elm[i].innerHTML="Hello";
}
console.log(elm); 

//Selecting only tags included inside the div tag
let div1=document.getElementById("div1");
let elm1=div1.getElementsByTagName("h2");
for(let i=0;i<elm1.length; i++){
    elm1[i].innerHTML=`Heading ${i+1}`;
}
console.log(elm1);

//Query selector:
//Query selector is the most useful way to edit any html text using querySelector(select only one p tag with intro as class) and querySelectorAll(selects all p tags with intro as class but as it forms collecon then loop is used.)

let que= document.querySelector("p.intro");
que.innerHTML="this is js";
console.log(que);

//Traversing element
let tra=document.getElementById("list");
let prt=tra.parentElement;

//To change data inside parent html
prt.innerHTML="hello"; //1st list is coverted into a simple text 'hello'
console.log(prt);

//Selecting 1st child element of the parent tag
let chd=document.getElementById("parent");
let node=chd.lastElementChild; //similarly first child is selected by .firstElementChild
//to select all child use .children
console.log(node);

//Selecting different siblings using id in one tag 
/*
1. Previous sibling- use .previousElementSibling
2. Next sibling- use .nextElementSibling
*/

//Using innerHTML
let inner=document.getElementById("inn");
let content=inner.innerHTML; //To view the tags in that element
console.log(inner);
inner.innerHTML= "<h1> this ia a heading </h1>"; //Modifies the previous text with new text

//Append elements
let h1=document.createElement('h1');
h1.className="try"; //add class to new h1 tag
h1.id="intro1"; //add id to new h1 tag

/*let text=document.createTextNode('this is h1 tag');
h1.appendChild(text); */

//or we can simple add text with property :
h1.textContent="content added";
inner.appendChild(h1);
