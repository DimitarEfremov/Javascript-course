function solve(input) {

    allNumbs = String(input).split('');
     let total = 0;

    allNumbs.forEach(element => {
        total += Number(element);
    });

    average = total/allNumbs.length;


    while (average < 5) {
        allNumbs.push('9');

        let newTotal = 0;

        allNumbs.forEach(element => {
            newTotal +=Number(element);
        });

        total = newTotal;
    
        average = total/allNumbs.length;
    }

    console.log(allNumbs.join(''));
    
}

solve(101);
solve(5835);