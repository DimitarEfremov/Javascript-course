function solve(peopleData) {

    let addressBook = {};

    peopleData.forEach(element => {
        let [name, address] = element.split(':');
        
        addressBook[name] = address;
    });

    let sortedAddress = Object.entries(addressBook);
    sortedAddress.sort((name1, name2) => name1[0].localeCompare(name2[0]));

    for (const element of sortedAddress) {
        console.log(`${element[0]} -> ${element[1]}`)
    }

}

solve(['Tim:Doe Crossing',
'Bill:Nelson Place',
'Peter:Carlyle Ave',
'Bill:Ornery Rd']
)