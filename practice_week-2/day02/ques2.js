//1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop

    let light='red';
    if(light == 'red'){
        console.log("The vehicle must stop");
    }
    else if(light === 'yellow'){
        console.log("The vehicle must wait");
    }
    else{
        console.log("The vehicle can go");
    }

//2. Write a program to print the largest of 2 numbers. And 4 numbers.

  //2 numbers
    let x=2;
    let y=5;
    if(x>y){
        console.log("x is larger i.e.: "+x);
    }
    else if(x<y){
        console.log("y is larger i.e.: "+y);
    }
    else if(x==y){
        console.log("Both are equal");
    }
    else{
        console.log("Invalid numbers");
    }
  //4 numbers
    let no1=2;
    let no2=19;
    let no3=3;
    let no4=9;
    if(no1>no2 && no1>no3 && no1>no4){
        console.log("No1 is the largest i.e.: "+ no1);
    }
    else if(no1<no2 && no2>no3 && no2>no4){
        console.log("No2 is the largest i.e.: "+ no2);
    }
    else if(no3>no2 && no3>no1 && no3>no4){
        console.log("No3 is the largest i.e.: "+ no3);
    }
    else if(no4>no1 && no4>no2 && no4>no3){
        console.log("No4 is the largest i.e.: "+ no4);
    }
    else{
        console.log("Invalid numbers");
    }

//3. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend

    let day='Monday';
    if(day =='Monday'){
        console.log('Number of days until weekend:5');
    }
    else if(day ==='Tuesday'){
        console.log('Number of days until weekend:4');
    }
    else if(day ==='Wednesday'){
        console.log('Number of days until weekend:3');
    }
    else if(day ==='Thursady'){
        console.log('Number of days until weekend:2');
    }
    else if(day =='Friday'){
        console.log('Number of days until weekend:1');
    }
    else if(day =='Saturday'){
        console.log('From today the weekand starts');
    }
    else{
        console.log('Invalid day of weekend');
    }

//4. WAP to print even and odd number

    let number = prompt("Enter a number: ");
    if(number%2==0){
        console.log('The number is even');
    }
    else{
        console.log('The number is odd');
    }