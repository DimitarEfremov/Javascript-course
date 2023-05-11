function toggle() {
    let buttonText = document.querySelector('.button');
    let toggleText = buttonText.textContent
    let div = document.getElementById('extra');

    if (toggleText === 'More') {
        buttonText.textContent = 'Less';
        div.style.display = 'block';
        
    } else {
        buttonText.textContent = 'More';
        div.style.display = 'none';
    }
   
}