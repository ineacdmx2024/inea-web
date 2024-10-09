"use client";
import React from "react";

const Card = ({ title, imageSrc, buttonText, link }) => {
  const handleButtonClick = () => {
    window.location.href = link;
  };

  return (
    <div className=" mb-8 mx-auto py-3 border border-slate-300 rounded-lg min-h-[300px] letras:min-h-[360px] tablet:h-[300px] flex flex-col w-full justify-center items-center">
      {/*  */}
      <div className="mx-3 min-h-[310px] letras:min-h-[340px] flex flex-col justify-between items-center">
        <img
          src={imageSrc}
          alt={title}
          // w-full h-48 object-cover
          className="w-60 h-48 object-cover rounded-lg"
        />
        <h3 className="my-4 px-4 text-center text-[22px] text-slate-500 font-medium capitalize">
          {title}
        </h3>
        <button
          onClick={handleButtonClick}
          className="bg-[#611232] text-white hover:bg-[#611232] text-xs letras:text-[13.5px] px-4 py-2 rounded-full mx-auto block focus:outline-none"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
