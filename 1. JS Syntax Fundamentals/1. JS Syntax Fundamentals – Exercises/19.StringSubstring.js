function substring(word, text) {
    let textArray = text.toLowerCase().split(' ');

    for (const element of textArray) {
        if (element === word) {
            return (word);
        }
    }

    return (word + ' not found!')

}

console.log(substring('javascript',
    'JavaScript is the best programming language'));

console.log(substring('python',
    'JavaScript is the best programming language'));
