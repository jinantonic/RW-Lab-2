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




function checkName(contactName) {
    var regexName = /^[a-z][a-z\s]*$/;
    if(contactName.value.match(regexName)) {
        return true;
    }
    else {
        alert('Please enter a character or a space only for the contact name.');
        return false;
    }
}

function checkNumber(contactNumber) {
    var regexNumber = /^\(?(\d{3})\)?[- ]?(\d{3})[- ]?(\d{4})$/;
    if(checkNumber.value.match(regexNumber)) {
        return true;
    }
    else {
        alert('Mobile number should contain only numbers, nothing else.');
        return false;
    }
}
