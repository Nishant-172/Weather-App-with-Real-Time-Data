// Javascrupt code starts here
const apiKey = "YOUR_API_KEY"; // Replace with your OpenWeatherMap API key
const searchBtn = document.getElementById("search-btn");
const cityInput = document.getElementById("city-input");
const cityName = document.getElementById("city-name");
const temperature = document.getElementById("temperature");
const description = document.getElementById("description");
const details = document.getElementById("details");

searchBtn.addEventListener("click", () => {
  const city = cityInput.value.trim();
  if (city === "") {
    alert("Please enter a city name!");
    return;
  }
  getWeather(city);
});

async function getWeather(city) {
  try {
    const response = await fetch(
      `https://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
    );
    if (!response.ok) {
      throw new Error("City not found");
    }
    const data = await response.json();
    updateWeatherInfo(data);
  } catch (error) {
    alert(error.message);
  }
}

function updateWeatherInfo(data) {
  cityName.textContent = data.name;
  temperature.textContent = `${data.main.temp}°C`;
  description.textContent = data.weather[0].description;
  details.textContent = `Humidity: ${data.main.humidity}% | Wind Speed: ${data.wind.speed} km/h`;
}
// javascript code ends here