function reverseString(...chars){
    let string = [];
    for (let i = chars.length - 1; i >= 0; i--) {
        string.push(chars[i]);
    }
    console.log(string.join(' '));
}

reverseString('A',
'B',
'C'
)