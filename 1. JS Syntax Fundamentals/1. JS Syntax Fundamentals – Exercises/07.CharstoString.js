function toString(...chars){
    let string = '';
    for (let i = 0; i < chars.length; i++) {
        string +=chars[i];
    }
    console.log(string);
}

toString('a',
'b',
'c'
)