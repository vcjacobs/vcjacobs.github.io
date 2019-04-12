
var section = document.querySelector('section');

var requestURl = 'https://byui-cit230.github.io/weather/data/towndata.json';
var request = new XMLHttpRequest();
request.open('GET', requestURl);
request.responseType = 'json';
request.send();

request.onload = function () {
    var townData = request.response;
    showTowns(townData);
}

function showTowns(jsonObj) {
    var towns = jsonObj['towns'];

    for (var i = 0; i < towns.length; i++) {
        if (towns[i].name == "Fish Haven") {                 
            document.getElementById("fishhaven-motto").innerHTML = towns[i].motto;
            document.getElementById("fishhaven-year").innerHTML = towns[i].yearFounded;
            document.getElementById("fishhaven-pop").innerHTML = towns[i].currentPopulation;
            document.getElementById("fishhaven-rain").innerHTML =towns[i].averageRainfall;
        }
        else if (towns[i].name == "Preston") {
            document.getElementById("preston-motto").innerHTML = towns[i].motto;
            document.getElementById("preston-year").innerHTML = towns[i].yearFounded;
            document.getElementById("preston-pop").innerHTML = towns[i].currentPopulation;
            document.getElementById("preston-rain").innerHTML =towns[i].averageRainfall;
        }
        else if (towns[i].name == "Soda Springs") {
            document.getElementById("sodasprings-motto").innerHTML = towns[i].motto;
            document.getElementById("sodasprings-year").innerHTML = towns[i].yearFounded;
            document.getElementById("sodasprings-pop").innerHTML = towns[i].currentPopulation;
            document.getElementById("sodasprings-rain").innerHTML =towns[i].averageRainfall;
        }
    }
}
