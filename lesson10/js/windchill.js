/* Calculates the wind chill factor if temp is less 
than 30f and windspeed is greater than 3mph
by using t he formula to calculate the wind chill factor 
 f=35.74+0.6215t−35.75s0.16+0.4275ts0.16,
 where f is the wind chill factor in Fahrenheit, 
 t is the air average temperature in Fahrenheit,
  and s is the wind speed in miles per hour. */
/*
window.onload = getWindChill();
 function getWindChill() {
    let temp = parseFloat( document.getElementById('current-temp').textContent);
    let windSpeedMPH = parseFloat(document.getElementById('windSpeedMPH').textContent);
    let windChill = document.getElementById("windChill").innerHTML = "";

    if ((temp <= 50) && (windSpeedMPH > 3.0)) {
        windChill = (35.74 + (0.6215 * temp) - (35.75 * (Math.pow(windSpeedMPH, 0.16))) + (0.4275 * temp * (Math.pow(windSpeedMPH, 0.16)))).toFixed(0);
       let windChill = document.getElementById('windChill').innerHTML = windChill + "&#176; F";
    } 
    else {
        let windChill = document.getElementById("windChill").innerHTML = "N/A" ;
    }
}
*/
var temp= document.getElementById("current-temp").textContent;
var speed= document.getElementById("windSpeedMPH").textContent;
function windChill(temp,speed) {var output = "N/A";
  if((temp<=50) && (speed>=3)){
    var output = Math.round((35.74 + (0.6215 * temp)) - (35.75 * (Math.pow(speed,0.16))) + (0.4275 * (temp*(Math.pow(speed,0.16))))) + " F";
  } else{
    return output;
  }
  return output;
}
document.getElementById("windChill").textContent = windChill(temp,speed);