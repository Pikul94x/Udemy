const input = document.querySelector("input");
const button = document.querySelector("button");
const cityName = document.querySelector(".city-name");
const warning = document.querySelector(".warning");
const photo = document.querySelector(".photo");
const weather = document.querySelector(".weather");
const temperature = document.querySelector(".temperature");
const humidity = document.querySelector(".humidity");

const API_LINK = "https://api.openweathermap.org/data/2.5/weather?q=";
const API_KEY = "&appid=bc0c589d9a6373b451d89a195d58a00a";
const API_UNITS = "&units=metric";

const getWeather = () => {
	const city = input.value || "kraków";
	const URL = API_LINK + city + API_KEY + API_UNITS;

	axios
		.get(URL)
		.then(res => {
			const temp = res.data.main.temp;
			const hum = res.data.main.humidity;
			const status = Object.assign({}, ...res.data.weather);

			weather.textContent = status.main;
			cityName.textContent = res.data.name;
			temperature.textContent = Math.floor(temp) + "°C";
			humidity.textContent = hum + "%";
			warning.textContent = "";
			input.value = "";

			if (status.id >= 200 && status.id < 300) {
				photo.setAttribute("src", "./images/thunderstorm.png");
			} else if (status.id >= 300 && status.id < 400) {
				photo.setAttribute("src", "./images/drizzle.png");
			} else if (status.id >= 500 && status.id < 600) {
				photo.setAttribute("src", "./images/rain.png");
			} else if (status.id >= 600 && status.id < 700) {
				photo.setAttribute("src", "./images/ice.png");
			} else if (status.id >= 700 && status.id < 800) {
				photo.setAttribute("src", "./images/fog.png");
			} else if (status.id === 800) {
				photo.setAttribute("src", "./images/sun.png");
			} else if (status.id >= 800 && status.id < 900) {
				photo.setAttribute("src", "./images/cloud.png");
			} else {
				photo.setAttribute("src", "./images/unknown.png");
			}
		})
		.catch(() => {
			warning.textContent = "Wpisz poprawną nazwe miasta";
		});
};

const enterCheck = e => {
	if (e.key === "Enter") {
		getWeather();
	}
};

input.addEventListener("keyup", enterCheck);
button.addEventListener("click", getWeather);

getWeather();
