// Actual variables
const APIurl = 'https://api.openweathermap.org/data/2.5/';
const weatherAPIurl = APIurl + 'weather';
const forecastAPIurl = APIurl + 'forecast';
const apiID = '&appid=08a952b25f428f198a70d56f6b821a3f';
const apiUnits = '&units=imperial';
const prestonURL = '?id=5604473' + apiID + apiUnits;
const sodaspringsURL = '?id=5607916' + apiID + apiUnits;
const fishhavenURL = '?lat=42.0380399&lon=-111.4048681' + apiID + apiUnits;

// Just puttin' it all together
const prestonWeather = weatherAPIurl + prestonURL;
const sodaspringsWeather = weatherAPIurl + sodaspringsURL;
const fishhavenWeather = weatherAPIurl + fishhavenURL;
const prestonForecast = forecastAPIurl + prestonURL;
const sodaspringsForecast = forecastAPIurl + sodaspringsURL;
const fishhavenForecast = forecastAPIurl + fishhavenURL;

// Page selector
let weatherURL = "";
let forecastURL = "";
if (document.getElementById("preston")) {
    weatherURL = prestonWeather;
    forecastURL = prestonForecast;
} else if (document.getElementById("sodasprings")) {
    weatherURL = sodaspringsWeather;
    forecastURL = sodaspringsForecast;
} else if (document.getElementById("fishhaven")) {
    weatherURL = fishhavenWeather;
    forecastURL = fishhavenForecast;
}

// Weather functions
fetch(weatherURL)
    .then((response) => response.json())
    .then((jsObject) => {
        let t = parseFloat(jsObject.main.temp);
        let s = parseFloat(jsObject.wind.speed);
        let output = "N/A";
        const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // reference the weather array
        //gettin' the stuff!
        document.getElementById('icon').setAttribute('src', imagesrc); // these two show icon
        document.getElementById('icon').setAttribute('alt', desc);
        document.getElementById('currently').innerHTML = jsObject.weather[0].description;
        document.getElementById('current-temp').innerHTML = Math.round(t) + "&#8457;";
        if (t <= 50 && s >= 3) {
            let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
            output = Math.round(f);
        };

        document.getElementById('highTemp').innerHTML = jsObject.main.temp_max + "&#8457;";
        document.getElementById("windChill").innerHTML = output + "&#8457;";
        document.getElementById('humidity').innerHTML = jsObject.main.humidity;
        document.getElementById('windSpeedMPH').innerHTML = Math.round(s) + " MPH";
    });
fetch(forecastURL)
    .then((response) => response.json())
    .then((forecastObject) => {
        var forecast = forecastObject.list.filter(x => x.dt_txt.includes('18:00:00'));
        console.table(forecast)
        for (let day = 0; day < forecast.length; day++) {

            //days of the week
            let weatherDay = document.getElementsByClassName('days');
            for (let i = 0; i < weatherDay.length; i++) {
                let longDate = new Date(forecast[day].dt_txt);
                weatherDay[day].textContent = longDate.toLocaleString("en-us", {
                    weekday: "long"
                });
            }
            //temperature
            let forecastTemp = document.getElementsByClassName('forecastTemp');
            for (let i = 0; i < forecastTemp.length; i++) {
                forecastTemp[day].innerHTML = forecast[day].main.temp;
            }
            //icon
            let weatherIcon = document.getElementsByClassName("forcastimg");
            for (let i = 0; i < weatherIcon.length; i++) {
                weatherIcon[day].setAttribute("src", `https://openweathermap.org/img/wn/${forecast[day].weather[0].icon}@2x.png`);
                weatherIcon[day].setAttribute("alt", `Icon representing ${forecast[day].weather[0].description}`);
            }
        }

    });