/* key = 08a952b25f428f198a70d56f6b821a3f
Preston cityid = "5604473"*/


const api = api.openweathermap.org/data/2.5/weather?id={5604473}&appid={08a952b25f428f198a70d56f6b821a3f}

const apiURL = "...";
fetch(apiURL)
  .then((response) => response.json())
  .then((jsObject) => {
    console.log(jsObject);
  });