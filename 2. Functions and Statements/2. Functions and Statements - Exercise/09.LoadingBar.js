function loading(percentage) {

    let progress = percentage / 10;

    let bar = new Array(10).fill('.');

    bar.fill('%',0,progress);

    return(`${percentage}% [${bar.join('')}]
Still loading...`)
    
}

console.log(
    loading(30)
)
console.log(
    loading(0)
)
console.log(
    loading(100)
)