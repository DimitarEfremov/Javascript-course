function solve(params) {
    let productArr = [];

    params.forEach(element => {
        let [product, price] = element.split(' : ');
        productArr.push(
            {product, price} 
        )
    });

    productArr.sort((a, b) => a.product.localeCompare(b.product));

    let letter = '';

    productArr.forEach(element => {
        let firstLetter = element.product.charAt(0);
        if (letter.localeCompare(firstLetter)) {
            letter = firstLetter;
            console.log(letter);
        }
        console.log(`${element.product}: ${element.price}`);
    })

    
}

solve(['Appricot : 20.4',
'Fridge : 1500',
'TV : 1499',
'Deodorant : 10',
'Boiler : 300',
'Apple : 1.25',
'Anti-Bug Spray : 15',
'T-Shirt : 10']);

