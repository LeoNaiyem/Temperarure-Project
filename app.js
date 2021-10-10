const API_KEY = `f8a356cb19e3c5effa319aa1c826af88`

const searchResult = () =>{
    const city = document.getElementById('city-name').value;
    const url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${API_KEY}`
    fetch(url)
    .then(res => res.json())
    .then(data => showWeather (data))

}

const setInnerText = (id, value) =>{
    document.getElementById(id).innerText = value;
}

const showWeather = temperature =>{
    setInnerText('city', temperature.name);
    setInnerText('temperature', temperature.main.temp);
    setInnerText('condition', temperature.weather[0].main);
    setInnerText('city', temperature.name);
    const temperatureValue = document.getElementById('temperature');
    temperatureValue.innerText = ((temperature.main.temp)/33.8).toFixed(2);

    // icon is not working..........
    // const iconUrl = `https://openweathermap.org/img/wn/${temperature.weather[0].icon}02d@2x.png`
    // const icon = document.getElementById('icon');
    // icon.setAttribute('src', iconUrl);
}