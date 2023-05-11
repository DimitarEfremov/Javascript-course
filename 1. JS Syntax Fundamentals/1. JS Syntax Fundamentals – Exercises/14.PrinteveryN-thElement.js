function printNthElement(arrayOfNumbs, jump){
    let answerArray = [];
    for (let i = 0; i < arrayOfNumbs.length; i+=jump) {
        answerArray.push(arrayOfNumbs[i])
    }
    return(answerArray);
}

printNthElement(['5', '20', '31', '4', '20'], 
2
);
printNthElement(['dsa','asd', 'test', 'tset'], 
2
);
printNthElement(['1', '2','3', '4', '5'], 6);

