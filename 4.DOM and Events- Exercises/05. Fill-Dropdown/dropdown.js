function addItem() {
    let textField = document.getElementById('newItemText');
    let newItemText = textField.value;
    let valueField = document.getElementById('newItemValue');
    let newItemValue = valueField.value;
    let menu = document.getElementById('menu');

    let newOption = document.createElement('option');
    newOption.value = newItemValue;
    newOption.innerText = newItemText;

    menu.appendChild(newOption);

    textField.value = '';
    valueField.value = '';
}