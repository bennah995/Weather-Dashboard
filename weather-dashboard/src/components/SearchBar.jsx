import React, { useState } from "react";

export default function SearchBar({ onSearch }) {
  const [city, setCity] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (city.trim() !== "") {
      onSearch(city);
      setCity("");
    }
  };

  return (
    <form onSubmit={handleSubmit} className="flex gap-2 justify-center mb-4">
      <p className="text-gray-700 text-bold">Enter city:</p>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nairobi"
        className="w-full max-w-xs p-2 border border-gray-300 rounded-2g placeholder-gray-400 focus:outline-none focus:ring-2 focus:ring-blue-500"
      />
      <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
        Search
      </button>
    </form>
  );
}
