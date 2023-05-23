function updateTime(){
let firstCityElement = document.querySelector("#first-city");
let firstCityDate = firstCityElement.querySelector(".date");
let firstCityTime = firstCityElement.querySelector(".time");

let firstCityTimeElement = moment().tz("Europe/Lisbon");
firstCityDate.innerHTML = firstCityTimeElement.format("MMMM Do, YYYY");
firstCityTime.innerHTML = firstCityTimeElement.format("h:mm:ss [<small>]A[</small>]")

let secondCityElement = document.querySelector("#second-city");
let secondCityDate = secondCityElement.querySelector(".date");
let secondCityTime = secondCityElement.querySelector(".time");

let secondCityTimeElement = moment().tz("Europe/Rome");
secondCityDate.innerHTML = secondCityTimeElement.format("MMMM Do, YYYY");
secondCityTime.innerHTML = secondCityTimeElement.format("h:mm:ss [<small>]A[</small>]")

let thirdCityElement = document.querySelector("#third-city");
let thirdCityDate = thirdCityElement.querySelector(".date");
let thirdCityTime = thirdCityElement.querySelector(".time");

let thirdCityTimeElement = moment().tz("Australia/Sydney");
thirdCityDate.innerHTML = thirdCityTimeElement.format("MMMM Do, YYYY");
thirdCityTime.innerHTML = thirdCityTimeElement.format("h:mm:ss [<small>]A[</small>]")
}

updateTime();
setInterval(updateTime, 1000);