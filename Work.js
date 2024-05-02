// Calling classes and storing them in a container
const firstnameUI = document.querySelector(".first-name-input"),
lastnameUI = document.querySelector(".last-name-input" ),
BloodtypeUI = document.querySelector( ".Blood-type-input"),
allergiesUI = document.querySelector( ".allergies-input"),
ageUI = document.querySelector( ".age-input"),
containerUI = document.querySelector( ".container"),
formUI = document.querySelector( "form"),
userdetailsUI = document.querySelector("user-details" );

// Creating functions that will collect and display user details
function getUserDetails(e) {
    e.preventDefault();


// Creating a container that will store the values of user details 
const firstname = firstnameUI.value,
lastname = lastnameUI.value,
Bloodtype = BloodtypeUI.value,
allergies = allergiesUI.value,
age = ageUI.value;

// Below is a conditional statement for age limit
if (age >= 18  && age <= 60){
    const firstname = firstnameUI.value,
lastname = lastnameUI.value,
Bloodtype = BloodtypeUI.value;
allergies = allergiesUI.value;
age = ageUI.value;

//Calling the classes for the display of user details entered

const firstnamepara = document.querySelector(".first-name-para"),
lastnamepara = document.querySelector(".last-name-para"),
Bloodtypepara = document.querySelector(".Blood-type-para"),
allergiespara = document.querySelector(".allergies-para"),
agepara = document.querySelector(".age-para");

// Making effect on html contents user details

firstnamePara.innerHTML = `<b>FirstName</b>: ${firstname}`;
lastnamePara.innerHTML = `<b>LastName</b>: ${lastname}`;
BloodtypePara.innerHTML = `<b>Bloodtype</b>: ${Bloodtype}`;
allergiesPara.innerHTML = `<b>Allergies</b>: ${allergies}`;
agePara.innerHTML = `<b>Age</b>: ${age}`;


//  making qualified feedback alert
Useralertseralert(`Congratulations,${firstname} your registration is successful`,"success");

console.log("qualified");
} else if (age < 18) {


// making not-qualified feedback alert
    Useralert(`Dear ${firstname},you are too young and not qualified for this marathon`),

    console.log("too young and not qualified");
} else {

    Useralert(`Dear ${firstname},you are too old and not qualified for this marathon.`,"error")

     console.log("too old,not qualified");
}
}

// creating the user alert function
function Useralert(message,notificationType) {
    // Create a container for the alert 
    const Useralertsection = document.createElement("div"),
    // creating paragraph in the container
       alertText = document.createElement("p");
       // To enable the switch between alert/feedback messages
       alertText.textContent = message;
   
       Useralertsection.className = `alert-section ${notificationType}`;
       Useralertsection.appendChild(alertText);

        //inserting a top display of the alert before the form   
       formWrapper.insertBefore(Useralertsection,form);
        //setting timeout for alert display(disappear)
       setTimeout(() => {
           Useralertsection.remove()
       }, 4000);
       
   }

//event listener to initiate the event after a form is submitted
(function loadAllEventListners(e) {
    formUI.addEventListener("submit", getUserDetails);
}) ();

