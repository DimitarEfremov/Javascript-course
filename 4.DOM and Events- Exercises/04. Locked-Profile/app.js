function lockedProfile() {
    let buttons = Array.from(document.getElementsByTagName('button'));
    let profiles = [];

    buttons.forEach(element => {
        profiles.push(element.parentElement);
        element.addEventListener('click', reveal);
    })


    function reveal(e) {
        let parentDiv = this.parentElement;
        let hiddenDiv = Array.from(parentDiv.children)[9];
        let lockBTN = Array.from(parentDiv.children)[2];

        if (lockBTN.checked) {
            return;
        }
        
        if (this.innerText === 'Show more') {
            hiddenDiv.style.display = 'block';
            this.innerText = 'Hide it';
        } else {
            hiddenDiv.style.display = 'none';
            this.innerText = 'Show more';
        }
        
    }
}

