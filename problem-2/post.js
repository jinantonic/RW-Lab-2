const fetchPosts = async() => {
    return fetch("https://jsonplaceholder.typicode.com/posts") // Call the fetch function
    .then(response => response.json()) // .json() method parses the JSON response into a JS object literal, response type
    //.then(data => console.log(data)); // Log the data
} 

const queries = async() => {
    var posts = await fetchPosts(); // Store JSON contents to post
    
    // ans = Array.isArray(posts); // Check is posts is an array or not
    // console.log(ans); // Returns true

    /* 1st way to display the contents including userId, id, title and body */
    // function countTitle(value) { // Function to count the number of words in the title
    //     return value.title.split(' ').length > 6
    // } // end function countTitle
    
    // var filterTitle = posts.filter(countTitle)
    // console.log(filterTitle); 

    /* 2nd way to display the contents including only titles in an organised form */
    // posts.forEach((posts) => {
    //     var numWords = posts.title.split(' ').length;
    //     if (numWords > 6) {
    //         console.log([posts.title]);
    //     }
    // });

    /* 3rd way to display the contents including only titles in a plain text */
    posts.forEach(function(posts) {
        var numWords = posts.title.split(' ').length;
        // console.log(numWords); // Display the number of words in each title
        // console.log(posts.title); // Display all of the titiles
        if (numWords > 6) { // List all of the post titles having more than 6 words
            console.log(posts.title);
        }
    }); 
    
    /* Word frequency map function */
    const wordFreq = function (wordBody, word) {
        if (wordBody.has(word)) { // If the word exists in the title
            wordBody.set(word, wordBody.get(word) + 1)
        } else {
            wordBody.set(word, 1)
        } // end if else
        return wordBody
    } 
      
    const wordCount = posts => [...posts
        .flatMap(item => item.body.split(/\s+/))
        .reduce(wordFreq, new Map())
        .entries()]   
        .sort((a, b) => b[1] - a[1])
        // .slice(0, 5)
        .map(([word, count]) => `${word} [${count}]`)
    console.log(wordCount(posts))
}

queries();