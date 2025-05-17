const apiKey= "Your Key";
let apiUrl = "https://api.openweathermap.org/data/2.5/weather?units=metric&q=";

const searchBox = document.querySelector(".input-container input");
const searchBtn = document.querySelector(".input-container button");
const weatherIcon = document.querySelector(".weather-icon")


async function checkWeather(city) {
    const response = await fetch(apiUrl + city +`&appid=${apiKey}`);

    if(response.status == 404) {
        document.querySelector(".error").style.display = "block";
        document.querySelector(".weather").style.display = "none";
    } else {
        let data = await response.json();

        document.querySelector(".city").innerHTML = data.name;
        document.querySelector(".temp").innerHTML = Math.round(data.main.temp) + "°C";
        document.querySelector(".humidity").innerHTML = data.main.humidity + "%";
        document.querySelector(".wind").innerHTML = data.wind.speed + "km/h";
    
        if(data.weather[0].main == "Cloudy"){
            weatherIcon.src = "images/cloudy.png";
        } else if (data.weather[0].main == "Clear"){
            weatherIcon.src = "images/sunny.png";
        } else if (data.weather[0].main == "Rain"){
            weatherIcon.src = "images/rain.png";
        } else if (data.weather[0].main == "Snow"){
            weatherIcon.src = "images/snow.png";
        } else if (data.weather[0].main == "Drizzle"){
            weatherIcon.src = "images/drizzle.png";
        }

        document.querySelector(".weather").style.display = "block";
        document.querySelector(".error").style.display = "none";
    }

}

searchBtn.addEventListener("click",()=> {
    checkWeather(searchBox.value);
})
