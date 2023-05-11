function focused() {
    let inputs = Array.from( document.querySelectorAll('input'));

    
    inputs.forEach(element => {
        element.addEventListener('focus', addClass);
        element.addEventListener('blur', removeClass);
    });


    function addClass(e) {
        let currentTarget = e.target;
        currentTarget.parentElement.classList.add('focused');
    }

    function removeClass(e) {
        let currentTarget = e.target;
        currentTarget.parentElement.classList.remove('focused');
    }
}