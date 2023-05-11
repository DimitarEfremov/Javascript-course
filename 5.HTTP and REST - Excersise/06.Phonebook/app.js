function attachEvents() {
    const MAIN_URL = 'http://localhost:3030/jsonstore/phonebook/'

    const phonebookUL = document.getElementById('phonebook');
    const loadBTN = document.getElementById('btnLoad');
    const personInput = document.getElementById('person');
    const phoneInput = document.getElementById('phone');
    const createBTN = document.getElementById('btnCreate');

    loadBTN.addEventListener('click', loadPhoneBook);
    createBTN.addEventListener('click', createPhonebookItem);


    async function loadPhoneBook() {
        const phonebookResponse = await fetch(MAIN_URL);
        let phonebookData = await phonebookResponse.json();
        phonebookData = Object.values(phonebookData);
        phonebookUL.innerHTML = '';

        for (const {person, phone, _id} of phonebookData) {
            let liItem = document.createElement('li');
            let btn = document.createElement('button');
            liItem.textContent = `${person}: ${phone}`;
            btn.textContent = 'Delete';
            btn.id = _id;
            btn.addEventListener('click', DeletePhoneBook);
            liItem.appendChild(btn);
            phonebookUL.appendChild(liItem);
        }
    }

    function createPhonebookItem() {
        let person = personInput.value;
        let phone = phoneInput.value;
        const httpHeaders = {
            method: 'POST',
            body: JSON.stringify({person, phone})
        }

        fetch(MAIN_URL, httpHeaders)
        .then((res) => res.json())
        .then(()=>{
            loadPhoneBook();
        })
        .catch((err) => {
            console.log(err)
        })
        
    }

    async function DeletePhoneBook(e) {
        const id = this.id
        const httpHeaders = {
            method: 'DELETE'
        };

        fetch(`${MAIN_URL}${id}`, httpHeaders)
        .then((res) => res.json())
        .then(loadPhoneBook)
        .catch((err)=>{
            console.log(err);
        })
    }
}

attachEvents();
