import React from "react";

export default function ErrorMessage({ message }) {
  return (
    <div className="bg-red-200 text-red-800 p-3 rounded text-center mb-4">
      {message}
    </div>
  );
}
