//6. Take positive integer input and tell if it is a three-digit number or not

    let int=parseInt(prompt('Enter a positive integer to check if it is 3 digit number'));
    function three_digit(){
        if(int>=100 && int<=999){
            return 'The entered integer is a three digit no i.e.: '+int;
        }
        else{
            return 'The entered integer is not a three digit number';
        }
    }console.log(three_digit(int));

//7. Take positive integer input and tell if it is divisible by 5 and 3.

    let pos=parseInt(prompt('Enter a positive integer to check its divisibility by 3 and 5'));
    function div_by3_5(){
        if(pos%5==0 && pos%3==0){
            return 'The number is divisible by 5 and 3';
        }
        else{
            return 'The number is not divisible by 5 and 3';   
        }
    }console.log(div_by3_5(pos));

//8. Take positive integer input and tell if it is divisible by 5 or 3 but not divisible by 15.

    let a=parseInt(prompt('Enter a positive integer to check if it is divisible by 3 or 5 but not by 15'));
    function div(){
        if(a%5==0 && a%15 != 0){
            return 'The number is divisible by 5 but not by 15';
        }
        else if(a%3==0 && a%15 != 0){
            return 'The number is divisible by 3 but not by 15';
        }
        else{
            return 'The number is neither divisible by 5 nor by 3';   
        }
    }console.log(div(a));

//9. Take positive integer input and tell if it is divisible by 5 or 3

    let b=parseInt(prompt('Enter a positive integer to check if it is divisible by 3 or 5'));
    function divby5_3(){
        if(b%5==0){
            return 'The number is divisible by 5 but not by 3';
        }
        else if(b%3==0){
            return 'The number is divisible by 3 but not by 5';
        }
        else{
            return 'The number is neither divisible by 5 nor by 3';   
        }
    }console.log(divby5_3(b)); 

//10. Take 3 positive integers input and print the greatest of them.

    let n1=parseInt(prompt('Enter 1st number:'));
    let n2=parseInt(prompt('Enter 2nd number:'));
    let n3=parseInt(prompt('Enter 3rd number: '));
    function num_3(){
        if(n1>n2 && n1>n3){
            return 'The greatest number out of three is number 1: '+n1;
        }
        else if(n2>n1 && n2>n3){
            return 'The greatest number out of three is number 2: '+n2;
        }
        else if(n3>n1 && n3>n2){
            return 'The greatest number out of three is number 3: '+n3;
        }
        else{
            return 'Invalid no or some numbers may be same';
        }

    }console.log(num_3(n1,n2,n3));

//11. Any year is input through the keyboard. Write a program to determine whether the year is a leap year or not. (Considering leap year occurs after every 4 years).

    let year=prompt('Enter the year:');
    function leap_year_or_not(){
        if( year%4 == 0 && year%100 == 0){
            return year + ' is a leap year';
        } 
        else{
            return year + ' is not a leap year';
        }
    }console.log(leap_year_or_not(year));

//Ques on using loops in functions 
//1. Print “Alpha Intern” 5 times using loop

    console.log('Printing Alpha Intern 5 times:');
    function loop_print(){
        for(let i=1;i<6;i++){
            console.log(`${i}. Alpha Intern`);
        }
    }loop_print();

//2. Print numbers from 1 to 100 using loop

    console.log('Numbers from 1 to 100:');
    function count_1_100(){
        for(let i=1;i<=100;i++){
            console.log(i);
        }
    }count_1_100();

//3. Print all even number from between 1 to 100 using loop

    console.log('Even numbers from 1 to 100:');
    function even_1_100(){
        for(let i=0;i<=100;i=i+2){
            console.log(i);
        }
    }even_1_100();    

//4. Print the table of 19 using loop

    console.log('Table of 19:');
    function table_19(){
        let table=19;
        for(let t=1;t<=10;t++){
            console.log (`${table} * ${t} = `+(table*t));
        }
    }table_19();

//5. Print all numbers from 1 to 100 that are divisible by 3

    console.log('Multiple of 3 between 1 to 100:');
    function multiple_3(){
        for(let i=0;i<=100;i++){
            if(i%3==0){
            console.log(i);
            }
        }
    }multiple_3();  

//6. WAP to check weather a number is prime or not.

    function prime_or_not(x){
        if(x<2){
            return 'Neither prime,Enter a no>=2'
        }
        for(let i=2;i<x;i++){
            if(x%i==0){
                return 'Not a prime no';
            }
        }
        return 'It is a prime no';
    }console.log(prime_or_not(1));