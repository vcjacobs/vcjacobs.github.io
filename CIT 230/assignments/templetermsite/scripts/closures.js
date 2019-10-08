var requestURL = 'https://vcjacobs.github.io/assignments/templetermsite/closures.json';
var request = new XMLHttpRequest();
request.open('GET', requestURL);
request.responseType = 'json';
request.send();

request.onload = function() {
    var closureData = request.response;
    showData(closureData);
}

function showData(closureData) {
    //var data = jsonObj['temples']
    document.getElementById('saltlake-closures').innerHTML += closureData.temples[0].closures;
    
    document.getElementById('manti-closures').innerHTML += closureData.temples[1].closures;
    
    document.getElementById('idahofalls-closures').innerHTML += closureData.temples[2].closures;
    
    document.getElementById('rexburg-closures').innerHTML += closureData.temples[3].closures;
}