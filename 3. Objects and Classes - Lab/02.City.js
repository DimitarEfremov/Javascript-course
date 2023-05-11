function cityData(city) {

    let dataPoints = Object.entries(city)

    for (let [key, value] of dataPoints) {
        console.log(`${key} -> ${value}`)
    }

}

cityData({
    name: "Sofia",
    area: 492,
    population: 1238438,
    country: "Bulgaria",
    postCode: "1000"
}
)