/* Calculates the wind chill factor if temp is less 
than 30f and windspeed is greater than 3mph
by using t he formula to calculate the wind chill factor 
 f=35.74+0.6215t−35.75s0.16+0.4275ts0.16,
 where f is the wind chill factor in Fahrenheit, 
 t is the air average temperature in Fahrenheit,
  and s is the wind speed in miles per hour. */

let temp = 54;
let windSpeedMPH = 12;

function getWindChill(temp, windSpeedMPH) {
    if ((temp <= 30) && (windSpeedMPH > 3.0)) {
        var windChill = (35.74 + (0.6215 * temp) - (35.75 * (Math.pow(windSpeedMPH, 0.16))) + (0.4275 * temp * (Math.pow(windSpeedMPH, 0.16)))).toFixed(0);
    }
    else {
        var windChill = "N/A"
    }
    return windChill;
}
document.getElementById("windChill").textContent = getWindChill(temp, windSpeedMPH);