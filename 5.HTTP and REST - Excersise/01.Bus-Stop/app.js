function getInfo() {
    const API_URL = 'http://localhost:3030/jsonstore/bus/businfo/';

    let stopIdValue = document.getElementById('stopId').value;
    let stopName = document.getElementById('stopName');
    let busesList = document.getElementById('buses');

    busesList.innerHTML = '';
    stopName.textContent = '';

    fetch(`${API_URL}${stopIdValue}`)
    .then((res) => res.json())
    .then((busInfo) => {

        let { name, buses } = busInfo;
        stopName.textContent = name;

        for (const busNum in buses) {
            let newLI = document.createElement('li');
            newLI.textContent = `Bus ${busNum} arrives in ${buses[busNum]} minutes`
            busesList.appendChild(newLI);
        }

    })
    .catch(() => {
        stopName.textContent = 'Error';
    })


}