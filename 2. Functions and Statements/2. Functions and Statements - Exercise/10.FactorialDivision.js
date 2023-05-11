
function solve(...numbers) {
    
    function factorialize(num) {
        if (num === 1) {
            return num;
        }
    
            return num * factorialize(num - 1);
      }

    return ((factorialize(numbers[0]))/(factorialize(numbers[1]))).toFixed(2);
}


console.log(
    solve(5,2)
)







