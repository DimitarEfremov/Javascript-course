function shopping(input) {

    let itemList = input.shift().split('!');

    let shopFunction = {
        Urgent: addAtStart,
        Unnecessary: removeItem,
        Correct: correctItem,
        Rearrange: moveToTheEnd
    }

    input.forEach(element => {
        if (element !== 'Go Shopping!') {
            let command = element.split(' ').shift();
            shopFunction[command](itemList, element)
        }
    });

    function addAtStart(items, command) {
        let item = command.split(' ')[1];
        if (!items.includes(item)) {
            items.unshift(item);
        }
        
    }
    function removeItem(items, command) {
        let item = command.split(' ')[1];
        let index = items.indexOf(item);
        if (index >= 0 ) {
            items.splice(index, 1);
        }
        
    }
    function correctItem(items, command) {
        let oldItem = command.split(' ')[1];
        let newItem = command.split(' ')[2];
        let index = items.indexOf(oldItem);

        if (index >= 0) {
            items[index] = newItem;
        }
        
    }
    function moveToTheEnd(items, command) {
        let oldItem = command.split(' ')[1];
        let index = items.indexOf(oldItem);
        
        if (index >= 0 ) {
            items.splice(index, 1);
            items.push(oldItem);
        }

    }

    console.log(itemList.join(', '));
    
}

shopping((["Tomatoes!Potatoes!Bread",
"Unnecessary Milk",
"Urgent Tomatoes",
"Go Shopping!"]))

shopping(["Milk!Pepper!Salt!Water!Banana",
"Urgent Salt",
"Unnecessary Grapes",
"Correct Pepper Onion",
"Rearrange Grapes",
"Correct Tomatoes Potatoes",
"Go Shopping!"])

function solution(input){
    let products = input[0].split('!');
    for(let i = 1; i <input.length ; i++){
        const data = input[i].split(' ');
        const command = data[0];
        const item = data[1];
        if(data.length === 3 && products.includes(item)){
            const newItem = data[2];
            const indexForRemove = products.indexOf(item);
            products[indexForRemove] = newItem;
        }
        if(command === 'Urgent' && !products.includes(item)){
                products.unshift(item);
        }else if(command === 'Unnecessary' && products.includes(item)){
                const indexForRemove = products.indexOf(item);
                products.splice(indexForRemove,1);
        }else if(command === 'Rearrange' && products.includes(item)){
            const indexForRemove = products.indexOf(item);
            const productToAddAtTheEnd = products.splice(indexForRemove,1);
            products.push(productToAddAtTheEnd);
        }
    }
    console.log(products.join(', '));
};