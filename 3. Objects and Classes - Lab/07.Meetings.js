function scheduler(inputData) {
    
    let meetings = {};

    inputData.forEach(element => {
        let dataEntry = element.split(' ');
        let day = dataEntry[0];
        let name = dataEntry[1]

        if (meetings.hasOwnProperty(day)) {
            console.log(`Conflict on ${day}!`)
        } else {
            console.log(`Scheduled for ${day}`)
            meetings[day] = name;
        }
    });

    for (const day in meetings) {
        console.log(`${day} -> ${meetings[day]}`)
}

}

scheduler(['Monday Peter',
'Wednesday Bill',
'Monday Tim',
'Friday Tim']
)