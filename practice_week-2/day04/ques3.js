//Ques on loops
//1. Print “Alpha Intern” 5 times using loop
    
    let i=1;
        console.log('Printing Alpha Intern 5 times');
    while(i<6){
        console.log(`${i} Alpha Intern`);
        //document.write('<br>'+`${i} Alpha Intern`);
        i++;
    }

//2. Print numbers from 1 to 100 using loop

    let x=1;
        console.log('Numbers from 1 to 100');
    while(x<=100){
        console.log(x);
        x++;
    }

//3. Print all even number from between 1 to 100 using loop

    let even=0;
        console.log('Even numbers between 1 to 100');
    while(even<=100){
        console.log(even);
        even+=2;
    }

//4. Print the table of 19 using loop

    let table=19;
    let t=1;
        document.write('Table of 19');
    while(t<=10){
        document.write('<br>'+`${table} * ${t} = `+(table*t));
        t++;
    }

//5. Print all numbers from 1 to 100 that are divisible by 3

    let num;
        console.log('Numbers divisible by 3');
    for(num=1;num<=100;num++){
        if(num%3==0){        
            console.log(num);
        }
    }

//6. WAP to check weather a number is prime or not.

    var n=prompt('Enter a number');
    var p;
    var isPrime=true;
        console.log('Checking if a number is prime or not');
    for(p=2;p<n;p++){
        if(n%p===0){
            isPrime=false;
            break;
        }
    }
        if(isPrime){
            console.log(`${n} is a prime number`);
        }
        else{
            console.log(`${n} is not a prime number`);
        }