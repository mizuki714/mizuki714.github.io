/* key = 08a952b25f428f198a70d56f6b821a3f
Preston cityid = "5604473"*/
  /* api-test page */
const apiURL = "http://api.openweathermap.org/data/2.5/weather?id=5604473&appid=08a952b25f428f198a70d56f6b821a3f";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
    let kelvin = jsObject.main.temp;
    let cel = kelvin - 273;
    let fahrenheit = Math.floor(cel * (9 / 5) + 32);
    document.getElementById('current-temp').textContent = fahrenheit;
    const imagesrc = 'https://openweathermap.org/img/w/' + jsObject.weather[0].icon + '.png'; // note the concatenation
    const desc = jsObject.weather[0].description; // note how we reference the weather array
    document.getElementById('imagesrc').textContent = imagesrc; // informational specification only
    document.getElementById('icon').setAttribute('src', imagesrc); // focus on the setAttribute() method
    document.getElementById('icon').setAttribute('alt', desc);
  });

  /* preston page */

  