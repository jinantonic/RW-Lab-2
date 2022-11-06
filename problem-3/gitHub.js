// var XMLHttpRequest = require('xhr2');
// var xhr = new XMLHttpRequest(); //Create the XHR Object

// //Call the open function, GET-type of request, url, true-asynchronous
// xhr.open('GET', 'https://api.github.com/users', true)

// //call the onload 
// xhr.onload = function() {
//     //check if the status is 200(means everything is okay)
//     if (this.status === 200) {
//         //return server response as an object with JSON.parse
//         //console.log(JSON.parse(this.responseText));
//     }
// }

// xhr.send(); //call send
// //Common Types of HTTP Statuses
// // 200: OK
// // 404: ERROR
// // 403: FORBIDDEN

function getData() {
	//const username = document.getElementById('username').value;
	// fetch(`https://api.github.com/users/${username}`)
	fetch(`https://api.github.com/users/jinantonic`)
	.then(response => response.json()
	.then(data => {
		console.log(data);
		document.getElementById('profile').innerHTML = `<img src="${data.avatar_url}" />`
		document.getElementById('name').innerHTML = data.name;
		document.getElementById('login').innerHTML = data.login;
		document.getElementById('bio').innerHTML = data.bio;
        document.getElementById('email').innerHTML = data.email + " email";
		document.getElementById('location').innerHTML = data.location;
		document.getElementById('gists').innerHTML = data.public_gists;
        document.getElementById('repos').innerHTML = data.public_repos;
        //document.getElementById('repos').innerHTML = data.repos;
	}))
}

getData();

// function getRepos() {
// 	//const username = document.getElementById('username').value;
// 	// fetch(`https://api.github.com/users/${name}`)
// 	fetch(`https://api.github.com/users/jinantonic/repos`)
// 	.then(response => response.json()
// 	.then(data => {
// 		console.log(data);
//         document.getElementById('repos').innerHTML = data.description;
// 	}))
// }

// getRepos();

const fetchData = async() => {
	return fetch("https://api.github.com/users/jinantonic/repos")
	.then(response => response.json())
	// .then(data => {
	// 	console.log(data);
	// 	//document.getElementById('repos').innerHTML = repos.name;
	// })
}	

//fetchData();

// const getRepos = async() => {
// 	var repos = await fetchData();
// 	//console.log(repos);
// 	// ans = Array.isArray(repos); // Check is posts is an array or not
//     // console.log(ans); // Returns true

// 	// repos.forEach((repos) => {
//     // 	console.log([repos.name]);
// 	// 	console.log([repos.description]);
// 	// 	//document.getElementById('reposName').innerHTML = repos.name;
// 	// 	//document.getElementById('reposDesc').innerHTML = repos.description;
//     // });

// 	for (var i = 0; i < repos.length; i++) {
// 		//console.log(repos[i].name);
// 		document.getElementById("reposName").innerHTML = repos[i].name;
// 		document.getElementById("reposDesc").innerHTML = repos[i].description;
// 	}
    	
	
// }

// getRepos();

function repositories(username) {
	return fetch(`https://api.github.com/users/${username}/repos`)
	.then((response) => { return response.json() })
	.then(json => { return json })
	.catch((err) => { console.log('Fetch Error :-S', err);}); 
}
  
const getRepos = async(username) => {
	const ret = await repositories(username)
	return ret
}
  
(async function() {
	//const repos = await getRepos('bryanmccarthy')
	const repos = await getRepos('jinantonic')
	// now you have the repositories in the repos const - from here,
	// you can work with it
	// console.log('getRepos:', repos)
	// destructuring the repos array
	// rep1 - first element
	// rep2 - second element
	const [rep1, rep2, rep3, rep4, rep5, rep6, rep7, rep8] = repos
	addTwoRows([rep1, rep2, rep3, rep4, rep5, rep6, rep7, rep8])
})();
  
const addTwoRows = (rows) => {
rows.forEach(e => {
	const tbody = document.querySelector('#repoTable tbody')
	const tr = document.createElement('tr')
	tr.innerHTML = rowHtml(e)
	tbody.appendChild(tr)
})
}
  
const rowHtml = row => {
	html = ''
	html += `<td>${row.name}</td><td>${row.description}</td>`
	return html
}




