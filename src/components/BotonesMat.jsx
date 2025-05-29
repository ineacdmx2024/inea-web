"use client";
import React, { useState } from "react";
import "../app/globals.css";
import Carousel from "./Carousel";

import { Noto_Sans } from "next/font/google";
import "./BotonesMat.css";

const notoSans = Noto_Sans({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

const BotonesMat = ({ datos }) => {
  const materiales = datos.map((item, index) => ({
    material: item.title,
    IndexSlides: index,
  }));

  const [iframeUrl, setIframeUrl] = useState("");
  const [iframeVisible, setIframeVisible] = useState(false);

  const ColContent = ({ items }) => {
    const [isMobile, setIsMobile] = React.useState(false);

    React.useEffect(() => {
      const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
      checkIsMobile();
      window.addEventListener("resize", checkIsMobile);
      return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    if (!items || items.length === 0) return null;
    const esFormatoRecurso = items[0]?.portada && items[0]?.linkDescarga;

    if (esFormatoRecurso) {
      return (
        <div className="w-full">
          {!isMobile ? (
            <div className="grid grid-cols-4 gap-4 justify-start px-0">
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`card ${isMobile ? "card-full" : ""}`}
                >
                  <div className="image">
                    <img
                      src={item.portada}
                      alt={item.titulo}
                      className="w-full h-auto object-cover rounded-lg shadow-sm border"
                      style={{
                        borderColor: "#a27d36",
                        borderWidth: "3px",
                        borderStyle: "solid",
                      }}
                    />
                    <div className="pin">PDF</div>
                  </div>
                  <p className="title mt-2 text-center text-sm font-semibold">
                    {item.titulo}
                  </p>
                  <div className="btns">
                    <a
                      href={item.linkDescarga}
                      download
                      className="boton p-2 rounded-lg border border-gray-400 hover:bg-[#611232] hover:text-white transition-colors"
                      title="Descargar"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 16.5v1.125c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3"
                        />
                      </svg>
                    </a>
                    <button
                      onClick={() => {
                        setIframeUrl(
                          item.linkVista ||
                            "https://archive.org/embed/manualzilla-id-6854751"
                        );
                        setIframeVisible(true);
                      }}
                      className=" boton p-2 rounded-lg border border-gray-400 hover:bg-[#611232] hover:text-white transition-colors"
                      title="Ver en línea"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-5 h-5"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.574 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.574-3.007-9.963-7.178z"
                        />
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                        />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
            </div>
          ) : (
            <Carousel>
              {items.map((item, index) => (
                <div key={index} className="embla__slide">
                  <div className={`card embla__slide__number`}>
                    <div className="image">
                      <img
                        src={item.portada}
                        alt={item.titulo}
                        className="w-full h-auto object-cover rounded-lg shadow-sm border"
                        style={{
                          borderColor: "#a27d36",
                          borderWidth: "3px",
                          borderStyle: "solid",
                        }}
                      />
                      <div className="pin">PDF</div>
                    </div>
                    <p className="title mt-2 text-center text-sm font-semibold">
                      {item.titulo}
                    </p>
                    <div className="btns">
                      <a
                        href={item.linkDescarga}
                        download
                        className="boton p-2 rounded-lg border border-gray-400 hover:bg-[#611232] hover:text-white transition-colors"
                        title="Descargar"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M4.5 16.5v1.125c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3"
                          />
                        </svg>
                      </a>
                      <button
                        onClick={() => {
                          setIframeUrl(
                            item.linkVista ||
                              "https://archive.org/embed/manualzilla-id-6854751"
                          );
                          setIframeVisible(true);
                        }}
                        className=" boton p-2 rounded-lg border border-gray-400 hover:bg-[#611232] hover:text-white transition-colors"
                        title="Ver en línea"
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth={1.5}
                          stroke="currentColor"
                          className="w-5 h-5"
                        >
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.574 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.574-3.007-9.963-7.178z"
                          />
                          <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"
                          />
                        </svg>
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </Carousel>
          )}

          {iframeVisible && (
            <div
              className="fixed top-0 left-0 w-full h-full bg-black bg-opacity-70 z-50 flex items-center justify-center"
              onClick={() => setIframeVisible(false)}
            >
              <div
                className="bg-white rounded-lg p-4 w-[75%] md:w-[65%] h-[70%] overflow-hidden relative"
                onClick={(e) => e.stopPropagation()}
              >
                <button
                  className="absolute top-2 right-2 text-white bg-[#611232] rounded-full p-2 z-50"
                  onClick={() => setIframeVisible(false)}
                >
                  ✕
                </button>
                <iframe
                  src={iframeUrl}
                  width="100%"
                  height="100%"
                  frameBorder="0"
                  allowFullScreen
                  className="w-full h-full"
                ></iframe>
              </div>
            </div>
          )}
        </div>
      );
    }
  };

  return (
    <div className="w-full max-w-full px-0">
      <div className="flex flex-wrap">
        {materiales.map((elemento) => (
          <button
            key={elemento.IndexSlides}
            type="button"
            className="text-[#611232] rounded-lg hover:text-white border border-[#611232] hover:bg-[#611232] focus:ring-4 focus:outline-none focus:ring-[#A57F2C] focus:bg-[#611232] focus:text-white font-medium px-5 py-2.5 text-center me-2 mb-2 text-lg flex items-center justify-center gap-2"
            onClick={() => handleMaterialClick(elemento.IndexSlides)}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-5 h-5"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M4.5 16.5v1.125c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3"
              />
            </svg>
            {elemento.material}
          </button>
        ))}
      </div>
      <div
        id="datosMapaBotonesMat"
        className="w-full flex flex-col h-full bg-white mt-8"
      >
        {datos.map((pageData, index) => (
          <div key={index} className="w-full mb-5">
            <div className="text-center font-bold text-3xl py-4 text-[#333334] patria">
              Materiales para el {pageData.title}
            </div>
            <div className="content">
              <ColContent items={pageData.items} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotonesMat;
