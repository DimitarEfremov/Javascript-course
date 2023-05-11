function sumTable() {
    let prices = Array.from(document.querySelectorAll
        ('tr:not(:last-child) td:nth-of-type(2)'));
    let subfield = document.getElementById('sum');
    let sum = 0;

    prices.forEach(element => {
        sum += Number(element.textContent);
    });

    subfield.textContent = sum;
    
}