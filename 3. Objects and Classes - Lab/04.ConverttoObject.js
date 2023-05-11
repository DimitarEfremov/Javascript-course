function convertor(personJSON) {

    let person = JSON.parse(personJSON);

    for (const key in person) {
        console.log(`${key}: ${person[key]}`)
    }
    
}

convertor('{"name": "George", "age": 40, "town": "Sofia"}')