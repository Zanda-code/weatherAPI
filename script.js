const title = document.querySelector(`.mainContent__city`);
const btn = document.querySelector(`.mainContent__btn`);
const input = document.querySelector(`.mainContent__input`);
const img = document.querySelector(`#picture`);
const temp = document.querySelector(`#temp`);
const weather = document.querySelector(`#weather`);
const hum = document.querySelector(`#hum`);

const API_KEY = `&appid=e0b2a0bed30c77ee761665ce8ece82f3`;
const API_LINK = `https://api.openweathermap.org/data/2.5/weather?q=`;
const API_UNITS = `&units=metric`;

const getWeather = () => {
    const city = input.value;
    const URL = API_LINK + city + API_KEY + API_UNITS;
    
    axios.get(URL).then(res => {
        const temperature = res.data.main.temp;
        const humidity = res.data.main.humidity;
        const status = Object.assign({}, ...res.data.weather);

        title.textContent = input.value;
        temp.textContent = Math.floor(temperature) + `°C`;
        hum.textContent = humidity + `%`;
        weather.textContent = status.main;

        if (status.id >= 200 && status.id < 300) {
            img.setAttribute(`src`, `./img/thunderstorm.png`)
        } else if (status.id >= 300 && status.id < 400) {
            img.setAttribute(`src`, `./img/drizzel.png`)
        } else if (status.id >= 500 && status.id < 600) {
            img.setAttribute(`src`, `./img/rain.png`)
        } else if (status.id >= 600 && status.id < 700) {
            img.setAttribute(`src`, `./img/ice.png`)
        } else if (status.id >= 700 && status.id < 800) {
            img.setAttribute(`src`, `./img/fog.png`)
        } else if (status.id == 800) {
            img.setAttribute(`src`, `./img/sun.png`)
        } else if (status.id >= 801 && status.id < 804) {
            img.setAttribute(`src`, `./img/cloud.png`)
        } else {
            img.setAttribute(`src`, `./img/unknown.png`)
        }
        
        console.log(status.id);
    });
}

btn.addEventListener(`click`, getWeather);