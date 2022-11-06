let lon;
let lat;
let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  lon = response.data.coordinates.longitude;
  lat = response.data.coordinates.latitude;

  forecast();

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute("src", response.data.condition.icon_url);
}

function search(cityName) {
  let apiKey = "acfd102152eb04ebf39439at08oab84c";
  let apiUrl = `https://api.shecodes.io/weather/v1/current?query=${cityName}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayTemperature);
}

function forecast() {
  let apiKey = "acfd102152eb04ebf39439at08oab84c";
  let apiUrl = `https://api.shecodes.io/weather/v1/forecast?lat=${lat}&lon=${lon}&key=${apiKey}&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayForecast);
}

function displayForecast(response) {
  console.log(response.data);
  let HTMLCode = "";
  response.data.daily.forEach((daily, i) => {
    // let forecastNum =  i +1;
    // let dayCard = document.querySelector("#day" + forecastNum);
    // let dayNameElm = dayCard.querySelector("div");
    // let iconElm = dayCard.querySelector("img");
    // let tempElm = dayCard.querySelector(".card-text");

    let time =  new Date(daily.time*1000);
    
    console.count("time")
    console.log(time)

   // Date.parse(daily.time);
    let dayName = days[time.getDay()];

    // dayNameElm.innerHTML = dayName; //todayData.time;
    // iconElm.setAttribute("src", daily.condition.icon_url);
    // iconElm.setAttribute("alt", daily.condition.description);
    // tempElm.innerHTML = `${Math.round(daily.temperature.day)}°C`; // (${todayData.temperature.minimum}..${todayData.temperature.maximum}°C)`;

    HTMLCode += `<div class="Monday col">
      <div class="Mon">${dayName}</div>
      <img src="${daily.condition.icon_url}" alt="${
      daily.condition.description
    }" />
      <div class="card-body">
        <p class="card-text">${Math.round(daily.temperature.day)}°C</p>
      </div>
    </div>`;
  });
  document.querySelector(".row").innerHTML = HTMLCode;
}
let now = new Date();
let h1 = document.querySelector("h1");
let date = now.getDate();
let hours = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");
let year = now.getFullYear();

let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "May",
  "Apr",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let month = months[now.getMonth()];

h1.innerHTML = `${day}, ${month}, ${date}, ${hours}:${minutes}, ${year}`;

function handleSubmit(event) {
  event.preventDefault();
  let cityInputElement = document.querySelector("#city-field");
  search(cityInputElement.value);
  console.log(cityInputElement);
}

let form = document.querySelector("#search-form");
form.addEventListener("submit", handleSubmit);

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheitTemperature = (14 * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}
let fahrenheitLink = document.querySelector("#fahreheit-celsius");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);

search("horni police");
