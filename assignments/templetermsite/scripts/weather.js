//Weather Salt Lake
var weatherRequestSaltLake = new XMLHttpRequest();
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5780993&APPID=28fb51caeb6d3a31f0a20efed1398c03&units=imperial"

weatherRequestSaltLake.open('GET', apiURLstring, true);
weatherRequestSaltLake.send();

weatherRequestSaltLake.onload =  function () {
    var weatherData = JSON.parse(weatherRequestSaltLake.responseText);

    //console.log(weatherData);
    document.getElementById("saltlake-weather-condition").innerHTML = weatherData.weather[0].main;
    document.getElementById("saltlake-current-temp").innerHTML = weatherData.main.temp;
}

//Weather Manti
var weatherRequestManti = new XMLHttpRequest();
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5542758&APPID=28fb51caeb6d3a31f0a20efed1398c03&units=imperial"

weatherRequestManti.open('GET', apiURLstring, true);
weatherRequestManti.send();

weatherRequestManti.onload =  function () {
    var weatherData = JSON.parse(weatherRequestManti.responseText);

    //console.log(weatherData);
    document.getElementById("manti-weather-condition").innerHTML = weatherData.weather[0].main;
    document.getElementById("manti-current-temp").innerHTML = weatherData.main.temp;
}

//Weather Idaho Falls
var weatherRequestIdahoFalls = new XMLHttpRequest();
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5596475&APPID=28fb51caeb6d3a31f0a20efed1398c03&units=imperial"

weatherRequestIdahoFalls.open('GET', apiURLstring, true);
weatherRequestIdahoFalls.send();

weatherRequestIdahoFalls.onload =  function () {
    var weatherData = JSON.parse(weatherRequestIdahoFalls.responseText);

    //console.log(weatherData);
    document.getElementById("idahofalls-weather-condition").innerHTML = weatherData.weather[0].main;
    document.getElementById("idahofalls-current-temp").innerHTML = weatherData.main.temp;
}

//Weather Rexburg
var weatherRequestRexburg = new XMLHttpRequest();
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5605242&APPID=28fb51caeb6d3a31f0a20efed1398c03&units=imperial"

weatherRequestRexburg.open('GET', apiURLstring, true);
weatherRequestRexburg.send();

weatherRequestRexburg.onload =  function () {
    var weatherData = JSON.parse(weatherRequestRexburg.responseText);

    //console.log(weatherData);
    document.getElementById("rexburg-weather-condition").innerHTML = weatherData.weather[0].main;
    document.getElementById("rexburg-current-temp").innerHTML = weatherData.main.temp;
}

