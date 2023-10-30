"use strict";

// const apiKey = "6b2eda41783655e86c012a61c640e4ca"; // my API key
const apiURL = "https://api.openweathermap.org/data/2.5/weather?q=";
const apiKey = "863242cfb2b1d357e6093d9a4df19a4b"; //GS API key

const searchBox = document.querySelector(".search input");
const searchBtn = document.querySelector(".search button");

async function checkWeather(city) {
  const response = await fetch(
    apiUrl + city + `&appid=${apiKey}&units=imperial`
  );
  var data = await response.json();

  console.log(data);
  document.queryselector(".city").innerHTML = data.name;
  document.queryselector(".temp").innerHTML = math.round(data.main.temp) + "ºF";
  document.queryselector(".humidity").innerHTML = data.main.humidity + "%";
  document.queryselector(".wind").innerHTML = data.wind.speed + "mph";
}

searchBtn.addEventListener("click", () => {
  checkWeather(searchBox.value);
});
