function attachEvents() {
    let CODE_URL = 'http://localhost:3030/jsonstore/forecaster/locations'
    let CURRENT_WEATHER = 'http://localhost:3030/jsonstore/forecaster/today/';
    let THREE_day_WEATHER = 'http://localhost:3030/jsonstore/forecaster/upcoming/';
    let locationValue = document.getElementById('location');
    let submitBTN = document.getElementById('submit');
    let forecastPanel = document.getElementById('forecast');
    let current = document.getElementById('current');
    let upcoming = document.getElementById('upcoming');
    submitBTN.addEventListener('click', getWeather)
    let cityCode = '';

    forecastPanel.style.display = 'block';

    async function getWeather () {
        let response = await fetch(CODE_URL);
        let data = await response.json();
        data.forEach(element => {
            if (element.name === locationValue.value) {
                cityCode = element.code;
            }
        });

        let weatherResponse = await fetch(`${CURRENT_WEATHER}${cityCode}`)
        let weatherData = await weatherResponse.json();
        let {forecast, name} = weatherData;

        let symbolSpan = document.createElement('span');
        let dataSpan = document.createElement('span');
        let citySpan = document.createElement('span');
        let tempSpan = document.createElement('span');
        let conditionSpan = document.createElement('span');
        let divForecasts = document.createElement('div');

        divForecasts.classList.add('forecasts')

        symbolSpan.classList.add('symbol', 'condition');
        dataSpan.classList.add('condition');

        citySpan.classList.add('forecast-data');
        tempSpan.classList.add('forecast-data');
        conditionSpan.classList.add('forecast-data');

        citySpan.textContent = name;
        tempSpan.textContent = `${forecast.low}°/${forecast.high}°`;
        conditionSpan.textContent = forecast.condition;

        dataSpan.appendChild(citySpan);
        dataSpan.appendChild(tempSpan);
        dataSpan.appendChild(conditionSpan);

        symbolSpan.textContent = createSymbol(forecast.condition);
        divForecasts.appendChild(symbolSpan);
        divForecasts.appendChild(dataSpan);

        current.appendChild(divForecasts);

        let forecastResponse = await fetch(`${THREE_day_WEATHER}${cityCode}`)
        let forecastData = await forecastResponse.json();
        let threeDayForecasts = forecastData.forecast;
        let threeDaysArray = Object.values(threeDayForecasts);

        let forecastInfo = document.createElement('div');
        forecastInfo.classList.add('forecast-info');

        threeDaysArray.forEach(element => {
            let weatherSymbolSpan = document.createElement('span');
            weatherSymbolSpan.classList.add('symbol');
            weatherSymbolSpan.textContent = createSymbol(element.condition);
            let conditionSpan = document.createElement('span');
            conditionSpan.classList.add('forecast-data');
            conditionSpan.textContent = element.condition;
            let tempSpan = document.createElement('span');
            tempSpan.classList.add('forecast-data');
            tempSpan.textContent = `${element.low}°/${element.high}°`;

            let daySpan = document.createElement('span');
            daySpan.classList.add('upcoming');
            daySpan.appendChild(weatherSymbolSpan);
            daySpan.appendChild(tempSpan);
            daySpan.appendChild(conditionSpan);

            forecastInfo.appendChild(daySpan);
        });

        upcoming.appendChild(forecastInfo);

    }


    function createSymbol (weather) {
        switch (weather) {
            case 'Sunny':
                return '☀';
            case 'Partly sunny':
                return '⛅';
            case 'Overcast':
                return '☁';
               case 'Rain':
                return '☂' ;
        }   
    }
}

attachEvents();