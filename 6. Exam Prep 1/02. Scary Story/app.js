window.addEventListener("load", solve);

function solve() {

  const backUpData = {
    firstName: null,
    lastName: null,
    age: null,
    storyTitle: null,
    genreOption: null,
    storyText: null
  }

  const inputDOMselectors = {
    firstName: document.getElementById('first-name'),
    lastName: document.getElementById('last-name'),
    age: document.getElementById('age'),
    storyTitle: document.getElementById('story-title'),
    genreOption: document.getElementById('genre'),
    storyText: document.getElementById('story')
  }

  const otherDomSelectors = {
    formBTN: document.getElementById('form-btn'),
    previewList: document.getElementById('preview-list'),
    mainContainer: document.getElementById('main')
  }

  otherDomSelectors.formBTN.addEventListener('click', previewStory);

  function previewStory() {
    let allFormsOutputs = Object.values(inputDOMselectors)
      .every((input) => input.value !== '');

    if (!allFormsOutputs) {
      return
    };

    const li = createElement('li', otherDomSelectors.previewList, null, ['story-info']);
    const article = createElement('article', li);
    const headerName = createElement('h4', article, `Name: ${inputDOMselectors.firstName.value} ${inputDOMselectors.lastName.value}`);
    const age = createElement('p', article, `Age: ${inputDOMselectors.age.value}`);
    const title = createElement('p', article, `Title: ${inputDOMselectors.storyTitle.value}`);
    const genre = createElement('p', article, `Genre: ${inputDOMselectors.genreOption.value}`);
    const storyText = createElement('p', article, inputDOMselectors.storyText.value);
    const saveBTN = createElement('button', li, 'Save story', ['save-btn']);
    saveBTN.addEventListener('click', saveFunction);
    const editBTN = createElement('button', li, 'Edit story', ['edit-btn']);
    editBTN.addEventListener('click', editFunction);
    const deleteBTN = createElement('button', li, 'Delete story', ['delete-btn']);
    deleteBTN.addEventListener('click', deleteFunction);

    for (const key in backUpData) {
      backUpData[key] = inputDOMselectors[key].value;
    };

    otherDomSelectors.formBTN.disabled = true;

    Object.values(inputDOMselectors)
      .forEach((field) => field.value = '');

      function editFunction() {
        for (const key in backUpData) {
          inputDOMselectors[key].value = backUpData[key];
        }
    
        otherDomSelectors.formBTN.disabled = false;
    
        let previewField = document.getElementsByClassName('story-info')[0];
        previewField.remove();
      }
    
      function deleteFunction() {
        otherDomSelectors.formBTN.disabled = false;
    
        let previewField = document.getElementsByClassName('story-info')[0];
        previewField.remove();
      }
    
      function saveFunction(params) {
        otherDomSelectors.mainContainer.innerHTML = '';
        createElement('h1', otherDomSelectors.mainContainer, '"Your scary story is saved!');
        
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
}





