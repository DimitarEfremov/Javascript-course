function solve(x1, y1, x2, y2) {
    firstSolve = validCheck(0, x1, 0, y1);
    secondSolve = validCheck(0, x2, 0, y2);
    thirdSolve = validCheck(x2, x1, y2, y1);

    
    function validCheck(a, b, c, d) {
        
       let valid =  Math.sqrt(Math.pow((a - b), 2) + Math.pow((c - d), 2))

       if (Number.isInteger(valid)) {
        console.log(`{${b}, ${d}} to {${a}, ${c}} is valid`);
       } else {
        console.log(`{${b}, ${d}} to {${a}, ${c}} is invalid`);
       }
    }

}

solve(2, 1, 1, 1);