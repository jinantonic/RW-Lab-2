function getData() {
	const username = document.getElementById('username').value;
	fetch(`https://api.github.com/users/${username}`)
	//fetch(`https://api.github.com/users/jinantonic`)
	.then(response => response.json()
	.then(data => {
		console.log(data);
		document.getElementById('profile').innerHTML = `<img src="${data.avatar_url}" />`
		document.getElementById('name').innerHTML = "Name : " + data.name;
		document.getElementById('login').innerHTML = "User Name : " + data.login;
		document.getElementById('bio').innerHTML = "Bio : " + data.bio;
        document.getElementById('email').innerHTML = "Email : " + data.email;
		document.getElementById('location').innerHTML = "Location : " + data.location;
				document.getElementById('numRepos').innerHTML = "Number of Repos : " + data.public_repos;
		document.getElementById('gists').innerHTML = "Number of Gists : " + data.public_gists;

	}))

	function fetchRepos(username) {
		//document.getElementById("repoTable").innerHTML = ""; 
	
		return fetch(`https://api.github.com/users/${username}/repos`)
		.then((response) => { return response.json() })
		.then(json => { return json })
		.catch((err) => { console.log('Fetch Error :-S', err);}); 
	}	
	  
	const getRepos = async(username) => {
		const ret = await fetchRepos(username)
		return ret
	}
	  
	(async function() {
		//const repos = await getRepos('bryanmccarthy')
		//const repos = await getRepos('jinantonic')
		const repos = await getRepos(username)
		const [rep1, rep2, rep3, rep4, rep5, rep6, rep7, rep8] = repos
		addRows([rep1, rep2, rep3, rep4, rep5, rep6, rep7, rep8])
		
	})();
	  
	const addRows = (rows) => {
		rows.forEach(e => {
			const tbody = document.querySelector('#repoTable tbody')
			const tr = document.createElement('tr')
			tr.innerHTML = rowHtml(e)
			tbody.appendChild(tr)
		})
	}
	  
	const rowHtml = row => {
		//html = '<thead><tr><th>Repository<br>Name:</th><th>Description</th></tr></thead>'
		html = '';
		html += `<td>${row.name}</td><td>${row.description}</td>`
		return html
	}

	// function displayH() {
	// 	var h2 = document.getElementsByTagName('h2');
	// 	h2.style.display = 'inline';
	// }
}

getData();

