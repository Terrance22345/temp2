function checkCreds(){
    console.log("checkCreds() started");

    var firstName = "Terrance";
    var lastName = "Gay"; 
    var fullName = "Terrance Gay";
    var badgeNumb = 619;
    var fullNameLength = 13;
    





    firstName = document.getElementById("fName").value;
    console.log(firstName);
    lastName = document.getElementById("lName").valuee;
    console.log(lastName);
    fullName = firstName + " " + lastName;
    console.log(fullName);

    badgeNumb = document.getElementById("BadgeID").valuee;
    console.log("Badge number =  " + badgeNumb);

    fullNameLength = fullName.length;
    console.log(fullNameLength);
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