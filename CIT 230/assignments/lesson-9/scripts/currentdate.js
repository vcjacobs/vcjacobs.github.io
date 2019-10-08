var date = new Date ();

//day of week
var weekday = new Array(7);
weekday[0] = "Sunday";
weekday[1] = "Monday";
weekday[2] = "Tuesday";
weekday[3] = "Wednesday";
weekday[4] = "Thursday";
weekday[5] = "Friday";
weekday[6] = "Saturday";

var dayOfWeek = weekday[date.getDay()];

//month
var month = new Array(12);
month[0] = "January";
month[1] = "February";
month[2] = "March";
month[3] = "April";
month[4] = "May";
month[5] = "June";
month[6] = "July";
month[7] = "August";
month[8] = "September";
month[9] = "October";
month[10] = "November";
month[11] = "December";

var monthName = month[date.getMonth()];

//day of month
var day = date.getDate();

//year
year = date.getFullYear();
document.getElementById("copyright-year").innerHTML = year;

//full date
var fullDate= dayOfWeek + ", " + day + " " + monthName + " " + year;
document.getElementById("current-date").innerHTML = fullDate;
