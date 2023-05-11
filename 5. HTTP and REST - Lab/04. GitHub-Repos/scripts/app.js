function loadRepos() {
   const BASE_URL = 'https://api.github.com/users/testnakov/repos'
   let resContainer = document.getElementById('res');

   fetch (BASE_URL)
      .then((res) => res.text())
      .then((data) => {
         resContainer.textContent = data;
      })
      .catch((err) => {
         console.log(err);
      })
}