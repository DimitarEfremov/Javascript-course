function solve(commands) {
    let horses = commands.shift().split('|');

    let commandParser = {
        Retake: retakeCommand,
        Trouble: troubleCommand,
        Rage: rageCommand,
        Miracle: miracleCommand
    }

    let line = commands.shift();

    while (line !== 'Finish') {
        let command = line.split(' ')[0];

        commandParser[command](line, horses);

        line = commands.shift();
    }

    console.log(horses.join('->'));
    let winner = horses[horses.length-1];
    console.log(`The winner is: ${winner}`);




    function retakeCommand(action, horses) {
        let overtakingHorse = action.split(' ')[1];
        let overtakenHorse = action.split(' ')[2];

        let overtakingIndex = horses.indexOf(overtakingHorse);
        let overtakenIndex = horses.indexOf(overtakenHorse);

        if (overtakingIndex < overtakenIndex) {
            horses[overtakenIndex] = overtakingHorse;
            horses[overtakingIndex] = overtakenHorse;

            console.log(`${overtakingHorse} retakes ${overtakenHorse}.`);
        }

    }
    function troubleCommand(action, horses) {
        let horseInTrouble = action.split(' ')[1];
        let troubleIndex = horses.indexOf(horseInTrouble);

        if (troubleIndex > 0) {
            let previousHorse = horses[troubleIndex- 1];

            horses[troubleIndex- 1] = horseInTrouble;
            horses[troubleIndex] = previousHorse;

            console.log(`Trouble for ${horseInTrouble} - drops one position.`);
        }
        
    }
    function rageCommand(action, horses) {
        let ragingHorse = action.split(' ')[1];
        let rageIndex = horses.indexOf(ragingHorse);
        let firstPlaceIndex = horses.length - 1;

        if (firstPlaceIndex - rageIndex < 2) {
            horses.splice(rageIndex, 1);
            horses.push(ragingHorse);
        } else {
            horses.splice(rageIndex, 1);
            horses.splice(rageIndex+2, 0, ragingHorse);
        }

        console.log(`${ragingHorse} rages 2 positions ahead.`);
        
    }
    function miracleCommand(action, horses) {
        let miracleHorse = horses.shift();
        horses.push(miracleHorse);
        console.log(`What a miracle - ${miracleHorse} becomes first.`);
    }
    
}


solve((['Bella|Alexia|Sugar',
'Retake Alexia Sugar',
'Rage Bella',
'Trouble Bella',
'Finish'])
)

solve((['Onyx|Domino|Sugar|Fiona',
'Trouble Onyx',
'Retake Onyx Sugar',
'Rage Domino',
'Miracle',
'Finish'])
)