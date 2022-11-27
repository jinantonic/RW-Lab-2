# Problem 1

- Phone Directory is a web application that allows a user to manage contacts.
- Once a contact is saved, it appears in a table.
- The list can be sorted by name.
- The list can be filtered by phone number.

![Sketch](/images/p1.png)

Functionality:
- It has three fields Name, Mobile and Email. All 3 are required fields.
- Clicking on the Add Contact button should add the contact to the table. 

Before adding a contact, the following validations should occur:
- **Name** should contain only Alphabets and Space. Should be less than or equal to 20 characters in length.
- **Mobile** should contain only Numbers. Should be equal to 10 characters in length.
- **Email** should have a proper validation and should be less than 40 characters in length.
- Show an error div with id 'error' if there is any error in input format or if there is any empty field.
- Valid contacts should get added sequentially in the table.
- After adding a valid contact, all fields should be reset to empty.
- Clicking on the Name heading in the table should sort it by ascending order of the contact name. 
  Further clicks should alternately sort descending then ascending.
- The search should begin as soon as an input is typed by the user in the search field. 
  It should filter rows based on the mobile number given in the search field.
- If there is no matching row for the search term, then the div with id 'noResult' should be made visible. 
  It should be hidden otherwise. Odd numbered data rows should have #f2f2f2 as the background color. 


# My solution
![Sketch](/images/p2.png)
This is the overall look of the application.

</br></br>

![Sketch](/images/p3.png)
Displaying the div error message when all fields are empty.

</br></br>

![Sketch](/images/p4.png)
Displaying the div error message when the user enters something else than a space or characters for Name. Name input field can take 20 characters or less.

</br></br>

![Sketch](/images/p5.png)
Displaying the div error message when the user enters something else than only numbers for Mobile. Mobile input field can take 10 characters. 

</br></br>

![Sketch](/images/p6.png)
Displaying the div error message when the user enters the Email in an incorrect form. Email input field can take 39 characters.

</br></br>

![Sketch](/images/p7.png)
Display the contents of phone book. I added some contact data already in the table and odd numbered data rows have #f2f2f2 as the background colour. 

</br></br>

![Sketch](/images/add.png)
Checked that the valid contacts are getting added sequentially in the table.

</br></br>

![Sketch](/images/asc.png)
Once the Name header is clicked, it sorts the contents by ascending order of the contact name.

</br></br>

![Sketch](/images/des.png)
Further click sorts the contents by descending order of the contact name.

</br></br>

![Sketch](/images/sear.png)
Search begins as soon as input is typed and returns the correnct result from the table.

</br></br>

![Sketch](/images/err.png)
Displays the div error when there is no matching row.