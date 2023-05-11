function deleteByEmail() {

    let emails = Array.from( document.querySelectorAll('tr > td:nth-child(even)'));
    let input = document.querySelector('label:nth-child(2) > input:nth-child(1)').value;
    let message = document.getElementById('result');
    

    let toBeRemoved = emails.find(element => element.textContent === input);


    if (toBeRemoved) {
        console.log(toBeRemoved.parentElement);
        toBeRemoved.parentElement.remove();
        message.textContent = 'Deleted'
    } else {
        message.textContent = 'Not found.'
    }
    
}