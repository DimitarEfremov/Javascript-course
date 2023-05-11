function search() {
   let input = document.querySelectorAll('#towns > li');
   let towns = Array.from(input);
   let searchText = document.getElementById('searchText');
   let result = document.getElementById('result');

   let counter = 0;

   towns.forEach(element => {
      element.style.fontWeight = '';
      element.style.textDecoration  = '';

      if (element.textContent.includes(searchText.value)) {
         element.style.fontWeight = 'bold';
         element.style.textDecoration  = 'underline';
         counter++;
      }
   });

   result.textContent = `${counter} matches found`  
}
