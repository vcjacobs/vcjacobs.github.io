var requestURl = 'https://vcjacobs.github.io/assignments/templetermsite/closures.json';
var request = new XMLHttquest();
request.open('GET', requestURl);
request.responseType = 'json';
request.send();

request.onload = function () {
    var closureData = request.response;
    findClosures(closureData);
}

function findClosures(jsonObj) {
    var closures = jsonObj['closures'];

    for (var i = 0; i < closures.length; i++) {
        if (closures[i].name == "Salt Lake") {                 
            document.getElementById("saltlake-closures").innerHTML = closures[i].closures;
        }
        else if (closures[i].name == "Manti") {
            document.getElementById("manti-closures").innerHTML = closures[i].closures;
        }
        else if (closures[i].name == "Idaho Falls") {
            document.getElementById("idahofalls-closures").innerHTML = closures[i].closures;
        }
        else if (closures[i].name == "Rexburg") {
            document.getElementById("rexburg-closures").innerHTML = closures[i].closures;
        }
    }
}
