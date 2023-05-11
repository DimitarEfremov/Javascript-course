function range(...symbols) {
    if (symbols[1].charCodeAt(0) < symbols[0].charCodeAt(0) ) {
        symbols.reverse();
    }

    charsInBetween = [];

    for (let i = symbols[0].charCodeAt(0) + 1; i < symbols[1].charCodeAt(0); i++) {
        charsInBetween.push(String.fromCharCode(i))
        
    }

    return charsInBetween.join(' ');

}

console.log(
    range( 'a', 'd')
)

console.log(
    range( 'd', 'a')
)

console.log(
    range( '#', ':')
)