function solve() {

    const SCHEDULE_URL = 'http://localhost:3030/jsonstore/bus/schedule/';

    const info = document.querySelector('#info > span');
    const departBTN = document.getElementById('depart');
    const arriveBTN = document.getElementById('arrive');

    let nextStop = 'depot';
    let busName = '';

    function depart() {
            fetch(`${SCHEDULE_URL}${nextStop}`)
                .then((res) => res.json())
                .then(({name, next})=>{
                    busName = name
                    info.textContent = `Next stop ${busName}`
                    nextStop = next;
                    departBTN.disabled = true;
                    arriveBTN.disabled = false;
                })
                .catch(() => {
                    info.textContent = `Error`
                    departBTN.disabled = true;
                    arriveBTN.disabled = true;
                })
    }

     function arrive() {
        info.textContent = `Arriving at ${busName}`
        departBTN.disabled = false;
        arriveBTN.disabled = true;
    }

    return {
        depart,
        arrive
    };
}

let result = solve();