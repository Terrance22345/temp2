function blastoffTimerV1(){
    console.log("blastoffTimerV1() started");
    var countdownTimer=50;
    document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    setTimeout(function (){
        countdownTimer = countdownTimer -5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 5000)
    setTimeout(function (){
        countdownTimer = countdownTimer -5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 10000)
    setTimeout(function (){
        countdownTimer = countdownTimer -5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 15000)
    setTimeout(function (){
        countdownTimer = countdownTimer -5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 20000)
    setTimeout(function (){
        countdownTimer = countdownTimer -5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 25000)
    setTimeout(function (){
        countdownTimer = countdownTimer -5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 30000)
    setTimeout(function (){
        countdownTimer = countdownTimer -5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 35000)
    setTimeout(function (){
        countdownTimer = countdownTimer -5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 40000)
    setTimeout(function (){
        countdownTimer = countdownTimer -5;
        document.getElementById("countdownDisplay").innerHTML = countdownTimer;
    }, 45000)
    setTimeout(function (){
        countdownTimer = countdownTimer -5;
        document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
    }, 50000)
}
// just the value code for the craps game and the variables
var wins = 0;
var losses = 0;
var ties = 0;
// Time to play some craps got to start with a function
function playCraps(){
    // Got to make sure it connected to my HTML code
    console.log("playCraps() started");
    // Here are some variables I used 
    var die1;
    var die2;
    // Got to love that random number Genroter 
    die1 = Math.ceil(Math.random() * 6);
    die2 = Math.ceil(Math.random() * 6);
    // Got connect it to my HTML code
    console.log("Die1 = " + die1);
    // If I want to see this code helps
    document.getElementById("die1Res").innerHTML = die1;
     // Got connect it to my HTML code
    console.log("Die2 = " + die2);
    // If I want to see this code helps
    document.getElementById("die2Res").innerHTML = die2;
    // create sum from die1 and die2
    var sum = die1 + die2;
    //see if sum = 7 or
    if(sum == 7 || sum == 11) {
        // Show the user if they won lost or tied
        document.getElementById("crapsRes").innerHTML = "<h1>Craps, You lose!!!</h1>";
        losses++;
        document.getElementById("loseRes").innerHTML = losses;
        console.log("Craps, You lose!!!");
    //see if sum = 11
    } else if (die1 == die2 && die1 % 2 == 0) {
        // Show the user if they won lost or tied
        document.getElementById("crapsRes").innerHTML = "<h1>You Won Champ</h1>";
        wins++;
        document.getElementById("winRes").innerHTML = wins;
        console.log("You Won Champ");
    // tells you that you did not get the right sum or wrong sum
    } else {
        // Show the user if they won lost or tied
        document.getElementById("crapsRes").innerHTML = "<h1>Please Try again</h1>";
        ties++;
        document.getElementById("tieRes").innerHTML = ties;
        console.log("Try again");
    }

}
//loop
function blastoffTimerV2(){
    //variables for the countdown
    var countdownTimer = 50;
    var countdownDelay = 5000;
    var countdownChange = 5;
    var numPoints = 10;
    var halfCDT = countdownTimer / 2;
    //Timer for the countdown
    for(var i = 0; i <=  numPoints; i++){
        setTimeout(function(){
            console.log(countdownTimer);
            //Display for the countdown
            if(countdownTimer ==0){
                document.getElementById("countdownDisplay").innerHTML = "Blastoff!!";
                // Display for the countdown warning
            } else if(countdownTimer < halfCDT){
                document.getElementById("countdownDisplay").innerHTML = "Warning Less than half way to launch, time left = " + countdownTimer;
            } else {
                document.getElementById("countdownDisplay").innerHTML = countdownTimer;
            }
            //Counts down by 5
            countdownTimer = countdownTimer - countdownChange;
            // The delay for the countdown timer
        }, countdownDelay * i) 
            
    }
}
