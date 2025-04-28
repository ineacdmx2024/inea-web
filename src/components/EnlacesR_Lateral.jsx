"use client";
import Link from "next/link";

const truncateText = (text, maxLetters) => {
  if (text.length > maxLetters) {
    return text.slice(0, maxLetters) + "...";
  }
  return text;
};

const Card = ({ title, imageSrc, buttonText, link }) => {
  return (
    <Link href={link} className="block h-full">
      <div className="border-0 tablet:border border-slate-300 tablet:shadow-none rounded-none tablet:rounded-lg h-full p-2 tablet:p-8 flex flex-col carousel-card">
        <div className="image-container mb-4">
          <img
            src={imageSrc}
            alt={title}
            className="w-full h-[200px] object-cover rounded-lg"
          />
        </div>
        <div className="flex flex-col justify-between flex-grow">
          <h3 className="mt-4 px-2 tablet:px-5 text-center text-[16px] tablet:text-[22px] text-[#333334] font-medium h-[32px]">
            {truncateText(title, 37)}
          </h3>
          <div className="flex justify-center mt-10 tablet:mt-4">
            <button className="bg-[#611232] text-white text-xs letras:text-[13.5px] py-2 px-4 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] font-light">
              {buttonText}
            </button>
          </div>
        </div>
      </div>
    </Link>
  );
};

export default Card;