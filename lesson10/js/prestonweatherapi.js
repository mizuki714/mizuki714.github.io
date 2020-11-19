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
        const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
        const desc = jsObject.weather[0].description; // note how we reference the weather array
        //Delete this line to show icon
        document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
        document.getElementById('icon').setAttribute('alt', desc);
        document.getElementById('currently').textContent = jsObject.weather[0].description;
        let highTemp = jsObject.main.temp_max;
        document.getElementById('highTemp').textContent = highTemp;
        document.getElementById('humidity').textContent =jsObject.main.humidity;
        document.getElementById('windSpeedMPH').textContent =jsObject.wind.speed;

//5-day forecast
/*
 document.getElementById('#').textContent = #;
 document.getElementById('#').textContent = #;
 document.getElementById('#').textContent = #;

 
var list1 = jsObject["list"];
var dIDay = ["d1Day", "d2Day", "d3Day", "d4Day", "d5Day"];
var dITemp =["d1Temp","d2Temp", "d3Temp", "d4Temp", "d5Temp" ];
var iconArray = [];
var dayArray = [];
var tempArray =[];
//let dayNames = ["Sunday","Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"]
//let dayName = dayNames[d.getDay()];
//let d =new Date();
for (let i = 0; i < list1.length; i++) {
    //IF to filter by 18:00
    if (list1[i].dt_txt.includes("18:00:00")) {
        tempArray[i] = list1[i].main.temp;
        dayArray[i] = list1[i].dt_txt;
        iconArray[i] = list1[i].weather[0].icon;
        console.log(iconArray[i]);
​
        for(i = 0; i < tempArray.length; i++){
            tempArray[i] = dITemp[i];
        }
        // for (x =0; x < dITemp.length; i++) {

        // }
        for(x=0; x< dayArray.length; x++){

        }
        for(y = 0; y < iconArray.length; y++){

        }
​
    }
    // store dt_tx in dIday that coordinated with it's new array location (ie..first loop answer need to go in d1Day, second in d2Day...)
​
    // store temp in dITemp that coordinates with it's new array location
    
​
}*/
});


