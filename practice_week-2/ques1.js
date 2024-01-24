//1. Store two integers in two variables x and y. Print the sum of the two

    let x=5;
    let y=2;
    console.log(`Sum of x and y: ${x+y}`);

//2. Store two integers in two variables x and y. Print the product of the two

    console.log(`Product of x and y: ${x*y}`);

//3. Calculate the average of 5 subjects

    let eng=18;
    let math=17;
    let bee=12;
    let phy=14;
    let evs=20;
    avg=(eng+math+bee+phy+evs)/5;
    console.log("Average of 5 subjects:"+" "+avg);

//4. Calculate Area of a Circle, square, rectangle, triangle
    //Area of circle
        let rad=15;
        let pi=3.14;
        a_circle=pi*(rad**2);
        console.log("Area of circle:" + " "+ a_circle);

    //Area of square
        side=12;
        a_sq=side**2;
        console.log("Area of square:" + " "+ a_sq);
    
    //Area of rectangle
        len=20;
        breadth=15;
        a_rect=len*breadth;
        console.log("Area of rectangle:" + " "+ a_rect);

    //Area of triangle
        base=15;
        height=14;
        a_tri=(1/2)*base*height;
        console.log("Area of triangle:" + " "+ a_tri);

//5. Calculate the simple interest

    p=250;
    r=43;
    t=25;
    SI=(p*r*t)/100;
    console.log("Simple Interest:" + " "+ SI);

//6. Calculate the circumference of circle

    c_circle=2*pi*rad;
    console.log("Circumference of circle:" + " "+ c_circle);

//7. Write a program to perform all the arithmetic operations [except increment and decrement operators] of JavaScript of any two numbers stored in the variables num1 and num2. Also, print the results to the console

    num1=2;
    num2=4;
    console.log(`Addition of num1 and num2: ${num1+num2}`);  //6
    console.log(`Subtraction of num1 and num2: ${num1-num2}`);  //-2
    console.log(`Multiplication of num1 and num2: ${num1*num2}`);  //8
    console.log(`Division of num1 and num2: ${num1/num2}`);  //0.5
    console.log(`Modulus of num1 and num2: ${num1%num2}`);  //2

//8. Write a program to demonstrate the results of comparison operators. Note that both the truth and false condition for each operator must be specified

    no1=7;
    no2=3;
    console.log(no1==no2); //false
    console.log(no1===no2); //false
    console.log(no1!=no2); //true
    console.log(no1>no2); //true
    console.log(no1<no2); //false
    console.log(no1>=no2); //true
    console.log(no1<=no2); //false