function solve(input){
    if (typeof input === `number`) {
        let answer = Math.PI*(input**2)
        console.log(answer.toFixed(2));
    } else {
        console.log(`We can not calculate the circle area, because we receive a ${typeof input}.`)
    }
}


solve(3);
solve(`ava`);