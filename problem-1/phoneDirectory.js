document.addEventListener("DOMContentLoaded", function(event) {
    var table = document.getElementById("contactsTable");
    var rows = table.getElementsByTagName("tr");
    var buttons = table.getElementsByTagName("button");
    // var newbutton = document.getElementById("addButton");
    var nameBox = document.getElementById("contactName");
    var numberBox = document.getElementById("mobileNumber");
    var emailBox = document.getElementById("email");

    function createIndex() {
        for (var i = 0; i < rows.length; i++) {
            rows[i].dataset.index = i;
            if(i > 0){
                rows[i].firstElementChild.innerHTML = i;
            }
        }
        for (var i = 0; i < buttons.length; i++) {
            buttons[i].dataset.index = i+1;
        }
    }

    function createCell(row, i, value) {
        let cell = row.insertCell(i);
        cell.innerHTML = value;
    }

    function addRow() {
        if(nameBox.value !== '' && numberBox.value !== '' && emailBox.value !== '') {
            let row = table.insertRow(-1);
            createCell(row,0,'');
            createCell(row,1,nameBox.value);
            createCell(row,2,numberBox.value);
            // createCell(row,3,'<button class="delete">Delete</button>');
            createCell(row,3,emailBox.value);
            createIndex();
            nameBox.value = '';
            numberBox.value = '';
            emailBox.value = '';
        }
        // else {
        //     alert('Please enter data!');
        // }
    }

    // function deleteRow(index){
    //     let row = document.querySelector('[data-index="'+index+'"]');
    //     row.parentNode.removeChild(row);s
    //     createIndex();
    // }

    var clickEvent = document.addEventListener('click',function(event){
        // if(event.target.classList.contains('delete')){
        //     deleteRow(event.target.getAttribute('data-index'));
        // }
        if(event.target.id === 'addButton'){
            addRow();
        }
        event.preventDefault();
    });

    createIndex();


});



// // Name validation -> should contain only alphabets and space
// function checkName(contactName) {
//     var regexName = /^[a-zA-Z ]*$/;

//     if(contactName.value.match(regexName)) {
//         return true;
//     } // end if

//     else {
//         alert('.');
//         return false;
//     } // end else
// } // end function checkName

// // Mobile number validation -> should contain only numbers
// function checkNumber(contactNumber) {
//     var regexNumber = /^[0-9]*$/;

//     if(contactNumber.value.match(regexNumber)) {
//         return true;
//     } // end if

//     else {
//         alert('Mobile number should contain only numbers, nothing else.');
//         return false;
//     } // end else
// }

// /* Email validation
//    - Upper case and lower case letters (A-Z, a-z)
//    - Numeric characters (0-9)
//    - Special characters (- ! # $ % & ' * + - / = ? ^ _ ` { | } ~
//    - Period, dot, or full stop (.) with the condition that it cannot be the first or last letter of the email and cannot repeat one after another
// */
// function checkEmail(email) {
//     var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

//     if(email.value.match(regexEmail)) {
//         return true;
//     } // end if

//     else {
//         alert('Invalid email address');
//         return false;
//     } // end else
// } // end function checkEmail

function validation() {
    var contactName = document.forms["contact_input"]["contactName"].value;
    var mobileNumber = document.forms["contact_input"]["mobileNumber"].value;
    var email = document.forms["contact_input"]["email"].value;
    var regexName = /^[a-zA-Z ]*$/;
    var regexNumber = /^[0-9]*$/;
    var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if(contactName == "" || mobileNumber == "" || email == "") { // If all the fields are empty,
        emptyError = "All fields must be entered."
        document.getElementById("emptyError").innerHTML = emptyError; // display an error 
        return false;
    } // end if
    
    if (!contactName.match(regexName)) { 
        nameError = "Please enter a character or a space only for the contact name."
        document.getElementById("nameError").innerHTML = nameError; // display an error 
        return false;
    } // end if



    return true;





} // end function validation

/* <button id = "addButton" onclick = "checkName(document.contact_input.contactName); checkNumber(document.contact_input.mobileNumber); checkEmail(document.contact_input.email);">Add Contact</button> */