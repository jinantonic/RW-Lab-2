const newDiv = document.createElement("h3");
newDiv.className = "infoDump";
newDiv.innerHTML = "User Profile";
const newDiv2 = document.createElement("h3");
newDiv2.className = "infoDump";
newDiv2.innerHTML = "User Repo";

function getData() {
	const con = document.getElementById('con');
	const newDiv = document.createElement("h3");
	newDiv.className = "infoDump";
	newDiv.innerHTML = "User Profile";
	const newDiv2 = document.createElement("h3");
	newDiv2.className = "infoDump";
	newDiv2.innerHTML = "User Repo";
	if(con.querySelector('.infoDump') == null) {
		con.insertBefore(newDiv, userDetail);
		con.insertBefore(newDiv2, userDetail);
	} // end if

	const username = document.getElementById('username').value;
	fetch(`https://api.github.com/users/${username}`)
	.then(response => response.json()
	.then(data => {
		console.log(data);
		document.getElementById('profile').innerHTML = `<img src="${data.avatar_url}" />`
		document.getElementById('name').innerHTML = "Name : " + data.name;
		document.getElementById('login').innerHTML = "Username : " + data.login;
		document.getElementById('bio').innerHTML = "Bio : " + data.bio;
        document.getElementById('email').innerHTML = "Email : " + data.email;
		document.getElementById('location').innerHTML = "Location : " + data.location;
		document.getElementById('gists').innerHTML = "Number of public gists : " + data.public_gists;
		document.getElementById('numRepos').innerHTML = "Number of public repos : " + data.public_repos;
	}))

	function fetchRepos(username) {
		return fetch(`https://api.github.com/users/${username}/repos`)
		.then((response) => { return response.json() })
		.then(json => { return json })
		.catch((err) => { console.log('Fetch Error :-S', err);}); 
	} // end function fetchRepos
	  
	const getRepos = async(username) => {
		const ret = await fetchRepos(username)
		return ret
	}
	  
	(async function() {
		//const repos = await getRepos('jinantonic')
		const repos = await getRepos(username)
		const [rep1, rep2, rep3, rep4, rep5, rep6, rep7, rep8] = repos // Display 8 repos of the user
		addRows([rep1, rep2, rep3, rep4, rep5, rep6, rep7, rep8])
	})();
	  
	// To reset all the table contents when I start the new search
	const addRows = (rows) => {
		const tbody = document.querySelector('#repoTable tbody')
		if(tbody.hasChildNodes()) {
			while (tbody.firstChild) {
				tbody.removeChild(tbody.lastChild);
			} // end while
		} // end if

		rows.forEach(e => {
			const tr = document.createElement('tr')
			tr.innerHTML = rowHtml(e)
			tbody.appendChild(tr)
		})
	}
	  
	const rowHtml = row => {
		html = '';
		html += `<td>${row.name}</td><td>${row.description}</td>`
		//html += `<tr><h4>${row.name}</h4></tr><tr>${row.description}</tr>`
		return html
	}
} // end function getData()