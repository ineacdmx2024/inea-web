"use client";
import React from "react";

const Card = ({ title, imageSrc, buttonText, link }) => {
  const handleButtonClick = () => {
    window.location.href = link;
  };

  return (
    <div className=" mb-8 border border-slate-300 rounded-lg h-[400px] letras:h-[440px] p-8 flex flex-col justify-between ">
      {/* mb-8 mx-auto py-3 border border-slate-300 rounded-lg min-h-[400px] letras:min-h-[420px] tablet:h-[440px] flex flex-col w-full justify-center items-center */}
      {/* <div className="mx-3 min-h-[370px] letras:min-h-[390px] flex flex-col justify-between items-center"> */}
      <div className="flex flex-col items-center h-full">
        <img
          src={imageSrc}
          alt={title}
          // w-full h-48 object-cover
          className="w-10/12 h-auto object-cover rounded-lg"
        />
        <h3 className="my-7 px-4 text-center text-[18px] letras:text-[22px] text-slate-500 font-medium capitalize">
          {title}
        </h3>
      </div>
      <button
        onClick={handleButtonClick}
        className="focus:border-[#611232] focus:bg-[#A57F2C] focus:border-[5px] 
          bg-[#611232] text-white 
          hover:border-[#611232] hover:border-2 hover:bg-white hover:text-[#611232] 
          text-xs 
         letras:text-[13.5px] py-2 px-4 rounded-full  mx-auto block"
      >
        {buttonText}
      </button>
    </div>
  );
};

export default Card;
