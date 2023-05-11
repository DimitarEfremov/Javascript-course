function solve(num1, num2, math) {
    let result;
    switch (math) {
        case '+':
            result = num1 + num2;
            break;
        case '-':
            result = num1 - num2;
            break;
        case '*':
            result = num1 * num2;
            break;
        case '/':
            result = num1 / num2;
            break;
        case '%':
            result = num1 % num2;
            break;
        case '**':
            result = num1 ** num2;
            break;
    }
    console.log(result);
}

solve(4,2,'+');
solve(4,2,'%');
solve(4,2,'**');
solve(4,2,'/');