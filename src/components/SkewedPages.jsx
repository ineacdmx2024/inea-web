"use client";

import React, { useState, useEffect } from "react";
import "./SkewedPages.scss"; // Importar el archivo SCSS

const SkewedPages = ({ datos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allowScroll, setAllowScroll] = useState(false);
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
  ]; // Array de colores

  useEffect(() => {
    if (!allowScroll) {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [allowScroll]);

  const navigateUp = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : datos.length));
  };

  const navigateDown = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage < datos.length ? prevPage + 1 : prevPage;
      if (nextPage === datos.length) {
        setAllowScroll(true);
      }
      return nextPage;
    });
  };

  useEffect(() => {
    const handleScroll = (e) => {
      if (e.deltaY > 0) {
        navigateDown();
      } else {
        navigateUp();
      }
    };

    window.addEventListener("wheel", handleScroll);
    return () => {
      window.removeEventListener("wheel", handleScroll);
    };
  }, []);

  useEffect(() => {
    const handleKeydown = (e) => {
      if (e.key === "ArrowDown") {
        navigateDown();
      } else if (e.key === "ArrowUp") {
        navigateUp();
      }
    };

    window.addEventListener("keydown", handleKeydown);
    return () => {
      window.removeEventListener("keydown", handleKeydown);
    };
  }, []);

  return (
    <div className="skw-pages sticky container mx-auto flex h-full bg-[#ffff]">
      {datos.map((pageData, index) => (
        <div
          key={index}
          className={`skw-page skw-page-${index + 1} ${
            currentPage === index + 1 ? "active" : ""
          } sticky flex flex-col md:flex-row`} // Para pantallas md, usa flex-row
        >
          {/* Lado izquierdo */}
          <div className="skw-page__half skw-page__half--left w-full md:w-1/2 p-4">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <div>
                  <h1 className="skw-page__heading">{pageData.title}</h1>
                  <p className="skw-page__description">{pageData.nom}</p>
                  <p className="skw-page__description">
                    Teléfono: {pageData.tel}
                  </p>
                  <p className="skw-page__description">
                    Email: {pageData.email}
                  </p>
                  <br />
                  <p className="skw-page__description">{pageData.map}</p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="skw-page__half skw-page__half--right w-full md:w-1/2 p-4">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                {pageData.items.map((item, idx) => (
                  <div key={idx}>
                    <svg
                      className={`h-8 w-8 ${colors[idx % colors.length]}`}
                      fill="none"
                      viewBox="0 0 24 24"
                      stroke="currentColor"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
                      />
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        strokeWidth={2}
                        d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
                      />
                    </svg>
                    <h3 className="skw-page__heading">{item.alcaldia}</h3>
                    <p>Direccion: {item.dir}</p>
                    <p>Tel: {item.atel}</p>
                    <p>{item.aemail}</p>
                    <br />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default SkewedPages;
