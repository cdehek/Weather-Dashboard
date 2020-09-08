var cityNameEl = document.querySelector("#city");
var currentTempEl = document.querySelector("#current-temp");
var currentWeather = document.querySelector("#current-weather")
var apiKey = "691b06b89c264940d1a3bb8504966bc2"


var response = fetch("https://api.openweathermap.org/data/2.5/weather?q=chicago&units=imperial&appid=" + apiKey).then(function(response) {
    response.json().then(function(data) {
        console.log(data);
        console.log(data.main.temp);
    })
});
console.log(response);