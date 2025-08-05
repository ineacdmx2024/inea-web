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
    <>
      {/* <style jsx global>{`
        .image-container {
          width: 100%;
          max-width: 100%;
          height: auto;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          margin: 0 auto;
          background-color: #f5f5f5;
        }
        
        .image-container img {
          width: 100%;
          height: 100%;
          object-fit: cover;
        }
        
        @media (max-width: 767px) {
          .image-container {
            width: 100%;
            height: 0;
            padding-bottom: 75%;
          }
          
          .image-container img {
            position: absolute;
            top: 0;
            left: 0;
          }
        }
      `}</style> */}

      <Link href={link} className="block h-full w-full">
        <div className="bg-white border border-slate-200 rounded-lg h-full p-8 flex flex-col w-[362px] h-[450px]max-w-[800px] letras:max-w-[900px] ofertaEdu:max-w-[1000px] tablet:max-w-[1800px]">
          <div className="max-w-full mb-6">
            <img
              src={imageSrc}
              alt={title}
              className="max-w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <h3 className="text-center text-[18px] tablet:text-[22px] text-[#333334] font-medium mt-4 mb-6">
              {truncateText(title, 37)}
            </h3>
            <div className="flex justify-center mt-4">
              <button className="bg-[#611232] text-white text-sm py-2.5 px-6 rounded-full hover:bg-white hover:text-[#611232] border-2 border-[#611232] font-medium transition-all duration-300">
                {buttonText}
              </button>
            </div>
          </div>
        </div>
      </Link>
    </>
  );
};

export default Card;
