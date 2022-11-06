const fetchPosts = async() => {
    return fetch("https://jsonplaceholder.typicode.com/posts") // Call the fetch function
    .then(response => response.json()) // .json() method parses the JSON response into a JS object literal, response type
    //.then(data => console.log(data)); //log the data;
} 

const queries = async() => {
    var posts = await fetchPosts(); // Store JSON contents to post
    
    // ans = Array.isArray(posts); // Check is posts is an array or not
    // console.log(ans); // Returns true

    // function countTitle(value) {
    //     return value.title.split(' ').length > 6
    // }

    // var filterTitle = posts.filter(countTitle)
    // console.log(filterTitle); 

    // posts.forEach((posts) => {
    //     var numWords = posts.title.split(' ').length;
    //     if (numWords > 6) {
    //         console.log([posts.title]);
    //     }
    // });

    // posts.forEach(function(posts) {
    //     var numWords = posts.title.split(' ').length;
    //     // console.log(numWords); // Display the number of words in each title
    //     // console.log(posts.title);
    //     if (numWords > 6) { // List all of the post titles having more than 6 words
    //         console.log(posts.title);
    //     }
    // });

    const wordFreq = function (wordBody, word) {
        if (wordBody.has(word)) {
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
        // .join(', ')
    console.log(wordCount(posts))
}

queries();



