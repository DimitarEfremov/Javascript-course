function calculator(num1, num2, operator) {
    const multiply = (num1, num2) => num1 * num2;
    const divide = (num1, num2) => num1 / num2;
    const add = (num1, num2) => num1 + num2;
    const subtract = (num1, num2) => num1 - num2;

    const operations = {
        multiply: multiply,
        divide: divide,
        add: add,
        subtract: subtract
    }

    return operations[operator](num1, num2);
}

console.log(
    calculator(5,5,'multiply')
)