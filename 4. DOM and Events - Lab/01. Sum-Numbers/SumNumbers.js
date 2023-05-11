function calc() {
   let firstNumb = document.getElementById('num1').value;
   let secondNumb = document.getElementById('num2').value;

   const sum = Number(firstNumb) + Number(secondNumb);

   document.getElementById('sum').value = sum;

}


