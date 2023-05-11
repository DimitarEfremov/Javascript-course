window.addEventListener('load', solve);

function solve() {

    let titleBackup = '';
    let descriptionBackup = '';
    let optionsBackup = '';
    let pointsBackup = '';
    let assigneeBackup = '';

    let totalPoints = 0;

    let title = document.getElementById('title');
    let description = document.getElementById('description');
    let options = document.getElementById('label');
    let points = document.getElementById('points');
    let assignee = document.getElementById('assignee');

    let hiddenNode = document.getElementById('task-id')

    let createBTN = document.getElementById('create-task-btn');
    createBTN.addEventListener('click', createArticle);
    let deleteBTN = document.getElementById('delete-task-btn');
    deleteBTN.disabled=true;
    deleteBTN.addEventListener('click', finalDelete);

    let tasks = document.getElementById('tasks-section');
    let sprintPoints = document.getElementById('total-sprint-points');

    function createArticle() {
        if (title.value === '' || description.value === '' || options.value === ''
            || points.value === '' || assignee.value === '') {
            return;
        };

        let taskCards = document.getElementsByClassName('task-card')
        let totalTasks = taskCards.length;

        let newArticle = document.createElement('article');
        newArticle.classList.add('task-card');
        newArticle.id = `task-${totalTasks + 1}`;

        let priorityDiv = document.createElement('div');
        priorityDiv.classList.add('task-card-label');
        if (options.value === 'Feature') {
            priorityDiv.textContent = `Feature ⊡`
            priorityDiv.classList.add('feature');
        } else if (options.value === 'Low Priority Bug') {
            priorityDiv.textContent = `Low Priority Bug ☉`
            priorityDiv.classList.add('low-priority');
        } else if (options.value === 'High Priority Bug') {
            priorityDiv.textContent = `High Priority Bug ⚠`
            priorityDiv.classList.add('high-priority');
        }

        newArticle.appendChild(priorityDiv);
        createElement('h3', newArticle, title.value, ['task-card-title']);
        createElement('p', newArticle, description.value, ['task-card-description']);
        createElement('div', newArticle, `Estimated at ${points.value}`, ['task-card-points']);
        totalPoints += Number(points.value);
        createElement('div', newArticle, `Assigned to ${assignee.value}`, ['task-card-assignee']);
        let actionCard = createElement('div', newArticle, null, ['task-card-actions']);
        let secondDLT = createElement('button', actionCard, 'Delete')
        secondDLT.addEventListener('click', deleteArticle);

        tasks.appendChild(newArticle);

         titleBackup = title.value;
         descriptionBackup = description.value;
         optionsBackup = options.value;
         pointsBackup = points.value;
         assigneeBackup = assignee.value;

        title.value = '';
        description.value = '';
        options.value = '';
        points.value = '';
        assignee.value = '';

        sprintPoints.textContent = `Total Points ${totalPoints}pts`

        
        function deleteArticle() {

        title.value = titleBackup;
        description.value = descriptionBackup;
        options.value = optionsBackup;
        points.value = pointsBackup;
        assignee.value = assigneeBackup;

        totalPoints -= pointsBackup;
        sprintPoints.textContent = `Total Points ${totalPoints}pts`

         titleBackup = '';
         descriptionBackup = '';
         optionsBackup = '';
         pointsBackup = '';
         assigneeBackup = '';

        createBTN.disabled = true;
        deleteBTN.disabled = false;

        let elementID = this.parentNode.parentNode.id;
        hiddenNode.textContent = elementID;
        }


        function createElement(type, parentNode, content, classes, id, attributes, useInnerHTML) {
            let newHtmlElement = document.createElement(type);

            if (content && useInnerHTML) {
                newHtmlElement.innerHTML = content;
            } else if (content && type != 'input') {
                newHtmlElement.textContent = content
            } else if (content && type === 'input') {
                newHtmlElement.value = content
            }

            // classes is []
            if (classes && classes.length > 0) {
                newHtmlElement.classList.add(...classes);
            }

            if (id) {
                newHtmlElement.id = id;
            }

            // { src: 'link', href: http}
            if (attributes) {
                for (const key in attributes) {
                    newHtmlElement.setAttribute(key, attributes[key]);
                }
            }

            if (parentNode) {
                parentNode.appendChild(newHtmlElement);
            }

            return newHtmlElement;
        }

    }

    function finalDelete() {
        let nodeToBeDeleted = document.getElementById(hiddenNode.textContent);
        nodeToBeDeleted.remove();

        createBTN.disabled = false;
        deleteBTN.disabled = true;

    }

}