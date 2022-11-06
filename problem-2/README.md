# Problem 2

For this problem refer to the lecture on array operations and consult the documentation at:
https://developer.mozilla.org/en-US/docs/Web/API/Fetch_API

The API you will work with is here:
http://jsonplaceholder.typicode.com

Using this API and the functional programming style of array operations, provide code to solve for the problems below. 
- You MUST USE this FP style with functions such as map, reduce, filter, flatmap and so on. 
  If you find yourself using loops, you’re doing it wrong. 
- Carefully think through which data transformations you need to apply in which order in your pipeline.

For each answer, use console.log() to display the data (i.e. you do not have to build DOM objects):
1. List all of the post titles having more than six words
2. Show a word frequency map for all of the body contents of the posts
</br></br>

# My solution
## 1st part 
</br>

![Sketch](/images/con.png)  
Fetch JSON data from the given link https://jsonplaceholder.typicode.com/posts.

</br></br>
![Sketch](/images/con1.png)</br>
This is the part of my terminal result. I can see all data is getting loaded and displayed.

</br></br>
![Sketch](/images/con2.png) 
I found 3 ways to display the post titles having more than six words.</br>
First way is to use the suggested function programming style of array operation and Array.filter() is used here. 

</br></br>
![Sketch](/images/con3.png) 
From the terminal, I can see it is displaying all of the contents including userId, id, title and body whose titles have more than 6 words.

</br></br>
![Sketch](/images/con4.png) 
So I came with a second way to display the contents displaying only titles in a prettier form using Array.forEach.

</br></br>
![Sketch](/images/con5.png) 
Displaying the right contents on terminal.

</br></br>
![Sketch](/images/con6.png) 
Third way to display the contents displaying only titles in a plain text form usng Array.forEach. 

</br></br>
![Sketch](/images/con7.png) 
Displaying the right contents on terminal.

## 2nd part 
![Sketch](/images/con8.png)
Function to find the words and their occurences in the body contents of the data.

</br></br>
![Sketch](/images/con9.png) 
Displaying the all of the words and it's occurences in the terminal.


