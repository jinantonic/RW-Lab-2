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

    // function countTitle(value) {
    //     return value.title.split(' ').length > 6
    // }

    // const wordCountMapReducer = function (wordCountMap, word) {
    //     if (wordCountMap.has(word)) {
    //         wordCountMap.set(word, wordCountMap.get(word) + 1)
    //     } else {
    //         wordCountMap.set(word, 1)
    //     }

    //     return wordCountMap
    // }
      
    // const countIngredients = posts => [...posts
    //     .flatMap(item => item.body.split(' '))
    //     .reduce(wordCountMapReducer, new Map())
    //     .entries()]   
    //     .sort((a, b) => b[1] - a[1])
    //     // .slice(0, 5)
    //     .map(([word, count]) => `${word} [${count}]`)
    //     // .join(', ')
    // console.log(countIngredients(posts))

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



