function oddAndEvenSum(number) {
    let oddSum = 0;
    let evenSum = 0;

    let numberToWorkWith = number;

    for (let i = 0; i < number.toString().length; i++) {

        let endNumb = numberToWorkWith%10;

        endNumb%2 === 0 ? evenSum += endNumb : oddSum += endNumb;

        numberToWorkWith-=endNumb;
        numberToWorkWith/=10;
        
    }

    return (`Odd sum = ${oddSum}, Even sum = ${evenSum}`)

}

console.log(
    oddAndEvenSum(1000435)
)