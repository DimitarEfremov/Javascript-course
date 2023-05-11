function solve() {

   let rows = Array.from(document.querySelectorAll('.container > tbody > tr'));
   let searchField = document.getElementById('searchField')
   
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {

      let lookingForValue = searchField.value;
      
      rows.forEach(row => {
         row.classList.remove('select')

         let text = row.textContent;
         
         if (text.includes(lookingForValue)) {
            row.classList.add('select');
         }
      });

      searchField.value = '';

   }
}