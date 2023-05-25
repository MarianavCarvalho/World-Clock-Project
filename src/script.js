function updateTime(){
    
let firstCityElement = document.querySelector("#first-city");
if(firstCityElement){
let firstCityDate = firstCityElement.querySelector(".date");
let firstCityTime = firstCityElement.querySelector(".time");

let firstCityTimeElement = moment().tz("Europe/Lisbon");
firstCityDate.innerHTML = firstCityTimeElement.format("MMMM Do, YYYY");
firstCityTime.innerHTML = firstCityTimeElement.format("h:mm:ss [<small>]A[</small>]")}


let secondCityElement = document.querySelector("#second-city");
if(secondCityElement){
let secondCityDate = secondCityElement.querySelector(".date");
let secondCityTime = secondCityElement.querySelector(".time");

let secondCityTimeElement = moment().tz("Europe/Rome");
secondCityDate.innerHTML = secondCityTimeElement.format("MMMM Do, YYYY");
secondCityTime.innerHTML = secondCityTimeElement.format("h:mm:ss [<small>]A[</small>]") }


let thirdCityElement = document.querySelector("#third-city");
if(thirdCityElement){
let thirdCityDate = thirdCityElement.querySelector(".date");
let thirdCityTime = thirdCityElement.querySelector(".time");

let thirdCityTimeElement = moment().tz("Australia/Sydney");
thirdCityDate.innerHTML = thirdCityTimeElement.format("MMMM Do, YYYY");
thirdCityTime.innerHTML = thirdCityTimeElement.format("h:mm:ss [<small>]A[</small>]")}
}

updateTime();
setInterval(updateTime, 1000);

function updateCity(event){
    let cityTimezone = event.target.value;
    if (cityTimezone === "current"){
        cityTimezone = moment.tz.guess();
    }
    let cityName = cityTimezone.replace("_", " ").split("/")[1];
    let cityTime = moment().tz(cityTimezone);

    let citiesElement = document.querySelector("#cities");
    citiesElement.innerHTML = `
    <div class="row">
    <div>
        <h2>${cityName}</h2>
        <div class="date">${cityTime.format("MMMM Do, YYYY")}</div>
    </div>
    <div class="time">${cityTime.format("h:mm:ss")}<small>${cityTime.format("A")}</small></div>
</div>
<a href="index.html">All Cities</a>
`;
}

let citiesSelect = document.querySelector("#city");
citiesSelect.addEventListener("change", updateCity);