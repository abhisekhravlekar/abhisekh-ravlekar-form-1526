// JavaScript Guide-lines
/*
DECLARING VARIABLES 
Declare variables that will
store references for 
<input type="button" id="submit-button">,
<input type="text" id="fullname">,
<input type="text" id="email">
<textarea id="message"></textarea>

Declare variable that will 
store regular expression for email

READY TO START CODING
Start with your function here
(come up with the meaningful name).
*/

let fm = document.getElementById('subscribe-form');
let fn = document.getElementById('fullname');
let na = / /;
let em = document.getElementById('email');
let pattern = /^((?!\.)[\w-_.]*[^.])(@\w+)(\.\w+(\.\w+)?[^.\W])$/;
let me = document.getElementById('message');



function formValidator(ev) {
    // preventing default behaviour of HTML form on submit event
    // whenever used, it shoud come as the forst line of code in event handler!
    ev.preventDefault();

    // Trim the whitespace.
    em.value = em.value.trim();

    // START WITH INITIALLY 2 "EMPTY BUCKETS" (DATA/ERRORS) 
    // Declare object that will store the form-data
    // Declare array that will store the errors
    let errors = [];
    let data = {};


    // FULL NAME

    // Otherwise:
       // Create a corresponding error-message
       // and add it to your array "errors".
    // End your conditional here.


    if (fn.value !== '') {

        if (na.test(fn.value)) {
            // Check if fullname is not empty.
            // If so:
            // Pass the collected value
            // to your object "data".
            data.FullName = (`Full Name is: ${fn.value}`);
        } else {
            // Otherwise:
            // Create a corresponding error-message
            data.FullName = ('Full Name is invalid.');
        }
    } else {
        data.FullName = (`Full Name is empty.`);
    }   // End your conditional here.



    // Email

    // Get the value or write out the error message.
    if (em.value !== '') {
        // Check if email is not empty.
        // Check if email is valid.
        // If so:
          // Pass the collected value
          // to your object "data".
        if (pattern.test(em.value)) {
            // Otherwise:
            // Create a corresponding error-message
            data.email = (`User email is: ${em.value}`);
        } else {
            data.email = ('Email is invalid.');
        }

    } else {
        data.email = (`User email is empty.`);
    }   // End your conditional here.

    // MESSAGE

    // Get the value or write out the error message.
    if (me.value !== '') {
        // Check if message is not empty.
        // If so:
            // Pass the collected value
            // to your object "data".
        if (na.test(me.value)) {
            data.message = (`User message is: ${me.value}`);
        } else {
            // Otherwise:
            // Create a corresponding error-message
            // and add it to your array "errors"
            data.message = ('message is invalid.');
        }
    } else {
        data.message = (`User message is empty.`);
    }   // End your conditional here.

    // check if error array is empty. If so, print in console data object,
    // otherwise print in console errors array 

    if (data.value !== '') {
        console.log(data);
    } else {
        console.log(errors);
    }

}
// End of function here


// Clear text-fields
fm.addEventListener('submit', formValidator);

fm.addEventListener('submit', function submitForm (event) {
  // Prevent the default form submission
  event.preventDefault()
  // Do something with the form data
//  console.table([ ...new FormData(fm).entries() ])
  // Reset the form
  fm.reset()
})

// End of Clear text-fields



// Register your form to "click" event.

// CLICK EVENT FULLNAME
// Get the references to the active page-elements.
let fullname = document.querySelector(".name");

function eventFullname(ev) {
   ev.preventDefault();
   console.log("User clicked on Fullname Text-Area.");
}

fullname.addEventListener("click", eventFullname);
// END OF CLICK EVENT FULLNAME


// CLICK EVENT EMAIL
// Get the references to the active page-elements.
let mail = document.querySelector(".email-label");

function eventemail(ev) {
   ev.preventDefault();
   console.log("User clicked on Email Text-Area.");
}

mail.addEventListener("click", eventemail);
// END OF CLICK EVENT EMAIL


// CLICK EVENT MESSAGE
// Get the references to the active page-elements.
let MessageArea = document.querySelector(".text");

function eventmessage(ev) {
   ev.preventDefault();
   console.log("User clicked on Message Text-Area.");
}

MessageArea.addEventListener("click", eventmessage);
// END OF CLICK EVENT MESSAGE



// END OF CLICK EVENT


