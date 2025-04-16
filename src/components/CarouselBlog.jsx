"use client";
import { useState, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Link from "next/link";

function PrevArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow before:!content-none`}
      style={{
        ...style,
        display: "block",
        left: "-45px",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="arrow-icon"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 19.5L8.25 12l7.5-7.5" />
      </svg>
    </div>
  );
}

function NextArrow(props) {
  const { className, style, onClick } = props;
  return (
    <div
      className={`${className} custom-arrow before:!content-none`}
      style={{
        ...style,
        display: "block",
        right: "-35px",
      }}
      onClick={onClick}
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        fill="none"
        viewBox="0 0 24 24"
        strokeWidth={1.5}
        stroke="currentColor"
        className="arrow-icon"
      >
        <path strokeLinecap="round" strokeLinejoin="round" d="M8.25 4.5l7.5 7.5-7.5 7.5" />
      </svg>
    </div>
  );
}

const CarouselBlog = ({ posts }) => {
  const [slidesToShow, setSlidesToShow] = useState(3);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 768) {
        setSlidesToShow(1);
      } else if (window.innerWidth < 1024) {
        setSlidesToShow(2);
      } else {
        setSlidesToShow(3);
      }
    };

    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 5000,
    arrows: true,
    nextArrow: <NextArrow />,
    prevArrow: <PrevArrow />,
    dotsClass: "slick-dots custom-dots",
  };

  return (
    <>
      <style jsx global>{`
        .custom-dots {
          bottom: -20px;
          display: flex !important;
          justify-content: center;
          padding: 0;
          margin: 0;
        }

        .custom-dots li {
          margin: 0 4px;
        }

        .custom-dots li button:before {
          font-size: 12px;
          color: #ccc;
        }

        .custom-dots li.slick-active button:before {
          color: #611232;
          transform: scale(1.2);
        }

        .custom-arrow {
          z-index: 10;
        }

        .arrow-icon {
          display: none;
        }

        @media (min-width: 768px) {
          .arrow-icon {
            display: block;
            width: 32px;
            height: 32px;
            background-color: #4b5563;
            opacity: 0.8;
            border-radius: 9999px;
            padding: 4px;
            color: white;
          }
        }

        @media (max-width: 767px) {
          .custom-arrow {
            top: 50% !important;
            transform: translateY(-50%);
          }
        }
      `}</style>

      <div className="w-full px-2 sm:px-6 lg:px-8 mt-4">
        <Slider {...settings}>
          {posts.map((post, index) => (
            <div key={index} className="px-2">
              <div className="bg-white border border-slate-200 rounded-lg shadow-sm h-full p-4 flex flex-col justify-between">
                <Link href={`/blog/${post.slug}`}>
                  <div className="cursor-pointer">
                    <img
                      src={post.image || "/placeholder.svg"}
                      alt={post.title}
                      className="w-full h-48 object-cover rounded-md mb-4"
                    />
                    <h3 className="text-base sm:text-lg font-medium text-[#333334] mb-2 leading-tight">
                      {post.title}
                    </h3>
                    <p className="text-sm text-gray-600">{post.summary}</p>
                  </div>
                </Link>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </>
  );
};

export default CarouselBlog;
