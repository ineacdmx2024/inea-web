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
    <Link href={link}>
      <div className="mb-8 border border-slate-300 rounded-lg h-[420px] p-5 pt-8 flex flex-col items-center mx-4">
        <div className="flex flex-col items-center h-[340px]">
          <div className="w-[300px] h-[200px] overflow-hidden rounded-lg">
            <img
              src={imageSrc}
              alt={title}
              className="w-full h-full object-cover"
            />
          </div>
          <h3 className="h-16 overflow-hidden mt-4 px-4 text-center text-[18px] font-medium text-[#333334]">
            {truncateText(title, 35)}
          </h3>
        </div>
        <button
          className="bg-[#611232] text-white 
          hover:border-[#611232] hover:border-2 hover:bg-white hover:text-[#611232] 
          text-xs py-2 px-4 rounded-full mx-auto block mt-4"
        >
          {buttonText}
        </button>
      </div>
    </Link>
  );
};

export default Card;
