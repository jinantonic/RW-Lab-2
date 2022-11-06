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
	if(con.querySelector('.infoDump') == null){
		con.insertBefore(newDiv, userDetail);
		con.insertBefore(newDiv2, userDetail);
	}

	const username = document.getElementById('username').value;
	fetch(`https://api.github.com/users/${username}`)
	//fetch(`https://api.github.com/users/jinantonic`)
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
		const tbody = document.querySelector('#repoTable tbody')
		if(tbody.hasChildNodes()){
			while (tbody.firstChild) {
				tbody.removeChild(tbody.lastChild);
			}

		}
		rows.forEach(e => {
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

	function displayH() {
		var h2 = document.getElementsByTagName('h2');

		// get the current value of the clock's display property
		var displaySetting = h2.style.display;
	
		// also get the clock button, so we can change what it says
		//var clockButton = document.getElementById('clockButton');
	
		// now toggle the clock and the button text, depending on current state
		if (displaySetting == 'block') {
		  // clock is visible. hide it
		  h2.style.display = 'none';
		  // change button text
		  //clockButton.innerHTML = 'Show clock';
		}
		else {
		  // clock is hidden. show it
		  h2.style.display = 'block';
		  // change button text
		  //clockButton.innerHTML = 'Hide clock';
		}
	  }
}