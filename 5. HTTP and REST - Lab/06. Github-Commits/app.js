function loadCommits() {
	const BASE_URL = 'https://api.github.com/repos';

    let username = document.getElementById('username').value;
    let repo = document.getElementById('repo').value;
    let commits = document.getElementById('commits');

    fetch (`${BASE_URL}/${username}/${repo}/commits`)

	.then((res) => res.json())
	.then((data) =>
        data
            .forEach((element ) => {
            const li = document.createElement('li');
            li.textContent = `${element.commit.author.name}: ${element.commit.message}`
            commits.appendChild(li);
        })) 
 .catch((err) => {
        console.log(err);
    })

}