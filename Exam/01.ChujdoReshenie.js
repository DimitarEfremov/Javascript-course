function sprintReview(input) {
    let n = Number(input.shift());
    let participantsCollections = {};
    let commandParser = {
        'Add New': addTask,
        'Change Status': changeStatus,
        'Remove Task': removeTask,
    }
 
    let totalPoints = 0;
    let toDoPoints = 0;
    let inProgress = 0;
    let codeReview = 0;
    let donePoints = 0;
 
    for (let index = 0; index < n; index++) {
        const [ assignee, taskId, title, status, estimatedPoints ] = input.shift().split(':');
        if (participantsCollections.hasOwnProperty(assignee)) {
            let task = {'taskId': taskId, 'title': title, 'status': status, 'estimatedPoints': Number(estimatedPoints)};
            participantsCollections[assignee].push(task)
        } else {
            participantsCollections[assignee] = [ {'taskId': taskId, 'title': title, 'status': status, 'estimatedPoints': Number(estimatedPoints)} ];
        }
    }
 
    for (const inputLine of input) {
        let commandInfo = inputLine.split(':');
        let command = commandInfo[0];
        commandParser[command](...commandInfo.slice(1));
    }
 
    function addTask(assignee, taskId, title, status, estimatedPoints) {
        if (!participantsCollections.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`)
        } else {
            let newTask = {'taskId': taskId, 'title': title, 'status': status, 'estimatedPoints': Number(estimatedPoints)}
            participantsCollections[assignee].push(newTask)
        }
    }
 
    function changeStatus(assignee, taskId, newStatus) {
        if (!participantsCollections.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        } else if (participantsCollections[assignee].filter(task => task.taskId === taskId).length === 0) {
            console.log(`Task with ID ${taskId} does not exist for ${assignee}!`);
        } else {
            for (const task of participantsCollections[assignee]) {
                if (task.taskId === taskId) {
                    task.status = newStatus;
                }
            }
        }
    }
 
    function removeTask(assignee, index) {
        if (!participantsCollections.hasOwnProperty(assignee)) {
            console.log(`Assignee ${assignee} does not exist on the board!`);
        } else if (index < 0 || index >= participantsCollections[assignee].length) {
            console.log(`Index is out of range!`)
        } else {
            participantsCollections[assignee].splice(index, 1);
        }
    }
 
    for (const key in participantsCollections) {
        for (const task of participantsCollections[key]) {
            totalPoints += Number(task.estimatedPoints);
            if (task.status === 'ToDo') {
                toDoPoints += Number(task.estimatedPoints);
            } else if (task.status === 'In Progress') {
                inProgress += Number(task.estimatedPoints);
            } else if (task.status === 'Code Review') {
                codeReview += Number(task.estimatedPoints);
            } else if (task.status === 'Done') {
                donePoints += Number(task.estimatedPoints);
            }
        }
    }
    console.log(`ToDo: ${toDoPoints}pts`);
    console.log(`In Progress: ${inProgress}pts`);
    console.log(`Code Review: ${codeReview}pts`);
    console.log(`Done Points: ${donePoints}pts`);
 
    if (donePoints >= toDoPoints + inProgress + codeReview) {
        console.log(`Sprint was successful!`);
    } else {
        console.log(`Sprint was unsuccessful...`)
    }
}
 
sprintReview(      [
    '5',
    'Kiril:BOP-1209:Fix Minor Bug:ToDo:3',
    'Mariya:BOP-1210:Fix Major Bug:In Progress:3',
    'Peter:BOP-1211:POC:Code Review:5',
    'Georgi:BOP-1212:Investigation Task:Done:2',
    'Mariya:BOP-1213:New Account Page:In Progress:13',
    'Add New:Kiril:BOP-1217:Add Info Page:In Progress:5',
    'Change Status:Peter:BOP-1290:ToDo',
    'Remove Task:Mariya:1',
    'Remove Task:Joro:1',
]
 
 
)