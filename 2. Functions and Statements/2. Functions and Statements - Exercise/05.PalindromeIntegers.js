function palindrome(numbers) {

    for (let i = 0; i < numbers.length; i++) {
      let string = numbers[i].toString();

      let reverse = string.split("").reverse().join("");

      if (string === reverse) {
        console.log(`true`)
      } else {
        console.log(`false`)
      }
        
    }
    
}

palindrome([123,323,421,121]);
palindrome([32,2,232,1010]);