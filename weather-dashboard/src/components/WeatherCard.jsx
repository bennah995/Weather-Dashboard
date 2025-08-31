import React from "react";

export default function WeatherCard({ weather, onRefresh }) {
  if (!weather) return null;

  return (
    <div className="border p-4 rounded w-full max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold mb-2">
        {weather.name}, {weather.sys?.country}
      </h2>
      <p className="text-4xl">{Math.round(weather.main?.temp)}°C</p>
      <p className="capitalize">{weather.weather?.[0].description}</p>
      {weather.weather?.[0].icon && (
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="mx-auto"
        />
      )}
      <p>Humidity: {weather.main?.humidity}%</p>
      <p>Wind: {weather.wind?.speed} m/s</p>

      <button
        onClick={onRefresh}
        className="mt-4 bg-green-500 text-white px-3 py-1 rounded"
      >
        Refresh
      </button>
    </div>
  );
}
