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
