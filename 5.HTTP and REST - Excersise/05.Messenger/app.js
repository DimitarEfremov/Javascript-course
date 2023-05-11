function attachEvents() {
    let REQUESTS_URL = 'http://localhost:3030/jsonstore/messenger';
    let messages = document.getElementById('messages');
    let nameField = document.querySelector('#controls > div:nth-child(1) > input:nth-child(2)');
    let messageField  = document.querySelector('#controls > div:nth-child(2) > input:nth-child(2)');
    let submitBTN = document.getElementById('submit');
    let refreshBTN = document.getElementById('refresh');
    refreshBTN.addEventListener('click', refreshMessages);
    submitBTN.addEventListener('click', submitMessage);


    async function refreshMessages() {
        let messagesRES = await fetch(REQUESTS_URL);
        let messagesDATA = await messagesRES.json();
        let messagesARR = Object.values(messagesDATA);

        let archiveMessages = [];

        messagesARR.forEach(element => {
            archiveMessages.push(`${element.author}: ${element.content}`)
        });
        messages.textContent = archiveMessages.join('\n'); 
    }

    async function submitMessage() {
        let author = nameField.value; 
        let content = messageField.value; 
        
        let httpHeaders = {
            method: 'POST',
            body: JSON.stringify({ author, content })
          }

        await fetch(REQUESTS_URL, httpHeaders);
        
        nameField.value = '';
        messageField.value = '';

        refreshMessages();

    }

}

attachEvents();