function solve(peopleData) {

    let phoneBook = {};

    peopleData.forEach(element => {
        let dataEntry = element.split(' ');
        let name = dataEntry[0];
        let phone = dataEntry[1]

        phoneBook[name] = phone;
    });

    for (const name in phoneBook) {
            console.log(`${name} -> ${phoneBook[name]}`)
    }
    
}

solve(['Tim 0834212554',
'Peter 0877547887',
'Bill 0896543112',
'Tim 0876566344']
)