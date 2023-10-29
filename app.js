"use strict";

const apiKey = "6b2eda41783655e86c012a61c640e4ca";
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";

async function checkWeather() {
  const response = await fetch(apiUrl + `&appid=${apiKey}`);
  var data = await response.json();

  console.log(data);
  document.queryselector(".city").innerHTML = data.name;
  document.queryselector(".temp").innerHTML = math.round(data.main.temp) + "ºF";
  document.queryselector(".humidity").innerHTML = data.main.humidity + "%";
  document.queryselector(".wind").innerHTML = data.wind.speed + "mph";
}
checkWeather();
