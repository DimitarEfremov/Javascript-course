function addItem() {

    let uList = document.getElementById('items');
    let newItem = document.getElementById('newItemText').value;

    let itemsToBeAdded = document.createElement('li');
    itemsToBeAdded.textContent = newItem;


    uList.appendChild(itemsToBeAdded);

}