function convertsToJSON(name, lastName, hairColor) {
    let person = {
        name,
        lastName,
        hairColor,
    }

    let personJSON = JSON.stringify(person);
    console.log(personJSON);
    
}

convertsToJSON('George', 'Jones', 'Brown')