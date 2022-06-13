// Checks the to see who can get into the website
function checkCreds(){
    console.log("checkCreds() started");
// virables I used
    var firstName = "Terrance";
    var lastName = "Gay"; 
    var fullName = "Terrance Gay";
    var badgeNumb = 619;
    var fullNameLength = 13;
    




// Checking The name
    firstName = document.getElementById("fName").value;
    console.log(firstName);
    lastName = document.getElementById("lName").valuee;
    console.log(lastName);
    fullName = firstName + " " + lastName;
    console.log(fullName);
//Checking the bage number
    badgeNumb = document.getElementById("BadgeID").valuee;
    console.log("Badge number =  " + badgeNumb);
// checking my full name
    fullNameLength = fullName.length;
    console.log(fullNameLength);
    // A opration that will allow me in if my name is correct
    // or will give me a warning if my name is to long and bage number
    if(fullNameLength > 20){
        document.getElementById("loginStatus").innerHTML =
         "Full name is incorrect, please resubmit";
    } else if (badgeNumb > 999 || badgeNumb < 1){
        document.getElementById("loginStatus").innerHTML =
         "Badge Number is incorrect please resubmit";
    } else {
        alert("Crediental Submission successful, welcome " + fullName);
        location.replace("./UATSpace.html");
    }

}