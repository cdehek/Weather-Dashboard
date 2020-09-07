var cityNameEl = document.getElementById("city-name");
var apiKey = "691b06b89c264940d1a3bb8504966bc2"

// var getCityName = function() {
//     var cityName = document.getElementById("city-name").value;

// };

var response = fetch("https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&units=imperial&appid=" + apiKey)
.then(function(response) {
    response.json().then(function(data) {
        console.log(data);
    });
});
console.log(response);

var formSubmitHandler = function(event) {
    event.preventDefault();
    //get city name from input element
    
};

var getCityData = function() {
    var apiUrl = "https://api.openweathermap.org/data/2.5/onecall?lat=33.441792&lon=-94.037689&exclude=hourly,daily&appid=691b06b89c264940d1a3bb8504966bc2"
};


cityNameEl.addEventListener("submit", formSubmitHandler);