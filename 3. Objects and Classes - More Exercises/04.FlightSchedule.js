function solve(params) {
    let flightInput = params[0];
    let changesArr = params[1];
    let command = params[2][0];

    let flightArr = [];

    flightInput.forEach(element => {
        dataArr = element.split(' ')
        flightCode = dataArr.shift();
        city = dataArr.join(' ');
        

        flightArr.push(
            {
            flightCode,
            destination: city,
            status: 'Ready to fly'
        }
        );
    });

    changesArr.forEach(element => {
        let [flight, command] = element.split(' ');

        flightArr.filter(a => a.flightCode === flight )
        .forEach(a => a.status = command)
    });

    flightArr.filter(a => a.status === command )
    .forEach(a => {
        console.log({
            Destination: a.destination,
            Status: a.status
        })})
}

solve([['WN269 Delaware',

'FL2269 Oregon',

'WN498 Las Vegas',

'WN3145 Ohio',

'WN612 Alabama',

'WN4010 New York',

'WN1173 California',

'DL2120 Texas',

'KL5744 Illinois',

'WN678 Pennsylvania'],

['DL2120 Cancelled',

'WN612 Cancelled',

'WN1173 Cancelled',

'SK430 Cancelled'],

['Cancelled']

]);