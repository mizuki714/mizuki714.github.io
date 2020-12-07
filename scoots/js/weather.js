let forecastURL = "https://api.openweathermap.org/data/2.5/onecall?lat=20.5083&lon=-86.9458&exclude=minutely,hourly,&appid=08a952b25f428f198a70d56f6b821a3f&units=imperial";
//weather info
fetch(forecastURL)
    .then((response) => response.json())
    .then((jsObject) => {

        //Today
        let t = parseFloat(jsObject.current.temp);
        let s = parseFloat(jsObject.current.wind_speed);
        let output = "N/A";
        const desc = "Icon of " + jsObject.current.weather[0].description; // reference the weather array
        document.getElementById('icon').setAttribute('src', `https://openweathermap.org/img/wn/${jsObject.current.weather[0].icon}@2x.png`); // these two show icons
        document.getElementById('icon').setAttribute('alt', desc);
        //gettin' the weather stuff!
        document.getElementById('condition').innerHTML = jsObject.current.weather[0].description;
        document.getElementById('current-temp').innerHTML = Math.round(t) + "&#8457;";
        //windspeed
        if (t <= 50 && s >= 3) {
            let f = (35.74 + (0.6215 * t)) - (35.75 * (Math.pow(s, 0.16))) + (0.4275 * (t * (Math.pow(s, 0.16))));
            output = Math.round(f);
        };

        //putting things where they need to be
        document.getElementById("windChill").innerHTML = output + "&#8457;";
        document.getElementById('humidity').innerHTML = jsObject.current.humidity;
        document.getElementById('windSpeedMPH').innerHTML = Math.round(s) + " MPH";

        //weekday names
        const dayNames = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
        const d = new Date();
        const dayName = dayNames[d.getDay()];
        const n1 = dayNames[d.getDay() + 1];
        const n2 = dayNames[d.getDay() + 2];
        const n3 = dayNames[d.getDay() + 3];
        allowedDays = [n1, n2, n3];

        document.getElementsByClassName("days").textContent = dayName;
        //three day forecast
        const daily = jsObject.daily;

        //loop through array days 
        for (let day = 0; day < daily.length; day++) {
            const weatherDay = document.getElementsByClassName('days');
            if (day + 1 != daily.length) {
                const milliseconds = daily[day + 1].dt * 1000;
                const date = new Date(milliseconds).toLocaleString("en-us", {
                    weekday: "long"
                });
                for (let ad = 0; ad < allowedDays.length; ad++) {
                    if (allowedDays[ad] == date) {
                        for (let i = 0; i < weatherDay.length; i++) {
                            //change to milliseconds and calculate day
                            weatherDay[day].textContent = date;

                        }
                        //temperature
                        let forecastTemp = document.getElementsByClassName('forecastTemp');
                        for (let i = 0; i < forecastTemp.length; i++) {

                            forecastTemp[day].innerHTML = daily[day + 1].temp.day + "&#8457;";

                        }

                        //icon
                        let weatherIcon = document.getElementsByClassName("forcastimg");
                        for (let i = 0; i < weatherIcon.length; i++) {

                            weatherIcon[day].setAttribute("src", `https://openweathermap.org/img/wn/${daily[day +1].weather[0].icon}@2x.png`);
                            weatherIcon[day].setAttribute("alt", `Icon representing ${daily[day +1 ].weather[0].description}`);

                        }
                    }
                }
            }
        }
        const jsonstring = JSON.stringify(jsObject);
        //weather alert info
        //hide alert IF there is no alert to show and display alert if there is one
        /*********************works only when alert exists but otherwise wont function****************************/
        if (jsonstring.indexOf("alerts") != -1) {
            document.getElementById('weatheralerts').innerHTML = "The " + jsObject.alerts[0].sender_name + " reports there is a(n) " + jsObject.alerts[0].event +
                " This alert lasts from " + jsObject.alerts[0].start + " until " + jsObject.alerts[0].end + ".";
        } else {
            
                var className = document.getElementsBy
                className('weatherAlerts');
                this.classList.toggle("hide_alert");
        }
    });