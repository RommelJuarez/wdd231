
let currentCoords = { lat: -0.224043, lng: -78.512833 };
let apiKey = "01c3341a6290780238f6a88215965a37";
const url = `https://api.openweathermap.org/data/2.5/weather?lat=${currentCoords.lat}&lon=${currentCoords.lng}&appid=${apiKey}&units=imperial`;


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
function displayData(data) {
    const currentTemp = document.querySelector("#current-temp");
    const weatherIcon = document.querySelector("#weather-icon");
    const weatherFigcaption = document.querySelector("figcaption");
    currentTemp.innerHTML = `Temperature: ${data.main.temp} F`;
    const iconsrc = `https://openweathermap.org/img/w/${data.weather[0].icon}.png`;
    let desc = data.weather[0].description;
    weatherIcon.setAttribute('src', iconsrc);
    weatherIcon.setAttribute('alt', desc);
    weatherFigcaption.textContent = `${desc}`;
}



apiFetch();
