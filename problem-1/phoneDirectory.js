document.addEventListener("DOMContentLoaded", function(event) {
    var table = document.getElementById("contactsTable");
    var rows = table.getElementsByTagName("tr");
    var buttons = table.getElementsByTagName("button");
    var nameBox = document.getElementById("contactName");
    var numberBox = document.getElementById("mobileNumber");
    var emailBox = document.getElementById("email");

    function tableIndex() {
        for (var i = 0; i < rows.length; i++) {
            rows[i].dataset.index = i;
            
            if(i > 0) {
                rows[i].firstElementChild.innerHTML = i;
            } // end if
        } // end for

        for (var i = 0; i < buttons.length; i++) {
            buttons[i].dataset.index = i+1;
        } // end for
    } // end function tableIndex()

    function createCell(row, i, value) {
        let cell = row.insertCell(i);
        cell.innerHTML = value;
    }

    function addRow() {
        if (nameBox.value !== '' && numberBox.value !== '' && emailBox.value !== '') {
            let row = table.insertRow(-1);
            createCell(row,0,'');
            createCell(row, 1, nameBox.value);
            createCell(row, 2, numberBox.value);
            createCell(row, 3, emailBox.value);
            tableIndex();
            nameBox.value = '';
            numberBox.value = '';
            emailBox.value = '';
        } // end if
    }

    var clickEvent = document.addEventListener('click',function(event) {
        if (event.target.id === 'addButton' && validation() == true){
            addRow();
        }
        event.preventDefault();
    });

    tableIndex();


});


function validation() {
    var contactName = document.forms["contact_input"]["contactName"].value;
    var mobileNumber = document.forms["contact_input"]["mobileNumber"].value;
    var email = document.forms["contact_input"]["email"].value;
    var regexName = /^[a-zA-Z ]*$/;
    var regexNumber = /^[0-9]*$/;
    var regexEmail = /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/;

    if (contactName == "" || mobileNumber == "" || email == "") { // If all the fields are empty,
        emptyError = "All fields must be entered."
        document.getElementById("emptyError").innerHTML = emptyError; // display an error 
        return false;
    } // end if
    
    if (!contactName.match(regexName)) {  // If the given input doesn't contain only characters or spaces,
        nameError = "Please enter a character or a space only for the contact name."
        document.getElementById("nameError").innerHTML = nameError; // display an error 
        return false;
    } // end if

    if (!mobileNumber.match(regexNumber)) { // If the given input doesn't contain only numbers,
        numberError = "Mobile number should contain only numbers, nothing else."
        document.getElementById("numberError").innerHTML = numberError; // display an error 
        return false;
    } // end if

    /* Email validation
        - Upper case and lower case letters (A-Z, a-z)
        - Numeric characters (0-9)
        - Special characters (- ! # $ % & ' * + - / = ? ^ _ ` { | } ~
        - Period, dot, or full stop (.) with the condition that it cannot be the first or last letter of the email and cannot repeat one after another
    */
    if (!email.match(regexEmail)) { // If the given input doesn't contain follow the email format,
        emailError = "Invalid email address."
        document.getElementById("emailError").innerHTML = emailError; // display an error 
        return false;
    } // end if

    return true;
} // end function validation

function sortContactsTable() {
    var rows, swap, i, x, y, swapHappening, order, count = 0;
    var contactsTable = document.getElementById("contactsTable");
    swap = true;
    order = "asc";  // Set the sorting order as ascending

    // A while loop that will be executed until no switching has to be done
    while (swap) {
        swap = false; // No swapping is done yet
        rows = contactsTable.getElementsByTagName("tr");
        
        // Loop through all table rows (except the first, which contains table headers):
        for (i = 1; i < rows.length - 1; i++) {  // i starts from 1 because i = 0 is the header
            swapHappening = false; // No swapping yet

            x = rows[i].getElementsByTagName("td")[1]; // Compare 2 rows, current row and the next row
            y = rows[i + 1].getElementsByTagName("td")[1];

            if (order == "asc") { // If it is an ascending order
                if (x.innerHTML.toLowerCase() > y.innerHTML.toLowerCase()) { // Convert the characters to lower case and compare them, toUpperCase() would work as well
                    swapHappening = true; 
                    break;
                } // end inner if
            }  // end if 

            else if (order == "desc") { // If it is an descending order
                if (x.innerHTML.toLowerCase() < y.innerHTML.toLowerCase()) {
                    swapHappening = true;
                    break;
                } // end inner if
            } // end else if
        } // end for

        if (swapHappening) {
            rows[i].parentNode.insertBefore(rows[i + 1], rows[i]); // Swap the rows
            swap = true;
            count++; // Increase the count by 1
        } // end if 

        else {
            if (count == 0 && order == "asc") { // If there was no swapping and the order is set as ascending, 
                order = "desc"; // Change it to descending order 
                swap = true; // Run the while loop
            } // end inner if
        } // end else
    } // end while
  }
  
