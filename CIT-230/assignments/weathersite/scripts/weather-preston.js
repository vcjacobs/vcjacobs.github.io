//Weather Summary
var weatherRequest = new XMLHttpRequest();
var apiURLstring = "https://api.openweathermap.org/data/2.5/weather?id=5604473&APPID=28fb51caeb6d3a31f0a20efed1398c03&units=imperial"

weatherRequest.open('GET', apiURLstring, true);
weatherRequest.send();

weatherRequest.onload =  function () {
    var weatherData = JSON.parse(weatherRequest.responseText);

    //console.log(weatherData);
    document.getElementById("weather-condition").innerHTML = weatherData.weather[0].main;
    document.getElementById("current-temp").innerHTML = weatherData.main.temp;
    document.getElementById("wind-speed").innerHTML = weatherData.wind.speed;
    document.getElementById("humidity").innerHTML = weatherData.main.humidity;
}

//5 Day Forecast
var forecastRequest = new XMLHttpRequest();
var apiForecastString = "https://api.openweathermap.org/data/2.5/forecast?id=5604473&APPID=28fb51caeb6d3a31f0a20efed1398c03&units=imperial"

forecastRequest.open('GET', apiForecastString, true);
forecastRequest.send();

forecastRequest.onload =  function () {
    var forecastData = JSON.parse(forecastRequest.responseText);

    //console.log(forecastData);
    // Day of Week
    var d = new Date();
    var weekday = new Array(7);
    weekday[0] = "Sun";
    weekday[1] = "Mon";
    weekday[2] = "Tue";
    weekday[3] = "Wed";
    weekday[4] = "Thu";
    weekday[5] = "Fri";
    weekday[6] = "Sat";

    var dayOfWeek = weekday[d.getDay()];
    
    document.getElementById('day1Name').innerHTML = dayOfWeek;
    dayOfWeek = weekday[(d.getDay()+ 1) % 7];
    document.getElementById('day2Name').innerHTML = dayOfWeek;
    dayOfWeek = weekday[(d.getDay()+ 2) % 7];
    document.getElementById('day3Name').innerHTML = dayOfWeek;
    dayOfWeek = weekday[(d.getDay()+ 3) % 7];
    document.getElementById('day4Name').innerHTML = dayOfWeek;
    dayOfWeek = weekday[(d.getDay()+ 4) % 7];
    document.getElementById('day5Name').innerHTML = dayOfWeek;

    //Weather Icon

    //Temperatures
    document.getElementById('day1Temp').innerHTML = forecastData.list[0].main.temp;
    document.getElementById('day2Temp').innerHTML = forecastData.list[1].main.temp;
    document.getElementById('day3Temp').innerHTML = forecastData.list[2].main.temp;
    document.getElementById('day4Temp').innerHTML = forecastData.list[3].main.temp;
    document.getElementById('day5Temp').innerHTML = forecastData.list[4].main.temp;

}
