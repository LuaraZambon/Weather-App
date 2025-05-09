# 🌦️ Weather App

A simple weather forecasting application that allows the user to type in the name of a city and see real-time weather information such as temperature, humidity, wind speed, and an icon that changes according to the weather conditions.

## 🔗 Demo

You can test the project locally in your browser. Just open the `index.html` file.

## 🚀 Features

- 🔍 Search by city
- 🌡️ Current temperature display
- 🏙️ City name
- 💧 Air humidity
- 💨 Wind speed
- 🌄 Icon and background that change according to the weather
- ❌ Error handling with a message for invalid city
- 📱 Responsive and stylized interface

## 🛠️ Technologies Used

- HTML5
- CSS3
- JavaScript (Vanilla)
- [OpenWeatherMap API](https://openweathermap.org/api)

## 📦 File Structure
```
weather-app/
│
├── index.html # HTML structure of the page
├── styles.css # Application styles and layout
├── script.js # Main logic with API integration
├── images/ # Icons used (sun, rain, clouds, etc.)
│ ├── sunny.png
│ ├── cloudy.png
│ ├── rain.png
│ ├── drizzle.png
│ ├── snow.png
│ ├── humidity.png
│ └── wind.png
```


## 🧠 How It Works

1. The user enters the name of a city in the search field.  
2. On clicking the search button (or pressing Enter), the app makes a request to the OpenWeatherMap API.  
3. The received data is processed and displayed on the screen.  
4. The weather image and background change dynamically based on the weather conditions.


## 🧠 How It Works

1. The user enters the name of a city in the search field.  
2. On clicking the search button (or pressing Enter), the app makes a request to the OpenWeatherMap API.  
3. The received data is processed and displayed on the screen.  
4. The weather image and background change dynamically based on the weather conditions.

## 🧪 Example API Response

```json
{
  "name": "Zurich",
  "main": {
    "temp": 7.35,
    "humidity": 90
  },
  "wind": {
    "speed": 5.14
  },
  "weather": [
    {
      "main": "Rain"
    }
  ]
}

```

## ❗ Important
To run this project, you need a valid OpenWeatherMap API key.
Replace the value of the apiKey variable in script.js with your key:

```
const apiKey = "YOUR_KEY_HERE";
```

## 📄 License
This project is free for educational use.
