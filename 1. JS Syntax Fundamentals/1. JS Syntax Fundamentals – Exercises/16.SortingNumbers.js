function sortNumbs(numbers) {
    numbers.sort(function(a, b) {
        return a - b;
      });

let sorted = [];
let counterStart = 0;
let counterEnd = 1;


for (let i = 0; i < numbers.length; i++) {
  if (i%2 === 0) {
    sorted.push(numbers[counterStart]);
    counterStart++;
  } else {
    sorted.push(numbers[numbers.length-counterEnd]);
    counterEnd++;
  }
  
}
return(sorted);
}

sortNumbs([1, 65, 3, 52, 48, 63, 31, -3, 18, 56]);