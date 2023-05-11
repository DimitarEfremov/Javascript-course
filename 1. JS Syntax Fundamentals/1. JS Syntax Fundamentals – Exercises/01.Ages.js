function solve(age) {
    switch (true) {
        case (age <= 2 && age >= 0):
            console.log(`baby`)
            break;
        case (age <= 13 && age > 2):
            console.log(`child`)
            break;
        case (age <= 19 && age > 13):
            console.log(`teenager`)
            break;
        case (age <= 65 && age > 19):
            console.log(`adult`)
            break;
        case (age > 65):
            console.log(`elder`)
            break;
        default:
            console.log(`out of bounds`)
            break;
    }
}

solve(1);
solve(44);
solve(-5);