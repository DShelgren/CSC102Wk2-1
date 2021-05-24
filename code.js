//Wk1-2 countdown timer should run 10....1 then blastoff

//Start function definition of startCountdown
function startCountdown() {
    //Define variable named count and assign value of 10
    var count = 10;

    //Set link and reference of count to HTML's countdownTimer
    //the countdown timer should display 10
    document.getElementById("countdownTimer").innerHTML = count;
    count = count - 1; //decrement count value by one

    //Run included function at delay of 1 second
    setTimeout(function () {
        //the countdown timer should display 9
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 1000); //set timer value to 1000ms/1 second


    //Run included function at delay of 2 second
    setTimeout(function () {
        //the countdown timer should display 8
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 2000); //set timer value to 2000ms/2 second

    //Run included function at delay of 3 second
    setTimeout(function () {
        //the countdown timer should display 7
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 3000); //set timer value to 3000ms/3 second

    //Run included function at delay of 4 second
    setTimeout(function () {
        //the countdown timer should display 6
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 4000); //set timer value to 4000ms/4 second


    //Run included function at delay of 5 second
    setTimeout(function () {
        //the countdown timer should display 5
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 5000); //set timer value to 5000ms/5 second

    //Run included function at delay of 6 second
    setTimeout(function () {
        //the countdown timer should display 4
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 6000); //set timer value to 6000ms/6 second

    //Run included function at delay of 7 second
    setTimeout(function () {
        //the countdown timer should display 3
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 7000); //set timer value to 7000ms/7 second

    //Run included function at delay of 8 second
    setTimeout(function () {
        //the countdown timer should display 2
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 8000); //set timer value to 8000ms/8 second

    //Run included function at delay of 9 second
    setTimeout(function () {
        //the countdown timer should display 1
        document.getElementById("countdownTimer").innerHTML = count;
        count = count - 1; //decrement count value by one
    }, 9000); //set timer value to 9000ms/9 second

    //Run included function at delay of 10 second
    setTimeout(function () {
        //final part of countdown, no decrement required, display Blastoff
        document.getElementById("countdownTimer").innerHTML = "Blastoff!!";
    }, 10000); //set timer value to 10000ms/10 second



}

//function to play craps

function playCraps() {
    console.log("playCraps has started"); // Log to console the start of code
    var die1; //define variable as die1 for game
    die1 = Math.ceil(Math.random() * 6); //define die1 as the ceiling value of the random of 0-6

    console.log("The value of Die1 is: " + die1);//display to console value of die1
    console.log("The value of Die2 is: " + die2);//display to console value of die2

    document.getElementById("die1Results").innerHTML = "The value of die1: " + die1; //send to website the value of die1
    var die2; //initiliaze variable for die2
    die2 = Math.ceil(Math.random() * 6);//define die2 as the ceiling value of the random of 0-6
    document.getElementById("die2Results").innerHTML = "The value of die2: " + die2; //send to website the value of die2
    var dieSum = die1 + die2; //compute the value of die1 and die2, assign to variable dieSum

    document.getElementById("sumResults").innerHTML = "The sume of Die1&2 is  " + dieSum; //sen to the website the value of the sum of die1 & die2

    if (dieSum == 7 || dieSum == 11){ //Determine the failure case, i.e. 7 or 11, cause if else conditions
        document.getElementById("crapsResults").innerHTML="Craps, you loose"; //Failed case detected, output Craps you loose 
    }
        else if (die1 == die2 && die2 %2 == 0){ //If case for winning, verify both values are the same and divisible by two
            document.getElementById("crapsResults").innerHTML="Hurray Doubles you win"; //output to website the winning result
        }
        else { //Lost case in If statement, not winning or loosing, send to website please try again.
            document.getElementById("crapsResults").innerHTML="Please try again"

        }
  

    

}