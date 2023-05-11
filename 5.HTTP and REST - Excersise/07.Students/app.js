function attachEvents() {
  
  let inputs = document.querySelectorAll('div.inputs > input');
  let tableBody = document.querySelector('#results > tbody');
  let STUDENTS_URL = 'http://localhost:3030/jsonstore/collections/students';
  let [firstNameINP, lastNameINP, facultyNumberINP, gradeINP] = inputs;
  let submitBTN = document.getElementById('submit');
  submitBTN.addEventListener('click', addStudent);

  loadStudents();

  async function addStudent() {
    let firstName = firstNameINP.value;
    let lastName = lastNameINP.value;
    let facultyNumber = facultyNumberINP.value;
    let grade = gradeINP.value;

    let httpHeaders = {
      method: 'POST',
      body: JSON.stringify({ firstName, lastName, facultyNumber, grade })
    }

    await fetch(STUDENTS_URL, httpHeaders);

    firstNameINP.value = '';
    lastNameINP.value = '';
    facultyNumberINP.value = '';
    gradeINP.value = '';

    loadStudents();
  }
  
  async function loadStudents () {
    let studentRES = await fetch(STUDENTS_URL);
    let studentDATA = await studentRES.json();
    let studentARR = Object.values(studentDATA);

    tableBody.innerHTML = '';

    studentARR.forEach(student => {
      let {firstName, lastName, facultyNumber, grade} = student;
      let tr = document.createElement('tr');
      let firstNameRow = document.createElement('td');
      let lastNameRow = document.createElement('td');
      let facultyNumberRow = document.createElement('td');
      let gradeRow = document.createElement('td');
      firstNameRow.textContent = firstName;
      lastNameRow.textContent = lastName;
      facultyNumberRow.textContent = facultyNumber;
      gradeRow.textContent = grade;
      tr.appendChild(firstNameRow);
      tr.appendChild(lastNameRow);
      tr.appendChild(facultyNumberRow);
      tr.appendChild(gradeRow);
      tableBody.appendChild(tr);
    });
    
  }
}

attachEvents();