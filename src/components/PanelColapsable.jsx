"use client";
import React, { useState, useRef } from "react";

const CollapsiblePanel = ({ title, content, imageSrc }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [height, setHeight] = useState("0px");
  const contentRef = useRef(null);

  const togglePanel = () => {
    setIsOpen(!isOpen);
    setHeight(isOpen ? "0px" : `${contentRef.current.scrollHeight}px`);
  };

  return (
    <div className="w-full mb-5">
      <div
        className="flex justify-between items-center w-full p-3 text-lg font-medium text-left bg-gray-200 rounded-lg cursor-pointer"
        onClick={togglePanel}
      >
        {/* Usamos grid para dividir en 1/3 y 2/3 */}
        <div className="grid grid-cols-1  md:grid-cols-3 items-center w-full">
          {/* Imagen ocupa 1/3 */}
          {imageSrc && (
            <img
              src={imageSrc}
              alt="Icon"
              className="w-full aspect-[330/220] md:mb-0 mb-2 rounded-md"
            />
          )}

          {/* Título ocupa 2/3 */}
          <div className="col-span-1 md:col-span-2 pl-4">
            <span>{title}</span>
          </div>
        </div>

        {/* Ícono SVG de colapsar/expandir
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="3"
          stroke="currentColor"
          className={`w-7 h-7 transform transition-transform duration-300 ${
            isOpen ? "rotate-180" : "rotate-0"
          } ml-3 font-bold`}
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            className="font-bold"
            d="M19.5 12l-7.5-7.5L4.5 12"
          />
        </svg> */}
        <button onClick={togglePanel}>
          {isOpen ? (
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-7 h-7 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              } ml-3 font-bold`}
            >
              <path
                fillRule="evenodd"
                d="M4.25 12a.75.75 0 0 1 .75-.75h14a.75.75 0 0 1 0 1.5H5a.75.75 0 0 1-.75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          ) : (
            <svg
              strokeWidth="4"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              className={`w-7 h-7 transform transition-transform duration-300 ${
                isOpen ? "rotate-180" : "rotate-0"
              } ml-3 font-bold`}
            >
              <path
                fillRule="evenodd"
                d="M12 3.75a.75.75 0 0 1 .75.75v6.75h6.75a.75.75 0 0 1 0 1.5h-6.75v6.75a.75.75 0 0 1-1.5 0v-6.75H4.5a.75.75 0 0 1 0-1.5h6.75V4.5a.75.75 0 0 1 .75-.75Z"
                clipRule="evenodd"
              />
            </svg>
          )}
        </button>
      </div>

      {/* Contenedor del contenido colapsable con transición */}
      <div
        ref={contentRef}
        style={{ maxHeight: `${height}`, transition: "max-height 0.8s ease" }}
        className="overflow-hidden"
      >
        <div className=" pt-4 pb-2 text-lg text-gray-700">{content}</div>
      </div>
    </div>
  );
};

export default CollapsiblePanel;
