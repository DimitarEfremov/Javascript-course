function solve(employArr) {


    let employees = employArr.reduce(
        (data, val) => {
            data[val] = val.length;
            return data;
        }, {}
    )

    for (const key in employees) {
        console.log(`Name: ${key} -- Personal Number: ${employees[key]}`)
    }
}



solve([
    'Silas Butler',
    'Adnaan Buckley',
    'Juan Peterson',
    'Brendan Villarreal'
]
)