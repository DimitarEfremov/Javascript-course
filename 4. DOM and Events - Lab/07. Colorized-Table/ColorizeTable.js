function colorize() {
    let evenRows = Array.from(document.querySelectorAll('tbody > tr:nth-child(even)'));

    evenRows.forEach(element => {
        element.style.backgroundColor = "Teal";
    }); 
}