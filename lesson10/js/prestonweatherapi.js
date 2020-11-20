/* key = 08a952b25f428f198a70d56f6b821a3f
Preston cityid = "5604473"*/
/* api-page for Preston Page Weather */

/* preston page */

//weather summary
const apiURL = "https://api.openweathermap.org/data/2.5/weather?id=5604473&appid=08a952b25f428f198a70d56f6b821a3f&units=imperial";
fetch(apiURL)
    .then((response) => response.json())
    .then((jsObject) => {
        console.log(jsObject);
        let temp = jsObject.main.temp;
        document.getElementById('current-temp').textContent = temp;
        const imagesrc = 'https://openweathermap.org/img/wn/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        //Delete this line to show icon
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
        document.getElementById('currently').textContent = jsObject.weather[0].description;
        document.getElementById('highTemp').textContent = jsObject.main.temp_max;
        document.getElementById('humidity').textContent = jsObject.main.humidity;
        document.getElementById('windSpeedMPH').textContent = jsObject.wind.speed;
    });

//5-day forecast
const forecast = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&appid=08a952b25f428f198a70d56f6b821a3f&units=imperial";
fetch(forecast)
    .then(function (response) {
        return response.json();
    })
    .then(function (jsonObject) {
        const days = jsonObject['list'];
        console.log(days);
        var newDays = [];
        var today = parseInt(new Date(days[0].dt_txt).getDate());
        var x = 0;
       
        //check if the time is 6pm
        for (let i = 0; i < days.length; i++) {
            if (days[i].dt_txt == `2020-11-${today} 18:00:00`) {
                newDays[x] = days[i];
                x++;
                today++;
            }
        }
        //temperature sometimes i get an error here
        let forecastTemp = document.getElementsByClassName('forecastTemp');
        for (let i = 0; i < forecastTemp.length; i++) {
            forecastTemp[i].innerHTML = newDays[i].main.temp;
        }
        //icon
        let weatherIcon = document.getElementsByClassName("forcastimg");
        for (let i = 0; i < weatherIcon.length; i++) {
            weatherIcon[i].setAttribute("src", `http://openweathermap.org/img/wn/${newDays[i].weather[0].icon}@2x.png`);
            weatherIcon[i].setAttribute("alt", `Icon representing ${newDays[i].weather[0].description}`);
        }
        //days of the week
        let weatherDay = document.getElementsByClassName('day');
        for (let i = 0; i < weatherDay.length; i++) {
            let longDate = new Date(newDays[i].dt_txt);
            weatherDay[i].textContent = longDate.toLocaleString("en-us",{weekday:"long"});
        }
    });

