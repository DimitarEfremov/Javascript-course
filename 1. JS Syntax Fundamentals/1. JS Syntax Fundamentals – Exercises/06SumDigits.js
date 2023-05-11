function sumDigits(num){
    let text = num.toString();
    let numArray = text.split('');
    let sum = 0;

    numArray.forEach(element => {
        sum += Number(element);
    });

    console.log(sum);
}

sumDigits(245678);
sumDigits(97561);
sumDigits(543);