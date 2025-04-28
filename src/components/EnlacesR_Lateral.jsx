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
      <style jsx global>{`
        .image-container {
          width: 100%;
          max-width: 100%;
          height: auto;
          position: relative;
          overflow: hidden;
          border-radius: 8px;
          margin: 0 auto;
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
      `}</style>
      <Link href={link} className="block h-full w-full flex justify-center">
        <div className="border-0 tablet:border border-slate-300 tablet:shadow-none rounded-none tablet:rounded-lg h-full p-2 tablet:p-8 flex flex-col carousel-card w-full max-w-[300px] letras:max-w-[360px] ofertaEdu:max-w-[400px] tablet:max-w-[1150px]">
          <div className="image-container mb-4">
            <img
              src={imageSrc}
              alt={title}
              className="w-full rounded-lg"
            />
          </div>
          <div className="flex flex-col justify-between flex-grow">
            <h3 className="mt-4 px-2 tablet:px-5 text-center text-[16px] tablet:text-[22px] text-[#333334] font-medium h-[32px] mb-8">
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
    </>
  );
};

export default Card;