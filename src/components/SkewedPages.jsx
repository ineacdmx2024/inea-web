"use client";

import React, { useState, useEffect } from "react";
import "./SkewedPages.scss"; // Importar el archivo SCSS

const SkewedPages = ({ datos }) => {
  const [currentPage, setCurrentPage] = useState(1);
  const [allowScroll, setAllowScroll] = useState(false); // Flag to allow scrolling past the component
  const colors = [
    "text-red-500",
    "text-blue-500",
    "text-green-500",
    "text-yellow-500",
  ]; // Array de colores

  useEffect(() => {
    // Prevent scrolling the page beyond the sticky component
    if (!allowScroll) {
      document.body.style.overflow = "hidden"; // Lock scroll
    } else {
      document.body.style.overflow = "auto"; // Unlock scroll
    }

    return () => {
      document.body.style.overflow = "auto"; // Clean up
    };
  }, [allowScroll]);

  const navigateUp = () => {
    setCurrentPage((prevPage) => (prevPage > 1 ? prevPage - 1 : datos.length));
  };

  const navigateDown = () => {
    setCurrentPage((prevPage) => {
      const nextPage = prevPage < datos.length ? prevPage + 1 : prevPage;
      // When on the last page, allow scrolling beyond the component
      if (nextPage === datos.length) {
        setAllowScroll(true);
      }
      return nextPage;
    });
  };

  // Handle scroll event for navigation
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

  // Handle keyboard navigation
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
    <div className="skw-pages sticky container mx-auto flex h-full">
      {datos.map((pageData, index) => (
        <div
          key={index}
          className={`skw-page skw-page-${index + 1} ${
            currentPage === index + 1 ? "active" : ""
          } sticky flex flex-col`}
        >
          {/* Lado izquierdo */}
          <div className="skw-page__half skw-page__half--left sticky top-[300px]">
            <div className="skw-page__skewed ">
              <div className="skw-page__content ">
                <div className="mx-auto">
                  <h1 className="skw-page__heading">{pageData.title}</h1>
                  <p className="skw-page__description">{pageData.nom}</p>
                  <p className="skw-page__description">
                    Teléfono: {pageData.tel}
                  </p>
                  <p className="skw-page__description">
                    Email: {pageData.email}
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* Lado derecho */}
          <div className="skw-page__half skw-page__half--right">
            <div className="skw-page__skewed">
              <div className="skw-page__content">
                <div className="mx-auto">
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
        </div>
      ))}
    </div>
  );
};

export default SkewedPages;
