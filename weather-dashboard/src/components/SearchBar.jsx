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
      <p className="text-black font-bold text-bold">Enter city:</p>
      <input
        type="text"
        value={city}
        onChange={(e) => setCity(e.target.value)}
        placeholder="Nairobi"
        className="w-full max-w-xs p-2 border border-black rounded-2xl text-black placeholder-black"
      />
      <button type="submit" className="bg-blue-500 hover:bg-blue-600 active:bg-blue-700 text-white font-semibold px-4 rounded transition-colors duration-200">
        Search
      </button>
    </form>
  );
}
