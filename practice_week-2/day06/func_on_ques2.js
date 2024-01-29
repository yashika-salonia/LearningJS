//Solving questions on loop

//1. Write a program of traffic control that accepts the traffic light displayed and prints the message. If the traffic light is red print the vehicles must stop

    function traffic_light(light){
        if(light =='red'){
            return 'The vehicle must stop';
        }
        else if(light=='yellow'){
            return 'The vehicle must wait';
        }
        else{
            return 'The vehicle must go';
        }
    }console.log(traffic_light('red'));

//2. Write a program to print the largest of 2 numbers. And 4 numbers.

    //2 Numbers
    function num(a,b){
        if(a<b){
            return b;
        }
        else if(a>b){
            return a;
        }
    }console.log(num(5,12));

    //4 Numbers
    function greater(x,y,z,w){
        if(x>y && x>z && x>w){
            return x+' is the greatest';
        }
        else if(y>x && y>z && y>w){
            return y+' is the greatest';
        }
        else if(z>y && z>x && z>w){
            return z+' is the greatest';
        }
        else{
            return w+' is the greatest';
        }
    }console.log(greater(12,4,6,17));

//3. Write a program that takes in a day of the week (e.g., Monday, Tuesday, etc.) and outputs the number of days until the weekend

    let day=prompt('Enter any day of the week (e.g., Monday, Tuesday, Wednesday, Thursday, Friday, Saturday):');
    function day_of_week(){
        if(day== 'Monday'){
            return '5 days left untill weekand';
        }
        else if(day=='Tuesday'){
            return '4 days left untill weekand';
        } 
        else if(day=='Wednesday'){
            return '3 days left untill weekand';
        } 
        else if(day=='Thursday'){
            return '2 days left untill weekand';
        } 
        else if(day=='Friday'){
            return '1 days left untill weekand';
        } 
        else{
            return 'Weekand has started';
        }
    }console.log(day_of_week(day));

//4. WAP to print even and odd number

    function iseven(num){
        if(num%2==0){
            return 'Number is even';
        }
        else{
            return 'Number is odd'
        }
    }console.log(iseven(12)); //output will be even 
    console.log(iseven(7)); //output will be odd 


//5. If cost price and selling price of an item is input through the keyboard, write a program to determine whether the seller has made profit or incurred loss. Also determine how much profit he made or loss he incurred

    let cp=prompt('Enter the cost price:');
    let sp=prompt('Enter the selling price:');
    function profit_loss(){
        if(cp>sp){
            return 'Have a loss of '+ (cp-sp);
        }
        else if(cp<sp){
            return 'Have a profit of '+ (sp-cp);
        }
        else if(cp==sp){
            return 'Selling price is equal to cost price';
        }
        else{
            return 'Enter a valid price';
        }
    }console.log(profit_loss(cp,sp));

