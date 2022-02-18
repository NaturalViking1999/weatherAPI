// task 1 --------------------
const param = {
    "url": "https://api.openweathermap.org/data/2.5/",
    "appid": "4a7ce31c61b85bffc325034242378c0e"
}

function getWeather() {
    const cityId = document.querySelector('#city').value;
    fetch(`${param.url}weather?id=${cityId}&units=metric&APPID=${param.appid}`)
        .then(weather => {
            return weather.json();
        }).then(showWeather);
}

function showWeather(data) {
    console.log(data);
    document.querySelector('#city-name').textContent = data.name;
    document.querySelector('#temp').textContent = Math.round(data.main.temp) + '°C';
    document.querySelector('#rainfall').innerHTML = 'Rainfall: <br>' + data.weather[0].main;
    document.querySelector('#cloud').innerHTML = 'Clouds: <br>' + data.clouds.all + '%';
    document.querySelector('#wind').innerHTML = 'Wind: <br>' + 'Deg: ' + data.wind.deg + '. Gust: ' + data.wind.gust + '. Speed: ' + data.wind.speed;
}

getWeather();
document.querySelector('#city').onchange = getWeather;