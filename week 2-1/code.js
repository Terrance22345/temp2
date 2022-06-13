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