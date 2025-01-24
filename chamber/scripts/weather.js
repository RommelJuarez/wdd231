
let currentCoords = { lat: -0.224043, lng: -78.512833 };
let apiKey = "01c3341a6290780238f6a88215965a37";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentCoords.lat}&lon=${currentCoords.lng}&appid=${apiKey}&units=imperial`;
const cnt=3;
const urlForecast=`https://api.openweathermap.org/data/2.5/forecast?lat=${currentCoords.lat}&lon=${currentCoords.lng}&appid=${apiKey}&units=imperial`;
async function apiFetch() {
    try {
        const response = await fetch(url);
        if (response.ok) {
            const data = await response.json();

            console.log(data);
            displayData(data);
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}
async function apiFetchForecast() {
    try {
        const response = await fetch(urlForecast);
        if (response.ok) {
            const data = await response.json();

            console.log(data);
            displayForecast(data);
            
        } else {
            throw Error(await response.text());
        }
    } catch (error) {
        console.log(error);
    }

}
function displayForecast(data) {
    const tomorrowForecast = document.querySelector("#tomorrow-forecast");
    const afterTomorrowForecast = document.querySelector("#after-tomorrow-forecast");
    const afterAfterTomorrowForecast = document.querySelector("#after-after-tomorrow-forecast");

   
    const forecast = data.list.slice(0, 3);

   
    tomorrowForecast.textContent = `Tomorrow: ${forecast[0].main.temp} °F`; 
    afterTomorrowForecast.textContent = `Day After Tomorrow: ${forecast[1].main.temp} °F`;
    afterAfterTomorrowForecast.textContent = `In 3 Days: ${forecast[2].main.temp} °F`;
}
function displayData(data) {
    
    const temperature = document.querySelector("#temperature");
    const weatherIcon = document.querySelector("#weather-icon");
    const weatherFigcaption = document.querySelector("figcaption");
    const weatherDescription = document.querySelector("#weather");
    const highTemperature = document.querySelector("#high-temperature");
    const lowTemperature = document.querySelector("#low-temperature");
    const humidity = document.querySelector("#humidity");
    const sunrise = document.querySelector("#sunrise");
    const sunset = document.querySelector("#sunset");

   
    temperature.innerHTML = `Temperature: ${data.main.temp} °F`;

    
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    const desc = data.weather[0].description;
    weatherIcon.setAttribute("src", iconsrc);
    weatherIcon.setAttribute("alt", desc);
    weatherFigcaption.textContent = desc;
    weatherDescription.innerHTML = `Weather: ${desc}`;

    
    highTemperature.innerHTML = `High: ${data.main.temp_max} °F`;
    lowTemperature.innerHTML = `Low: ${data.main.temp_min} °F`;

    
    humidity.innerHTML = `Humidity: ${data.main.humidity}%`;

    
    const sunriseTime = new Date(data.sys.sunrise * 1000).toLocaleTimeString();
    const sunsetTime = new Date(data.sys.sunset * 1000).toLocaleTimeString();
    sunrise.innerHTML = `Sunrise: ${sunriseTime}`;
    sunset.innerHTML = `Sunrise: ${sunsetTime}`;
}




apiFetch();
apiFetchForecast();