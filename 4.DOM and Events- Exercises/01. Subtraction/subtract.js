function subtract() {
    let firstNum = Number(document.getElementById('firstNumber').value);
    let secondNum = Number(document.getElementById('secondNumber').value);
    let resultNum = document.getElementById('result');

    resultNum.textContent = firstNum-secondNum;
}