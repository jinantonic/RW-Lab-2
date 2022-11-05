document.addEventListener("DOMContentLoaded", function(event) {
    var contactsTable = document.getElementById("contactsTable");
    var rows = contactsTable.getElementsByTagName("tr");
    var button = contactsTable.getElementsByTagName("button");
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

        for (var i = 0; i < button.length; i++) {
            button[i].dataset.index = i+1;
        } // end for
    } // end function tableIndex()

    function tableCell(row, i, value) {
        let cell = row.insertCell(i);
        cell.innerHTML = value;
    } // end function tableCell()

    function addTableRow() {
        if (nameBox.value !== '' && numberBox.value !== '' && emailBox.value !== '') {
            let row = contactsTable.insertRow(-1);
            tableCell(row, 0, '');
            tableCell(row, 1, nameBox.value);
            tableCell(row, 2, numberBox.value);
            tableCell(row, 3, emailBox.value);
            tableIndex();
            nameBox.value = '';
            numberBox.value = '';
            emailBox.value = '';
        } // end if
    } // end function addTableRow()

    document.addEventListener('click', function(event) {
        if (event.target.id === 'addButton' && validation() == true){
            addTableRow();
        } //end if
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
} // end function sortContactsTable()

function searchContactsTable() {
    var i;
    var input = document.getElementById("search");
    var filter = input.value.toUpperCase();
    var table = document.getElementById("contactsTable");
    var tr = table.getElementsByTagName("tr");
    
    for (i = 0; i < tr.length; i++) {
        var td = tr[i].getElementsByTagName("td")[2];
        if (td) {
            var txtValue = td.textContent || td.innerText;
            
            if (txtValue.toUpperCase().indexOf(filter) > -1) {
                tr[i].style.display = "";
            } // end if
            else {
                tr[i].style.display = "none";
            } // end else
        } // end if      
    } // end for
} // end function searchContactsTable()

