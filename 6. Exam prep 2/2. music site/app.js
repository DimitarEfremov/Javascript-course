window.addEventListener('load', solve);

function solve() {

    let totalLikes = 0

    let formInputFields = {
        genre: document.getElementById('genre'),
        name: document.getElementById('name'),
        author: document.getElementById('author'),
        date: document.getElementById('date'),
    }

    let addBTN = document.getElementById('add-btn')
    

    let otherDomElements = {
        allHitsContainer: document.getElementsByClassName('all-hits-container')[0],
        savedHitsContemner: document.getElementsByClassName('saved-container')[0],
        likes: document.querySelector('section#total-likes > div.likes > p')
    }

    addBTN.addEventListener('click', addToCollection);


    function addToCollection(event) {
        event.preventDefault();

        let fieldsAreNotEmpty = Object.values(formInputFields)
        .every((input) => input.value !== '');

        if (!fieldsAreNotEmpty) {
            return;
        }

        let songDiv = createElement('div', otherDomElements.allHitsContainer, null, ['hits-info']);
        createElement('img', songDiv, null, null, null, {'src': './static/img/img.png' });
        createElement('h2',songDiv , `Genre: ${formInputFields.genre.value}`);
        createElement('h2',songDiv , `Name: ${formInputFields.name.value}`);
        createElement('h2',songDiv , `Author: ${formInputFields.author.value}`);
        createElement('h3',songDiv , `Date: ${formInputFields.date.value}`);
        let saveBTN = createElement('button', songDiv, 'Save song', ['save-btn']);
        saveBTN.addEventListener('click', saveSong );
        let likeBTN = createElement('button', songDiv, 'Like song', ['like-btn']);
        likeBTN.addEventListener('click', likeSong );
        let deleteBTN = createElement('button', songDiv, 'Delete', ['delete-btn']);
        deleteBTN.addEventListener('click', deleteSong );

        // for (const key in formInputFields) {
        //     formInputFields[key].value = '';
        // }

        let form = document.querySelector('.container-text > form:nth-child(3)');
        form.reset();

        function likeSong(params) {
            totalLikes ++;
            otherDomElements.likes.textContent = `Total Likes: ${totalLikes}`;
            likeBTN.disabled = true; 
        }

        function deleteSong(params) {
            this.parentNode.remove();
        }

        function saveSong(params) {
            let savedSong = this.parentNode;
            otherDomElements.savedHitsContemner.appendChild(savedSong);
            likeBTN.remove();
            saveBTN.remove();
        }   


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