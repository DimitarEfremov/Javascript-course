function create(words) {
   let resultBox = document.getElementById('content');

   words.forEach(word => {

      let div = document.createElement('div');
      let paragraph = document.createElement('p');
      paragraph.textContent = word;
      paragraph.style.display = 'none';

      div.appendChild(paragraph);
      resultBox.appendChild(div);

      div.addEventListener('click', () =>{
         paragraph.style.display = 'block';
      })

   });

}