function buildPerson(firstName, lastName, age) {
    let person = {
        firstName,
        lastName,
        age,
    }

    return person;
}

console.log(
    buildPerson("Peter", 
    "Pan",
    "20"
    )
)