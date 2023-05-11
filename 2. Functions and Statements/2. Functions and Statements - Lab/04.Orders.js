function orderPrice(product, qtn) {

    const coffee = (product) => 1.5 * qtn;
    const water  = (product) => 1* qtn;
    const coke  = (product) => 1.4* qtn;
    const snacks  = (product) => 2* qtn;

    const productMap = {
        coffee: coffee,
        water: water,
        coke: coke,
        snacks: snacks,
    }

    return (productMap[product](product, qtn)).toFixed(2);

}

console.log(
    orderPrice("water", 5)
)