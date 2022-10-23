// Create an object Contacts
// Define a function with 3 parameters and assign it to Contacts
var Contact = function (contactName, mobileNumber, email) {
    this.contactName = contactName;
    this.mobileNumber = mobileNumber;
    this.email = email;
}

var contactArr = []; // Declaring an array for the summary of the contacts
contactArr.push(new Contact("Jina Park", "0838103838", "jinapark119@gmail.com"));
contactArr.push(new Contact("Ovid Horan", "08234", "jinapark119@gmail.com"));
contactArr.push(new Contact("Skittles Park", "0234235344", "jinaasfad"));

var contactList = function() {
    var cont = document.getElementById("contactsTable")
    cont.innerHTML = '<tr><th>Name</th><th>Mobile</th><th>Email</th></tr>'; // Fixed header of the table

    for (let i = 0; i < contactArr.length; i++) {
        cont.innerHTML += '<tr><td id = "contactName' + i + '">' + contactArr[i].contactName
                        + '</td><td id = "mobileNumber' + i + '">' + contactArr[i].mobileNumber
                        + '</td><td id = "email' + i + '">' + contactArr[i].email + '</td></tr>';
        // if(i % 2 == 0) {
        //     cont.innerHTML = contactList.style.background = 'red';
        // }
    } // end for 
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