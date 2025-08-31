import React, { useState, useEffect } from "react";
import SearchBar from "./components/SearchBar";
import WeatherCard from "./components/WeatherCard";
import ErrorMessage from "./components/ErrorMessage";
import { getWeather } from "./services/Weather";

function App() {
  const [weather, setWeather] = useState(null);
  const [error, setError] = useState("");
  const [city, setCity] = useState("Nairobi"); // default city
  const [loading, setLoading] = useState(false);

  const fetchWeather = async (cityName) => {
    try {
      setLoading(true);
      setError("");
      const data = await getWeather(cityName);
      setWeather(data);
    } catch (err) {
      setError("City not found or network error.");
      setWeather(null);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchWeather(city);
    const interval = setInterval(() => {
      fetchWeather(city);
    }, 5 * 60 * 1000); // 5 minutes
    return () => clearInterval(interval);
  }, [city]);

  const handleSearch = (newCity) => {
    setCity(newCity);
    fetchWeather(newCity);
  };

  return (
    <div className="min-h-screen min-w-screen sm:p-6 p-4 md:p-8 flex items-center flex-col bg-blue-200 p-4">
        <h1 className="text-2xl font-bold text-center mb-6 text-blue-600">Weather Dashboard</h1>
        <SearchBar onSearch={handleSearch} />
      
      <div className="mt-4">
          {error && <ErrorMessage message={error} />}
          {loading && <p className="text-center">Loading...</p>}
          {weather && !loading && (
          <WeatherCard weather={weather} onRefresh={() => fetchWeather(city)} />
        )}
      </div>
    </div>
  );
}

export default App;
