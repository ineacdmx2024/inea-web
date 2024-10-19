"use client";

import React from "react";
import { useEffect } from "react";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className=" bg-[#611232] h-auto">
      <div className="flex items-center justify-between py-[0.1rem] px-auto">
        <div className="mx-auto p-6 md:p-0 md:pt-4 w-[1142px]">
          <div className="md:flex justify-between">
            <div className="mb-6 md:mb-0">
              <a
                href="https://flowbite.com"
                className="flex items-center "
              >
                <img
                  src="/LogoEducacion.svg"
                  className="mr-3 h-12"
                  alt="Logo Educacion"
                />
              </a>
              <br />
              <a
                href="/"
                className="flex items-center"
              >
                <img
                  src="/LogoINEACDMX_withe.svg"
                  className="mr-3 h-[70px]"
                  alt="Logo INEA"
                />
              </a>
            </div>
            <div className="grid grid-cols-1 gap-8 sm:gap-24 sm:grid-cols-3 text-white">
              <div>
                <h2 className="mb-3 text-white dark:text-white">
                  Mapa de Sitio
                </h2>
                <ul className=" text-sm dark:text-white">
                  <li>
                    <a href="https://datos.gob.mx/">Trámites y Servicios</a>
                  </li>
                  <li>
                    <a href="/">¿Quiénes Somos?</a>
                  </li>
                  <li>
                    <a href="/">Aviso de privacidad</a>
                  </li>
                  <li>
                    <a href="/">Comité de Ética</a>
                  </li>
                  <li>
                    <a href="/">Transparencia</a>
                  </li>
                  <li>
                    <a href="/">Glosario</a>
                  </li>
                  <li>
                    <a href="/">INEA Nacional</a>
                  </li>
                  <li>
                    <a href="/">Gobierno</a>
                  </li>
                  <li>
                    <a href="/">Créditos</a>
                  </li>
                </ul>
              </div>
              <div>
                <h2 className="mb-3 text-white dark:text-white">Contacto</h2>
                <ul className=" text-sm dark:text-white">
                  <li>
                    <a href="/">Directorio</a>
                  </li>
                  <li>
                    <a href="/">Correo@inea.gob.mx</a>
                  </li>
                </ul>
              </div>
              <div className="justify-end items-end md:ml-auto">
                <h2 className="mb-4 ml-auto text-white dark:text-white">
                  Síguenos en
                </h2>
                <div className="flex mt-4 space-x-3 sm:justify-left sm:mt-0">
                  <a
                    href="/"
                    className="text-white hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path
                        fill-rule="evenodd"
                        d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                        clip-rule="evenodd"
                      />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-white hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="w-7 h-7"
                      fill="currentColor"
                      viewBox="0 0 24 24"
                      aria-hidden="true"
                    >
                      <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                    </svg>
                  </a>
                  <a
                    href="/"
                    className="text-white hover:text-gray-900 dark:hover:text-white"
                  >
                    <svg
                      className="h-8 w-8"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      stroke-width="2"
                      stroke-linecap="round"
                      stroke-linejoin="round"
                    >
                      {" "}
                      <path d="M22.54 6.42a2.78 2.78 0 0 0-1.94-2C18.88 4 12 4 12 4s-6.88 0-8.6.46a2.78 2.78 0 0 0-1.94 2A29 29 0 0 0 1 11.75a29 29 0 0 0 .46 5.33A2.78 2.78 0 0 0 3.4 19c1.72.46 8.6.46 8.6.46s6.88 0 8.6-.46a2.78 2.78 0 0 0 1.94-2 29 29 0 0 0 .46-5.25 29 29 0 0 0-.46-5.33z" />{" "}
                      <polygon points="9.75 15.02 15.5 11.75 9.75 8.48 9.75 15.02" />
                    </svg>
                  </a>
                </div>
              </div>
            </div>
          </div>

          <br />
          {/*
        <div className="sm:flex sm:items-center sm:justify-center">
          <span className="text-center text-gray-500 sm:text-center dark:text-gray-400">© 2024. All Rights Reserved.
          </span>
          <div className="flex mt-4 space-x-6 sm:justify-center sm:mt-0">
          </div>
        </div> */}
        </div>
      </div>

      <div className="pleca"></div>
    </footer>
  );
};

export default Footer;
