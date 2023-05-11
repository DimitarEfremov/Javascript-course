function calculator(n1, operator, n2) {

    let operatorParser = {
        "+": add,
        "-": subtract,
        "/": divide,
        "*": multiply
    }

    let answer = operatorParser[operator](n1,n2)

    console.log(answer.toFixed(2));

    function add(n1, n2) {
        return n1 + n2;
    }
    function subtract(n1, n2) {
        return n1 - n2;
    }
    function divide(n1, n2) {
        return n1 / n2;
    }
    function multiply(n1, n2) {
        return n1 * n2;
    }
    
}

calculator(5,
    '+',
    10 )
calculator(25.5,
    '-',
    3)