function attachEvents() {
    let BASE_URL = 'http://localhost:3030/jsonstore/tasks/';

    let addEditFormInputs = {
      title: document.getElementById('course-name'),
      type: document.getElementById('course-type'),
      description: document.getElementById('description'),
      teacher: document.getElementById('teacher-name')
    }

    let form = document.getElementsByTagName('form')[0];

    let addCourseBTN = document.getElementById('add-course');
    addCourseBTN.addEventListener('click', addElements);
    let editCourseBTN = document.getElementById('edit-course');
    editCourseBTN.addEventListener('click', editElementEvent);
    let loadCourseBTN = document.getElementById('load-course');
    loadCourseBTN.addEventListener('click', loadElements);

    let listOfCourses = document.getElementById('list')

    let allCoursesList = [];
    let courseToEdit = {};

    function loadElements(event) {
        if (event) {
            event.preventDefault();
        }

        fetch(BASE_URL)
        .then((res) => res.json())
        .then((coursesData) => {
            allCoursesList = Object.values(coursesData);

            listOfCourses.innerHTML = '';

            allCoursesList.forEach(element => {
                let {_id, description, teacher, title, type} = element;
                

                let div = createElement('div', listOfCourses,null, ['container'], _id );
                createElement('h2', div, title,);
                createElement('h3', div, teacher,);
                createElement('h3', div, type,);
                createElement('h4', div, description,);
                let changeDataBTN = createElement('button', div, 'Edit Course', ['edit-btn']);
                changeDataBTN.addEventListener('click', changeDataEvent);
                let finishBTN = createElement('button', div, 'Finish', ['finish-btn']);
                finishBTN.addEventListener('click', finishCourseEvent);

                editCourseBTN.disabled = true;

            });
        })


    }

    function addElements(event) {
        event.preventDefault();

        let fieldsAreNotEmpty = Object.values(addEditFormInputs)
        .every((input) => input.value !== '');

        if (!fieldsAreNotEmpty) {
            return;
        }

        let {title, type, description, teacher} = addEditFormInputs;

        if (type.value !== 'Long' 
        && type.value !== 'Medium' && type.value !== 'Short') {
            return;
        }

        let payload = JSON.stringify({
            title: title.value,
            type: type.value,
            description: description.value,
            teacher: teacher.value
        })

        const httpHeaders = {
            method: 'POST',
            body: payload
        }

        fetch(BASE_URL, httpHeaders)
        .then(() => {loadElements()})
        .catch((err) => {console.error(err)});

        console.log(form);
        form.reset();
        
    }

    function finishCourseEvent(params) {
        let id = this.parentNode.id;

        this.parentNode.remove();

        const httpHeaders = {
            method: "DELETE",
        }
        fetch(`${BASE_URL}${id}`, httpHeaders)
            .then(() => loadElements())
            .catch((err) => {
                console.error(err)
            })
        
    }

    function changeDataEvent(params) {
        let id = this.parentNode.id;
        courseToEdit = allCoursesList.find((p) => p._id === id);

        for (const key in addEditFormInputs) {
          addEditFormInputs[key].value = courseToEdit[key]; 
      }

        this.parentNode.remove();
        addCourseBTN.disabled = true;
        editCourseBTN.disabled = false;

    }

    function editElementEvent(event) {
      event.preventDefault();

      let id = courseToEdit._id;

      let {title, type, description, teacher} = addEditFormInputs;

      let payload = JSON.stringify({
        title: title.value,
        type: type.value,
        description: description.value,
        teacher: teacher.value

    })

    const httpHeaders = {
      method: 'PUT',
      body: payload
  }

  fetch(`${BASE_URL}${id}`, httpHeaders)
  .then(() => loadElements())
  .catch((err) =>{
      console.error(err)
  })

  addCourseBTN.disabled = false;
  editCourseBTN.disabled = true;

  form.reset();


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