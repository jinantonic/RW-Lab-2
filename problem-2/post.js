const fetchPosts = async() => {
    return fetch("https://jsonplaceholder.typicode.com/posts") // Call the fetch function
    .then(response => response.json()) // .json() method parses the JSON response into a JS object literal, response type
    //.then(data => console.log(data)); //log the data;
} 


const getTitles = async() => {
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
}

getTitles();

// function countFreq(arr, n)
// {
//     let visited = Array.from({length: n}, (_, i) => false);
         
//     // Traverse through array elements and
//     // count frequencies
//     for (let i = 0; i < n; i++) {
   
//         // Skip this element if already processed
//         if (visited[i] == true)
//             continue;
   
//         // Count frequency
//         let count = 1;
//         for (let j = i + 1; j < n; j++) {
//             if (arr[i] == arr[j]) {
//                 visited[j] = true;
//                 count++;
//             }
//         }
//            document.write(arr[i] + " " + count + "<br/>");
//     }
// }
 
// console.log(getFreqs(posts));


// function fetchData() {
//     fetch("https://jsonplaceholder.typicode.com/posts") // Call the fetch function
//     .then(response => response.json()) // .json() method parses the JSON response into a JS object literal, response type
//     .then(data => { // Log the data
//         var posts = [];
//         posts.push(data); // And store it in an array
//         //console.log(posts); // Print the array
//         //posts.forEach(element => console.log(element));
//         var title = posts.{body};
//         console.log(title);
//     });

    
// }


