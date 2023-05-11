function solve(num1, num2, num3){
    let answer;

    if (num1>num2 && num1 > num3) {
        answer = num1;
    } else if (num2>num1 && num2 > num3) {
        answer = num2;
    } else if (num3>num2 && num3 > num2) {
        answer = num3;
    }
    console.log(`The largest number is ${answer}.`)
}

solve(1,2,3)
solve(6,5,4)
solve(1,9,3)

