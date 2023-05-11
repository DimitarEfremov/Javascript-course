function loadRepos() {
	const BASE_URL = 'https://api.github.com/users';
	const GITHUB_URL = 'https://github.com/'

	let username = document.getElementById('username').value;
	let ul = document.getElementById('repos');
	ul.removeChild(ul.firstElementChild);

	
	fetch (`${BASE_URL}/${username}/repos`)
	.then((res) => res.json())
	.then((data) => {
		data.forEach(element => {
			console.log(element);
			const li = document.createElement('li');
			const anchor = document.createElement('a');
			anchor.href  = (`${GITHUB_URL}${username}/${element.name}`)
			anchor.textContent = element.name;
			li.appendChild(anchor);
			ul.appendChild(li);
		});
	});

}