function displayTemperature(response) {
  console.log(response.data);
  let temperatureElement = document.querySelector("#temperature");
  let cityElement = document.querySelector("#city");
  let descriptionElement = document.querySelector("#description");
  let humidityElement = document.querySelector("#humidity");
  let windElement = document.querySelector("#wind");
  let iconElement = document.querySelector("#icon");

  temperatureElement.innerHTML = Math.round(response.data.temperature.current);
  cityElement.innerHTML = response.data.city;
  descriptionElement.innerHTML = response.data.condition.description;
  humidityElement.innerHTML = response.data.temperature.humidity;
  windElement.innerHTML = Math.round(response.data.wind.speed);
  iconElement.setAttribute("src", response.data.condition.icon_url);
}

let apiKey = "acfd102152eb04ebf39439at08oab84c";
let apiUrl = `https://api.shecodes.io/weather/v1/current?query=Lisbon&key=acfd102152eb04ebf39439at08oab84c&units=metric`;
console.log(apiUrl);
axios.get(apiUrl).then(displayTemperature);

let now = new Date();
let h1 = document.querySelector("h1");
let date = now.getDate();
let hours = now.getHours().toString().padStart(2, "0");
let minutes = now.getMinutes().toString().padStart(2, "0");
let year = now.getFullYear();

let days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];

let day = days[now.getDay()];

let months = [
  "Jan",
  "Feb",
  "Mar",
  "May",
  "April",
  "Jun",
  "Jul",
  "Aug",
  "Sep",
  "Oct",
  "Nov",
  "Dec",
];

let month = months[now.getMonth()];

h1.innerHTML = `${day}, Oct ${date}, ${hours}:${minutes}, ${year} `;

let cityName = document
  .querySelector("#city-search")
  .addEventListener("click", getDataAboutCity);

function getDataAboutCity() {
  city = document.querySelector("#city-field").value;
  apiUrl = `https://api.shecodes.io/weather/v1/current?query=${encodeURI(
    city
  )}&key=acfd102152eb04ebf39439at08oab84c&units=metric`;
  console.log(apiUrl);
  axios.get(apiUrl).then(displayTemperature);
}

function displayFahrenheitTemperature(event) {
  event.preventDefault();
  let fahrenheitTemperature = (17 * 9) / 5 + 32;
  let temperatureElement = document.querySelector("#temperature");
  temperatureElement.innerHTML = Math.round(fahrenheitTemperature);
}

let fahrenheitLink = document.querySelector("#fahreheit-link");
fahrenheitLink.addEventListener("click", displayFahrenheitTemperature);
