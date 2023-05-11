window.addEventListener("load", solve);

function solve() {

    let formMemory ={
        taskTitle: '',
        taskCategory: '',
        taskContent: ''
    }

    let formInputFields = {
        taskTitle: document.getElementById('task-title'),
        taskCategory: document.getElementById('task-category'),
        taskContent: document.getElementById('task-content')
    }

    let publishBTN = document.getElementById('publish-btn')
    publishBTN.addEventListener('click', publishEvent)

    let reviewList = document.getElementById('review-list')
    let publishedList = document.getElementById('published-list');
    let form = document.getElementsByClassName('newPostContent')[0];


    function publishEvent(event) {
        event.preventDefault();

        let fieldsAreNotEmpty = Object.values(formInputFields)
        .every((input) => input.value !== '');

        if (!fieldsAreNotEmpty) {
            return;
        }
        
        let {taskTitle, taskCategory, taskContent } = formInputFields;

        liItem = createElement('li', reviewList, null, ['rpost']);
        article = createElement('article', liItem);
        createElement('h4', article, taskTitle.value);
        createElement('p', article, `Category: ${taskCategory.value}`);
        createElement('p', article, `Content: ${taskContent.value}`);
        let editBTN = createElement('button', liItem, 'Edit', ['action-btn', 'edit'])
        editBTN.addEventListener('click', editFunction);
        let postBTN = createElement('button', liItem, 'Post', ['action-btn', 'post'])
        postBTN.addEventListener('click', postFunction);

        formMemory ={
            taskTitle: taskTitle.value,
            taskCategory: taskCategory.value,
            taskContent: taskContent.value
        }

        form.reset();

    }

    function editFunction(params) {
        this.parentNode.remove();

        for (const key in formMemory) {
            formInputFields[key].value = formMemory[key];
        }
        
    }
    
    function postFunction(params) {
      let finalPost = this.parentNode;
      let childrenList = finalPost.children;

      console.log(childrenList);
      childrenList[1].remove();
      childrenList[1].remove();

      publishedList.appendChild(finalPost);
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


