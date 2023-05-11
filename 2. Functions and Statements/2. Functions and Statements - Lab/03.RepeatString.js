function repeatString(string, repeatTimes) {
    let answerString = '';

    for (let i = 0; i < repeatTimes; i++) {
            answerString+=string;
    }
    return(answerString);
}

console.log(
    repeatString('abc',3)
)