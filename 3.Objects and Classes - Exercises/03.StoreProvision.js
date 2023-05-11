function solve(inventory1, inventory2 ) {
    let mergeResult = [...inventory1, ...inventory2];

    let products = {};

    for (let i = 0; i < mergeResult.length; i+=2) {

        let item = mergeResult[i];

        if (!products.hasOwnProperty(item)) {
            products[item] = 0;
        }

        let quantity = Number(mergeResult[i+1]);

        products[item] += quantity;
    }

    for (const key in products) {
            console.log(`${key} -> ${products[key]}`);
    }
    
}


solve(
    [
        'Chips', '5', 'CocaCola', '9', 'Bananas', '14', 'Pasta', '4', 'Beer', '2'
        ],
        [
        'Flour', '44', 'Oil', '12', 'Pasta', '7', 'Tomatoes', '70', 'Bananas', '30'
        ]
        
)