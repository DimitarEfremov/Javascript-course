function solve(input) {
    let n = Number(input.shift());

    let toDoPoints = 0;
    let inProgressPoints = 0;
    let reviewPoints = 0;
    let donePoints = 0;

    let sprintBoard = {};

    for (let i = 0; i < n; i++) {
        let [assignee, taskId, title, status, estimatedPoints]
            = input.shift().split(':');
        
        let task = {};
        task[taskId] = { title, status, estimatedPoints}

        if (!sprintBoard.hasOwnProperty(assignee)) {
            let tasks = [];
            sprintBoard[assignee]= {tasks}
            sprintBoard[assignee].tasks.push(task);
        } else{
            sprintBoard[assignee].tasks.push(task);
        }
        
     
    }

    input.forEach(element => {
        let command = element.split(':')[0];
        

        switch (command) {
            case 'Add New':

            let [_cmd, assignee, taskId, title, status, estimatedPoints]= element.split(':');
            if (sprintBoard.hasOwnProperty(assignee)) {

                let task = {};
                task[taskId] = { title, status, estimatedPoints}
                sprintBoard[assignee].tasks.push(task);
            } else{
                console.log(`Assignee ${assignee} does not exist on the board!`);
            }


                break;
            case 'Change Status':

            let [_cm, person, ID, newStatus, ]= element.split(':');
            if (sprintBoard.hasOwnProperty(person)) {

                sprintBoard[person].tasks.forEach(element => {
                    if (element.hasOwnProperty(ID)) {
                        element[ID].status = newStatus
                    } else {
                        console.log(`Task with ID ${ID} does not exist for ${person}`);
                    }
                });
                
            } else {
                console.log(`Assignee ${person} does not exist on the board!`);
                
            }


                break;
            case 'Remove Task':
                let [_c, empl, index ]= element.split(':');
                if (sprintBoard.hasOwnProperty(empl)) {
                    if (sprintBoard[empl].tasks.length >= index) {
                        sprintBoard[empl].tasks.splice(index, 1);
                    } else {
                        console.log(`Index is out of range!`);
                    }

                } else{
                    console.log(`Assignee ${empl} does not exist on the board!`);
                }

                break;

        }

    });


    for (const key in sprintBoard) {
        sprintBoard[key].tasks.forEach(element => {
          let test = Object.values(element);
            test.forEach(element => {
                
                if (element.status === 'Done') {
                    donePoints+= Number(element.estimatedPoints);
                }
                if (element.status === 'In Progress') {
                    inProgressPoints+= Number(element.estimatedPoints);
                }
                if (element.status === 'Code Review') {
                    reviewPoints+= Number(element.estimatedPoints);
                }
                if (element.status === 'ToDo') {
                    toDoPoints+= Number(element.estimatedPoints);
                }
            });


            });
    }
    




    console.log(`ToDo: ${toDoPoints}pts`);
    console.log(`In Progress: ${inProgressPoints}pts`);
    console.log(`Code Review: ${reviewPoints}pts`);
    console.log(`Done Points: ${donePoints}pts`);

    if (donePoints>(toDoPoints+inProgressPoints+reviewPoints)) {
        console.log(`Sprint was successful!`);
    } else {
        console.log(`Sprint was unsuccessful...`);
    }

    console.log(``);

}

solve([
    '4',
    'Kiril:BOP-1213:Fix Typo:Done:1',
    'Peter:BOP-1214:New Products Page:In Progress:2',
    'Mariya:BOP-1215:Setup Routing:ToDo:8',
    'Georgi:BOP-1216:Add Business Card:Code Review:3',
    'Add New:Sam:BOP-1237:Testing Home Page:Done:3',
    'Change Status:Georgi:BOP-1216:Done',
    'Change Status:Will:BOP-1212:In Progress',
    'Remove Task:Georgi:3',
    'Change Status:Mariya:BOP-1215:Done',
]
)

