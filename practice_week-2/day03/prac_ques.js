//5. If cost price and selling price of an item is input through the keyboard, write a program to determine whether the seller has made profit or incurred loss. Also determine how much profit he made or loss he incurred

    let cp=parseFloat(prompt("Enter the cost price: "));
    let sp=parseFloat(prompt("Enter the selling price: ")); 
    if(cp>sp){
        console.log('Have a loss of '+ (cp-sp));
    }
    else if(cp<sp){
        console.log('Have a profit of '+ (sp-cp));
    }
    else if(cp==sp){
        console.log('Selling price is equal to cost price');
    }
    else{
        console.log('Enter a valid price');
    }

//6. Take positive integer input and tell if it is a three-digit number or not

    let int=parseInt(prompt('Enter a positive integer to check if it is 3 digit number'));
    if(int>=100 && int<=999){
        console.log('The entered integer is a three digit no i.e.: '+int);
    }
    else{
        console.log('The entered integer is not a three digit number.');
    }

//7. Take positive integer input and tell if it is divisible by 5 and 3.

    let pos=parseInt(prompt('Enter a positive integer to check its divisibility by 3 and 5'));
    if(pos%5==0 && pos%3==0){
        console.log('The number is divisible by 5 and 3');
    }
    else{
        console.log('The number is not divisible by 5 and 3');   
    }

//8. Take positive integer input and tell if it is divisible by 5 or 3 but not divisible by 15.

    let a=parseInt(prompt('Enter a positive integer to check if it is divisible by 3 or 5 but not by 15'));
    if(a%5==0 && a%15 != 0){
        console.log('The number is divisible by 5 but not by 15');
    }
    else if(a%3==0 && a%15 != 0){
        console.log('The number is divisible by 3 but not by 15');
    }
    else{
        console.log('The number is neither divisible by 5 nor by 3');   
    }

//9. Take positive integer input and tell if it is divisible by 5 or 3.

    let b=parseInt(prompt('Enter a positive integer to check if it is divisible by 3 or 5'));
    if(b%5==0){
        console.log('The number is divisible by 5 but not by 3');
    }
    else if(b%3==0){
        console.log('The number is divisible by 3 but not by 5');
    }
    else{
        console.log('The number is neither divisible by 5 nor by 3');   
    }

//10. Take 3 positive integers input and print the greatest of them.

    let n1=parseInt(prompt('Enter 1st number:'));
    let n2=parseInt(prompt('Enter 2nd number:'));
    let n3=parseInt(prompt('Enter 3rd number: '));
    if(n1>n2 && n1>n3){
        console.log('The greatest number out of three is number 1: '+n1);
    }
    else if(n2>n1 && n2>n3){
        console.log('The greatest number out of three is number 2: '+n2);
    }
    else{
        console.log('The greatest number out of three is number 3: '+n3);
    }
    
//11. Any year is input through the keyboard. Write a program to determine whether the year is a leap year or not. (Considering leap year occurs after every 4 years).

    let year=parseInt(prompt('Enter the year:'));
    if((year%4 == 0 && year%100 !== 0) || (year%400 == 0)){
        console.log(year + ' is a leap year');
    } 
    else{
        console.log(year + ' is not a leap year');
    }  
