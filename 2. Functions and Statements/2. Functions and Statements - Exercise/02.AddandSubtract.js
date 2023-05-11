function calc(num1, num2, num3) {
const sum = (a, b) => a + b;
const subtract = (a, b) => a - b;

return subtract(sum(num1, num2), num3);
}

console.log(
    calc(23,
        6,
        10
        )
)