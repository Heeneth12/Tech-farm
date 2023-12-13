import React, { useState, useEffect } from "react";
import Chart from "chart.js/auto"; // Import Chart.js

function WeatherData() {
  const [city, setCity] = useState("");
  const [weatherData, setWeatherData] = useState(null);

  // Initialize chart references
  const temperatureChartRef = React.createRef();
  const rainPredictionChartRef = React.createRef();

  useEffect(() => {
    if (weatherData) {
      // Create temperature chart
      new Chart(temperatureChartRef.current, {
        type: "line",
        data: {
          labels: weatherData.list.map((entry) =>
            new Date(entry.dt * 1000).toLocaleDateString()
          ),
          datasets: [
            {
              label: "Temperature (°C)",
              data: weatherData.list.map((entry) => entry.main.temp),
              borderColor: "blue",
              fill: false,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });

      // Create rain prediction chart
      new Chart(rainPredictionChartRef.current, {
        type: "bar",
        data: {
          labels: weatherData.list.map((entry) =>
            new Date(entry.dt * 1000).toLocaleDateString()
          ),
          datasets: [
            {
              label: "Rainfall Prediction (mm)",
              data: weatherData.list.map((entry) =>
                entry.rain ? entry.rain["3h"] : 0
              ),
              backgroundColor: "rgba(0, 123, 255, 0.6)",
              borderColor: "rgba(0, 123, 255, 1)",
              borderWidth: 1,
            },
          ],
        },
        options: {
          responsive: true,
          maintainAspectRatio: false,
        },
      });
    }
  }, [weatherData]);

  async function getWeather() {
    const apiKey = "c4422e8bfaa0fe2c56a3d8deb9c23d34";
    const apiUrl = `https://api.openweathermap.org/data/2.5/forecast?q=${city}&cnt=28&units=metric&appid=${apiKey}`;

    try {
      const response = await fetch(apiUrl);
      const data = await response.json();
      setWeatherData(data);
    } catch (error) {
      console.error("Error fetching weather data:", error);
    }
  }

  return (
    <div
      className="w-7/10 relative mx-auto bg-blue-100 p-8 rounded-lg shadow-md"
      style={{
        width: "70%",
      }}
    >
      <h1 className="text-3xl font-bold mb-4">Weather Forecast</h1>
      <div>
        <input
          type="text"
          style={{
            borderTopLeftRadius: "12px",
            borderBottomLeftRadius: "12px",
            borderTopRightRadius: "0px",
            borderBottomRightRadius: "0px",
            backgroundColor: "#eeee",
            borderColor: "green",
            width: "40%",
            verticalAlign: "middle",
          }}
          placeholder="Enter city name"
          value={city}
          onChange={(e) => setCity(e.target.value)}
          className="p-2 border border-gray-300 rounded-md text-lg focus:outline-none"
        />
        <button
          onClick={getWeather}
          className="p-2 bg-blue-500 text-white rounded-md text-lg cursor-pointer transition duration-200 hover:bg-blue-700"
        >
          Get Weather
        </button>
      </div>

      {weatherData && (
        <div id="weatherData" className="text-center mt-4">
          <h2 className="text-2xl mb-4">Weather Forecast for {city}</h2>
          <ul className="temp list-none max-w-sm p-5 bg-white rounded-md shadow-md mx-auto">
            <li>Temperature: {weatherData.list[0].main.temp}°C</li>
            <li>
              Rainfall:{" "}
              {weatherData.list[0].rain ? weatherData.list[0].rain["3h"] : 0}%
            </li>
            <li>Humidity: {weatherData.list[0].main.humidity}%</li>
          </ul>
        </div>
      )}

      <div id="temperatureChartContainer" className="mt-8 h-64">
        <canvas
          ref={temperatureChartRef}
          className="border border-gray-300 rounded-md w-full h-full"
        />
      </div>

      <div id="rainPredictionChartContainer" className="mt-8 h-64">
        <canvas
          ref={rainPredictionChartRef}
          className="border border-gray-300 rounded-md w-full h-full"
        />
      </div>
    </div>
  );
}

export default WeatherData;
