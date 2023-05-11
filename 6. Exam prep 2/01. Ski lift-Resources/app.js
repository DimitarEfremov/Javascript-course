window.addEventListener('load', solve);

function solve() {

    let inputFieldsMemory = {
        firstName: '',
        lastName: '',
        peopleCount: '',
        startDate: '',
        daysCount: ''
    }

    let inputFields = {
        firstName: document.getElementById('first-name'),
        lastName: document.getElementById('last-name'),
        peopleCount: document.getElementById('people-count'),
        startDate: document.getElementById('from-date'),
        daysCount: document.getElementById('days-count')
    }

    let inputForm = document.querySelector('.container-text > form:nth-child(1)')

    let nextStepBTN = document.getElementById('next-btn')
    nextStepBTN.addEventListener('click', nextStepHandler)

    let ticketInfo = document.getElementsByClassName('ticket-info-list')[0];
    let confirmTicket = document.getElementsByClassName('confirm-ticket')[0];

    function nextStepHandler(event) {
        event.preventDefault();

        let fieldsAreNotEmpty = Object.values(inputFields)
        .every((input) => input.value !== '');

        if (!fieldsAreNotEmpty) {
            return;
        }

        let {firstName, lastName, peopleCount, startDate, daysCount} = inputFields;

        let liItem = createElement('li', ticketInfo, null, ['ticket']);
        let article = createElement('article', liItem,);
        createElement('h3', article, `Name: ${firstName.value} ${lastName.value}`)
        createElement('p', article, `From date: ${startDate.value}`);
        createElement('p', article, `For ${daysCount.value} days`);
        createElement('p', article, `For ${peopleCount.value} people`);
        let editBTN = createElement('button', liItem, 'Edit', ['edit-btn'])
        editBTN.addEventListener('click', editData);
        let continueBTN = createElement('button', liItem, 'Continue', ['continue-btn'])
        continueBTN.addEventListener('click', continueProcess);

        inputFieldsMemory = {
            firstName: firstName.value,
            lastName: lastName.value,
            peopleCount: peopleCount.value,
            startDate: startDate.value,
            daysCount: daysCount.value
        }

        inputForm.reset();

        nextStepBTN.disabled = true;

    }

    function editData(params) {
        this.parentNode.remove();

    for (const key in inputFields) {
        inputFields[key].value = inputFieldsMemory[key];
    }
    nextStepBTN.disabled = false;

    }

    function continueProcess(params) {
        let ticket = this.parentNode;
        confirmTicket.appendChild(ticket);
        let editBTN = document.getElementsByClassName('edit-btn')[0];
        editBTN.remove();
        let continueBTN = document.getElementsByClassName('continue-btn')[0];
        continueBTN.remove();
        let confirmBTN = createElement('button', ticket, 'Confirm', ['confirm-btn'])
        confirmBTN.addEventListener('click', confirmData);
        let cancelBTN = createElement('button', ticket, 'Cancel', ['cancel-btn'])
        cancelBTN.addEventListener('click', cancelProcess);
    }

    function confirmData(params) {
        let main = document.getElementById('main');
        let body = document.getElementById('body');
        main.remove();
        let h1 = createElement('h1',body,'Thank you, have a nice day!');
        h1.id = 'thank-you';
        let backBTN = createElement('button', body, 'Back');
        backBTN.id = 'back-btn'
        backBTN.addEventListener('click', reloadPage)
    }

    function cancelProcess(params) {
        this.parentNode.remove();
        nextStepBTN.disabled = false;
    }

    function reloadPage(params) {
     location.reload();   
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


    
    
