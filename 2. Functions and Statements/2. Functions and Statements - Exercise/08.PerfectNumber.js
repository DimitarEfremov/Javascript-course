function perfectNumb(numb) {

    let divisions = [];

    for (let i = 1; i < numb; i++){
        if (numb % i === 0){
            divisions.push(i)
        }      
    }

    let sum = divisions.reduce((sum1, nextNumb) => {return sum1 + nextNumb}, 0 );

    if (sum === numb) {
        console.log(`We have a perfect number!`);
    } else {
        console.log(`It's not so perfect.`);
    }
    
}

perfectNumb(6);
perfectNumb(28);
perfectNumb(1236498);