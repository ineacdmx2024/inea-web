"use client";
import React from "react";

const Card = ({ title, imageSrc, buttonText, link }) => {
  const handleButtonClick = () => {
    window.location.href = link;
  };

  return (
    <div className="bg-white rounded-lg shadow-lg overflow-hidden p-6 w-60 m-2">
      <img
        src={imageSrc}
        alt={title}
        className="w-full h-48 object-cover"
      />
      <h3 className="text-xl font-semibold mt-4 mb-2 text-center">{title}</h3>
      <div className="flex justify-center mt-4">
        <button
          onClick={handleButtonClick}
          className="bg-red-600 text-white px-4 py-2 rounded-full hover:bg-red-700 focus:outline-none"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
