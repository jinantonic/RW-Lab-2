// handler is a function that accepts an array
function fetchData() {
    fetch("https://jsonplaceholder.typicode.com/posts") // Call the fetch function
    .then(response => response.json()) // .json() method parses the JSON response into a JS object literal, response type
    .then(data => { // Log the data
        var posts = [];
        posts.push(data); // And store it in an array
        //console.log(posts); // Print the array
        //posts.forEach(element => console.log(element));
        // var title = Object.keys(posts);
        // console.log(title);
        //console.log(Object.keys(posts));
        //console.log(posts);
        posts.forEach((posts) => {
            // console.log(posts.title);
            // posts.filter(countWords);

            var numWords = posts.filter(posts => posts.title.split(' ').length > 6)
            console.log(numWords);
            // function countWords(posts) {
            //     var numWords = posts.title.split(' ').length;
            //     console.log(numWords);
            //     //return numWords;
            // }
            
        });


    });

    
}

fetchData(); // Call function fetchData()

// function numWords(posts) {
//     // var numWords = posts.title.split(' ').length;
//     // // console.log(numWords); // Display the number of words in each title
//     // // console.log(posts.title);
//     // if (numWords > 6) { // List all of the post titles having more than 6 words
//     //     console.log(posts.title);
//     // }
   
    
// }

// numWords();
