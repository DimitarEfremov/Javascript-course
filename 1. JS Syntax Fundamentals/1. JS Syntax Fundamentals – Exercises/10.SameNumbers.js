function sameNumbers(numb){
let sum = 0;

let numbSplit = String(numb).split("");
let testNumb = numbSplit[0].repeat(numbSplit.length);

if (testNumb === String(numb) ) {
    console.log('true');
} else{
    console.log('false')
}

numbSplit.forEach(element => {
   sum += Number(element);
});

console.log(sum);

}

sameNumbers(2222222);
sameNumbers(1234);