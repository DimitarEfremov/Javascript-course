function attachEvents() {
    let BASE_URL = 'http://localhost:3030/jsonstore/grocery/';

    let inputs = {
        product: document.getElementById('product'),
        count: document.getElementById('count'),
        price: document.getElementById('price')
    }

    let inputForm = document.getElementsByClassName('list')[0];

    let buttons = {
        addProduct: document.getElementById('add-product'),
        updateProduct: document.getElementById('update-product'),
        loadProduct: document.getElementById('load-product'),
    }

    let tableBody = document.getElementById('tbody');

    let currentProduct = [];
    let productToEdit = {};

    buttons.updateProduct.addEventListener('click', updateData);
    buttons.addProduct.addEventListener('click', addData);
    buttons.loadProduct.addEventListener('click', loadProducts);

    function loadProducts(event) {
        if (event) {
            event.preventDefault();
        }

        tableBody.innerHTML = '';

        fetch(BASE_URL)
        .then((res) => res.json())
        .then((allProductData) => {
        currentProduct = Object.values(allProductData);
        currentProduct.forEach(element => {
            let newRow = createElement('tr');
            newRow.id = element._id;
            createElement('td', newRow, element.product, ['name']);
            createElement('td', newRow, element.count, ['count-product']);
            createElement('td', newRow, element.price, ['product-price']);
            let updateBTN =  createElement('button', null, 'Update', ['update']);
            updateBTN.addEventListener('click', updateForm);
            let deleteBTN = createElement('button', null, 'Delete', ['delete']);
            deleteBTN.addEventListener('click', deleteProduct);
            let buttonRow = createElement('td', newRow, null, ['btn']);
            buttonRow.appendChild(updateBTN);
            buttonRow.appendChild(deleteBTN);
            tableBody.appendChild(newRow);
            
        });
        })

    }

    function deleteProduct(event) {
        let id = this.parentNode.parentNode.id;
        this.parentNode.parentNode.remove();

        const httpHeaders = {
            method: "DELETE",
        }
        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadTasksHandler())
            .catch((err) => {
                console.error(err)
            })

    }

    function updateForm(event) {
        let id = this.parentNode.parentNode.id;
        productToEdit = currentProduct.find((p) => p._id === id);
        for (const key in inputs) {
            inputs[key].value = productToEdit[key]; 
        }
        buttons.addProduct.disabled = true;
        buttons.updateProduct.disabled = false;
    }

    function updateData (event) {
            event.preventDefault();

            let id = productToEdit._id;

            let {product, count, price} = inputs;  

            let payload = JSON.stringify({
                product: product.value,
                count: count.value,
                price: price.value
            })
            const httpHeaders = {
                method: 'PATCH',
                body: payload
            }

            fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadProducts())
            .catch((err) =>{
                console.error(err)
            })

            buttons.addProduct.disabled = false;
            buttons.updateProduct.disabled = true;

            inputForm.reset();
    }   

    function addData(event) {
        event.preventDefault();

        let fieldsAreNotEmpty = Object.values(inputs)
        .every((input) => input.value !== '');

        if (!fieldsAreNotEmpty) {
            return;
        }

        let {product, count, price} = inputs;  

        let payload = JSON.stringify({
            product: product.value,
            count: count.value,
            price: price.value
        })

        const httpHeaders = {
            method: 'POST',
            body: payload
        }
        fetch(BASE_URL, httpHeaders)
            .then(() => {
                loadProducts()
            })
            .catch((err) => {
                console.error(err)
            })

            inputForm.reset();

    }


    function createElement(type, parentNode, content, classes, id, attributes, useInnerHTML) {
        let newHtmlElement = document.createElement(type);
    
        if (content && useInnerHTML) {
          newHtmlElement.innerHTML = content;
        } else if (content && type != 'input') {
          newHtmlElement.textContent = content
        } else if (content && type === 'input') {
          newHtmlElement.value = content
        }
    
        // classes is []
        if (classes && classes.length > 0) {
          newHtmlElement.classList.add(...classes);
        }
    
        if (id) {
          newHtmlElement.id = id;
        }
    
        // { src: 'link', href: http}
        if (attributes) {
          for (const key in attributes) {
            newHtmlElement.setAttribute(key, attributes[key]);
          }
        }
    
        if (parentNode) {
          parentNode.appendChild(newHtmlElement);
        }
    
        return newHtmlElement;
      }
    
}

attachEvents(); 