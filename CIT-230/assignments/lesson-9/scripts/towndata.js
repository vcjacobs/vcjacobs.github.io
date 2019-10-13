
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
        if (towns[i].name == "Preston" || towns[i].name == "Soda Springs" || towns[i].name == "Fish Haven") {
            var myArticle = document.createElement('article');
            var myPara1 = document.createElement('p');
            var myPara2 = document.createElement('p');
            var myPara3 = document.createElement('p');
            var myPara4 = document.createElement('p');

            myPara1.textContent = 'Motto: ' + towns[i].motto;
            myPara2.textContent = 'Year Founded: ' + towns[i].yearFounded;
            myPara3.textContent = 'Current Population: ' + towns[i].currentPopulation;
            myPara4.textContent = 'Average Rainfall: ' + towns[i].averageRainfall;


            myArticle.appendChild(myPara1);
            myArticle.appendChild(myPara2);
            myArticle.appendChild(myPara3);
            myArticle.appendChild(myPara4);

            section.appendChild(myArticle);
        }
    }
}
