function fruitsSolve(fruit, grams, price){
    let kilos = grams/1000;
    let finalPrice = kilos*price;

    console.log(`I need $${finalPrice.toFixed(2)} to buy ${kilos.toFixed(2)} kilograms ${fruit}.`)
}

fruitsSolve('orange', 2500, 1.80);
fruitsSolve('apple', 1563, 2.35)