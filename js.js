function displayTemperature (response) {
console.logc(response.data) 


}

let apiKey=  "4c9b53e4f8f5eb00df5915bdca340605";
let apiUrl = `https://api.openweathermap.org/data/2.5/weather?q=Prague&appid=${apiKey}&units=metric`;
console.log (apiUrl);
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


 

