//Solving ques using functions

//1. Store two integers in two variables x and y. Print the sum of the two

    function sum(x,y){
        return x+y;
    }
    console.log('Sum of two numbers : ',sum(20,14));

//2. Store two integers in two variables x and y. Print the product of the two

    function prod(x,y){
        return p=x*y;
    }prod(20,4);
    console.log('Product of two numbers : ',p);

//3. Calculate the average of 5 subjects

    let avg = (a,b,c,d,e) => {
        return ((a+b+c+d+e)/5);
    };
    console.log('Average of 5 subjects : ',avg(12,12,15,16,17));

//4. Calculate Area of a Circle, square, rectangle, triangle

    //Area of circle
    function ar_circle(){
        let rad=12;
        var pi=3.14;
        return pi*(rad**2);
    }
    console.log("Area of circle : ", ar_circle());
    
    //Area of square
    function ar_sq(){
        let side=12;
        return side**2;
    }
    console.log("Area of square : ", ar_sq());
    
    //Area of rectangle
    function ar_rect(){
        let l=13;
        let b=5;
        return l*b;
    }
    console.log("Area of rectangle : ", ar_rect());

    //Area of triangle
    function ar_tri(){
        let h=8;
        let b=16;
        return (1/2)*b*h;
    }
    console.log("Area of triangle : ", ar_tri());

//5. Calculate the simple interest

    function simple_int(){
        let p=250;
        let r=43;
        let t=25;
        return (p*r*t)/100;
    }
    console.log("Simple Interest : ",simple_int());

//6. Calculate the circumference of circle

    //Circumference of circle
    function cir_circle(){
        let rad=15;
        var pi=3.14;
        return 2*pi*rad;
    }
    console.log("Circumference of circle : ", cir_circle());

//7. Write a program to perform all the arithmetic operations [except increment and decrement operators] of JavaScript of any two numbers stored in the variables num1 and num2. Also, print the results to the console

    function s_m(){
        let num1=12;
        let num2=24;
        return num1+num2;
    }
    console.log('Sum of two numbers : ',s_m());
    
    function pr_d(){
        let num1=12;
        let num2=24;
        return num1*num2;
    }
    console.log('Product of two numbers : ',pr_d());

    function sub(){
        let num1=12;
        let num2=24;
        return num1-num2;
    }
    console.log('Subtraction of two numbers : ',sub());

    function div(){
        let num1=12;
        let num2=24;
        return num1/num2;
    }
    console.log('Division of two numbers : ',div());

    function mod(){
        let num1=12;
        let num2=24;
        return num1%num2;
    }
    console.log('Modulus of two numbers : ',mod());

//8. Write a program to demonstrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified

    let bool= function(no1,no2){
        return (no1<no2);
    };
    console.log('Output1 : ',bool(2,4));
    console.log('Output2 : ',bool(4,3));
    