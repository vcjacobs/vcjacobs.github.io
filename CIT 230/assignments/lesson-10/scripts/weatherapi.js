var weatherRequest = new XMLHttpRequest();
var apiURLstring = "http://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=28fb51caeb6d3a31f0a20efed1398c03&units=imperial"

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    var weatherData = JSON.parse(weatherRequest.responseText);

    console.log(weatherData);
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
}

