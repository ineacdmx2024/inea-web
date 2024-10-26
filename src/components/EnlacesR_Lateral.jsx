"use client";
import React from "react";

const Card = ({ title, imageSrc, buttonText, link }) => {
  const handleButtonClick = () => {
    window.location.href = link;
  };

  return (
    <div className=" mb-8 mx-auto py-3 border border-slate-300 rounded-lg min-h-[200px] letras:min-h-[300px] tablet:h-[240px] flex flex-col w-full justify-center items-center">
      {/*  */}
      <div className="mx-3 min-h-[180px] letras:min-h-[280px] flex flex-col justify-between items-center">
        <img
          src={imageSrc}
          alt={title}
          // w-full h-48 object-cover
          className="w-60 h-48 object-cover rounded-lg"
        />
        <h3 className="my-3 px-4 text-center text-[22px] text-slate-500 font-medium capitalize">
          {title}
        </h3>
        <button
          onClick={handleButtonClick}
          className="focus:border-[#611232] focus:bg-[#A57F2C] focus:border-[5px] 
          bg-[#611232] text-white 
          hover:border-[#611232] hover:border-2 hover:bg-white hover:text-[#611232] 
          text-xs 
          letras:text-[13.5px] px-4 py-2 rounded-full mx-auto block focus:outline-none"
        >
          {buttonText}
        </button>
      </div>
    </div>
  );
};

export default Card;
