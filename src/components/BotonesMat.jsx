"use client";
import "../app/globals.css";
import React, { useState, useEffect } from "react";

import { Montserrat } from "next/font/google";

const montserrat = Montserrat({
  weight: ["300", "400", "500", "600", "700", "800"],
  styles: ["italic", "normal", "bold", "bold italic", "italic bold"],
  subsets: ["latin"],
});

const BotonesMat = ({ datos }) => {
  const [currentPage, setCurrentPage] = useState(null);
  const [iframeVisible, setIframeVisible] = useState(false);
  const [iframeUrl, setIframeUrl] = useState("");

  const handleMaterialClick = (indexSlides) => {
    setCurrentPage(indexSlides);
    const datosMapa = document.getElementById("datosMapaBotonesMat");
    if (datosMapa) {
      const offset = 115;
      const elementPosition = datosMapa.getBoundingClientRect().top + window.scrollY;
      const offsetPosition = elementPosition - offset;
      window.scrollTo({ top: offsetPosition, behavior: "smooth" });
    }
  };

  const materiales = datos.map((item, index) => ({ material: item.title, IndexSlides: index }));

  const ColContent = ({ items }) => {
    const scrollRef = React.useRef(null);
    const [activeIndex, setActiveIndex] = React.useState(0);
    const [isMobile, setIsMobile] = React.useState(false);
    const touchStartX = React.useRef(0);
    const touchEndX = React.useRef(0);

    React.useEffect(() => {
      const checkIsMobile = () => setIsMobile(window.innerWidth < 768);
      checkIsMobile();
      window.addEventListener("resize", checkIsMobile);
      return () => window.removeEventListener("resize", checkIsMobile);
    }, []);

    if (!items || items.length === 0) return null;
    const esFormatoRecurso = items[0]?.portada && items[0]?.linkDescarga;

    const scrollToCard = (index) => {
      const container = scrollRef.current;
      if (!container) return;
      const cardWidth = container.children[1]?.offsetWidth || 0;
      const spacing = parseInt(window.getComputedStyle(container).gap || 0);
      container.scrollTo({ left: index * (cardWidth + spacing), behavior: "smooth" });
      setActiveIndex(index);
    };

    const handleTouchStart = (e) => {
      touchStartX.current = e.touches[0].clientX;
    };

    const handleTouchMove = (e) => {
      touchEndX.current = e.touches[0].clientX;
    };

    const handleTouchEnd = () => {
      const diff = touchStartX.current - touchEndX.current;
      if (Math.abs(diff) > 50) {
        if (diff > 0 && activeIndex < items.length - 1) {
          scrollToCard(activeIndex + 1);
        } else if (diff < 0 && activeIndex > 0) {
          scrollToCard(activeIndex - 1);
        }
      }
    };

    if (esFormatoRecurso) {
      return (
        <div className="w-full">
          <div className="relative w-full overflow-hidden">
            <div
              ref={scrollRef}
              onTouchStart={isMobile ? handleTouchStart : undefined}
              onTouchMove={isMobile ? handleTouchMove : undefined}
              onTouchEnd={isMobile ? handleTouchEnd : undefined}
              onScroll={() => {
                if (!scrollRef.current) return;
                const cardWidth = scrollRef.current.children[1]?.offsetWidth || 1;
                const spacing = parseInt(window.getComputedStyle(scrollRef.current).gap || 0);
                const index = Math.round(scrollRef.current.scrollLeft / (cardWidth + spacing));
                setActiveIndex(index);
              }}
              className={`${
                isMobile
                  ? "flex overflow-x-scroll snap-x snap-mandatory scroll-smooth gap-6 px-4"
                  : "grid grid-cols-4 gap-6"
              }`}
            >
              {isMobile && <div className="shrink-0 w-[5%]" />}
              {items.map((item, index) => (
                <div
                  key={index}
                  className={`${
                    isMobile ? "w-[70%] flex-shrink-0 snap-center" : "w-[260px]"
                  } bg-white rounded-xl shadow-md p-2 flex flex-col items-center h-auto`}
                >
                  <img src={item.portada} alt={item.titulo} className="w-full h-auto object-cover rounded" />
                  <p className="mt-2 text-center text-sm font-semibold">{item.titulo}</p>
                  <div className="flex justify-between gap-2 mt-2">
                    <a
                      href={item.linkDescarga}
                      download
                      className="p-2 rounded-lg border border-gray-400 hover:bg-[#611232] hover:text-white transition-colors"
                      title="Descargar"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 16.5v1.125c0 .621.504 1.125 1.125 1.125h12.75c.621 0 1.125-.504 1.125-1.125V16.5M7.5 12l4.5 4.5m0 0l4.5-4.5m-4.5 4.5V3" />
                      </svg>
                    </a>
                    <button
                      onClick={() => {
                        setIframeUrl(item.linkVista || "https://archive.org/embed/manualzilla-id-6854751");
                        setIframeVisible(true);
                      }}
                      className="p-2 rounded-lg border border-gray-400 hover:bg-[#611232] hover:text-white transition-colors"
                      title="Ver en línea"
                    >
                      <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.574 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.574-3.007-9.963-7.178z" />
                        <path strokeLinecap="round" strokeLinejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
                      </svg>
                    </button>
                  </div>
                </div>
              ))}
              {isMobile && <div className="shrink-0 w-[5%]" />}
            </div>

            {isMobile && (
              <>
                <button
                  onClick={() => scrollToCard(Math.max(activeIndex - 1, 0))}
                  className="absolute top-1/2 left-2 -translate-y-1/2 p-2 bg-[#611232] text-white rounded-full disabled:opacity-30 z-10"
                  disabled={activeIndex === 0}
                >
                  ◀
                </button>
                <button
                  onClick={() => scrollToCard(Math.min(activeIndex + 1, items.length - 1))}
                  className="absolute top-1/2 right-2 -translate-y-1/2 p-2 bg-[#611232] text-white rounded-full disabled:opacity-30 z-10"
                  disabled={activeIndex === items.length - 1}
                >
                  ▶
                </button>
              </>
            )}

            {isMobile && (
              <div className="flex justify-center mt-4 gap-2">
                {items.map((_, idx) => (
                  <div
                    key={idx}
                    className={`h-2 w-2 rounded-full ${idx === activeIndex ? "bg-[#611232]" : "bg-gray-300"}`}
                  ></div>
                ))}
              </div>
            )}
          </div>

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

    return null;
  };

  return (
    <div className="w-full px-4 md:px-10 max-w-screen-xl mx-auto">
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
      <div id="datosMapaBotonesMat" className="w-full flex flex-col h-full bg-white mt-8">
        {datos.map((pageData, index) => (
          <div
            key={index}
            className={`w-full mb-5 ${index === currentPage ? "visible" : "hidden"}`}
          >
            <div className="text-center font-bold text-xl py-4">
              {pageData.title}
            </div>
            <div className="flex flex-col justify-center items-center p-3">
              <ColContent items={pageData.items} />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default BotonesMat;

