function solve(input) {
    let words = input.split(" ").map(el => el.toLowerCase());
    let collection = {};

    words.forEach(element => {
        if (!collection.hasOwnProperty(element)) {
            collection[element] = 1;
        } else {
            collection[element]++
        }
    });

    let oddWords = [];

    for (const key in collection) {
        if (collection[key] % 2 !== 0) {
            oddWords.push(key);
        }
    }

    console.log(oddWords.join(' '));
}

solve('Java C# Php PHP Java PhP 3 C# 3 1 5 C#');
solve('Cake IS SWEET is Soft CAKE sweet Food');