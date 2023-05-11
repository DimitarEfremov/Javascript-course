function addItem() {
    let uList = document.getElementById('items');
    let addInput = document.getElementById('newItemText').value;
    if (addInput.length === 0 ) return;

    let liItem = document.createElement('li');
    let spanItem = document.createElement('a');
    
    spanItem.textContent = '[Delete]';
    spanItem.href = '#';
    spanItem.addEventListener('click', deleteItem);
    
    liItem.textContent = addInput;
    liItem.appendChild(spanItem);

    uList.appendChild(liItem);

    function deleteItem() {
        liItem.parentElement.removeChild(liItem);
    }
}