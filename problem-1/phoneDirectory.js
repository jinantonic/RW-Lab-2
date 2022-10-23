// Create an object Contacts
// Define a function with 3 parameters and assign it to Contacts
var Contact = function (contactName, mobileNumber, email) {
    this.contactName = contactName;
    this.mobileNumber = mobileNumber;
    this.email = email;
}

var contactArr = []; // Declaring an array for the summary of the contacts
contactArr.push(new Contact("Jina Park", "0838103838", "jinapark119@gmail.com"));
contactArr.push(new Contact("Ovid Horan", "08234", "jinapark119@gl.com"));
contactArr.push(new Contact("Skittles Park", "0234235344", "jinaasfad"));

var contactList = function() {
    var cont = document.getElementById("contactsTable");
    
    cont.innerHTML = '<tr><th>Name</th><th>Mobile</th><th>Email</th></tr>'; // Fixed header of the table
    //cont.innerHTML = '<thead><tr><th>Name</th><th>Mobile</th><th>Email</th></tr></thead>'; // Fixed header of the table

    for (var i = 0; i < contactArr.length; i++) {
        cont.innerHTML += '<tr><td id = "contactName' + i + '">' + contactArr[i].contactName + '</td>'
                        + '<td id = "mobileNumber' + i + '">' + contactArr[i].mobileNumber + '</td>'
                        + '<td id = "email' + i + '">' + contactArr[i].email + '</td></tr>';
    } // end for 

    // var oddRow = document.querySelectorAll('tr:nth-child(odd)');
    // for (let i = 0; i < oddRow.length; i++) {
    //     oddRow[i].style.backgroundColor = 'red';
    // } // end for
} // end function


var addContact = function() {
    var contactName = document.getElementById("contactName").value;
    var mobileNumber = document.getElementById("mobileNumber").value;
    var email = document.getElementById("email").value;

    var addedContact = new Contact(contactName, mobileNumber, email)
    contactArr.push(addedContact); // Add the new contact detail to the contactsSummary array
    contactList(); // Call the function
} // end function

contactList();

// function validateName(contactName) {
//     var val = Boolean(contactName?.match(/^[A-Za-z\s]*$/));
//     if(!val) {
//         alert('eh');
    
//     }
// }