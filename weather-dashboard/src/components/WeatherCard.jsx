import React from "react";

export default function WeatherCard({ weather, onRefresh }) {
  if (!weather) return null;

  return (
    <div className="border p-4 rounded w-full max-w-md mx-auto text-center">
      <h2 className="text-xl font-bold text-blue-700 mb-2">
        {weather.name}, {weather.sys?.country}
      </h2>
      <p className="text-4xl font-semibold text-gray-800">{Math.round(weather.main?.temp)}°C</p>
      <p className="capitalize text-1g text-gray-600 mb-4">{weather.weather?.[0].description}</p>
      {weather.weather?.[0].icon && (
        <img
          src={`https://openweathermap.org/img/wn/${weather.weather[0].icon}@2x.png`}
          alt="weather icon"
          className="mx-auto mb-4"
        />
      )}
      <p className="text-2xl text-gray-800">Humidity: {weather.main?.humidity}%</p>
      <p className="text-2xl text-gray-800">Wind: {weather.wind?.speed} m/s</p>

      <button
        onClick={onRefresh}
        className="mt-6 bg-blue-600 hover:bg-blue-700 text-white font-semibold px-5 py-2 rounded-lg shadow-md transition duration-200"
      >
        Refresh
      </button>
    </div>
  );
}
