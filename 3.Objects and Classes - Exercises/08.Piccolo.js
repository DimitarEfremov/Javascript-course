function solve(input) {
    let parkingLot = [];

    input.forEach(element => {
        let [command, plate] = element.split(', ');

        if (command === 'IN' && !parkingLot.includes(plate)) {
            parkingLot.push(plate);
        } else if(command === 'OUT' && parkingLot.includes(plate)) {
            let index = parkingLot.indexOf(plate);
            parkingLot.splice(index, 1)
        }
    });

    if (parkingLot.length === 0) {
        console.log(`Parking Lot is Empty`);
    } else {
        parkingLot.sort((a,b) => a.localeCompare(b))
        .forEach(element => {
            console.log(element);
        });
    }
    
}

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'IN, CA9999TT',
'IN, CA2866HI',
'OUT, CA1234TA',
'IN, CA2844AA',
'OUT, CA2866HI',
'IN, CA9876HH',
'IN, CA2822UU']
)

solve(['IN, CA2844AA',
'IN, CA1234TA',
'OUT, CA2844AA',
'OUT, CA1234TA']
)