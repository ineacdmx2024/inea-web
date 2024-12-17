"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const Breadcrumb = () => {
  const pathname = usePathname();
  const pathArray = pathname.split("/").filter((path) => path);

  const generateBreadcrumbTitle = (segment) => {
    const maxLenght = 30;

    const formatoSegment = segment
      .replace(/-/g, " ")
      .toLowerCase()
      .replace(/^\w/, (l) => l.toUpperCase());

    switch (segment) {
      // Tu lógica para generar los títulos
      // ...
      default:
        return formatoSegment.length > maxLenght
          ? formatoSegment.slice(0, maxLenght) + "..."
          : formatoSegment;
    }
  };

  return (
    <nav className="text-[17px] text-gray-700 mb-4">
      <ol className="list-none p-0 flex flex-wrap">
        <li className="mx-0">
          <Link
            href="/"
            className="flex items-center text-gray-500 hover:underline"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth="1.5"
              stroke="currentColor"
              className="w-5 h-5 mr-2"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25"
              />
            </svg>
            Inicio
          </Link>
        </li>
        {pathArray.map((segment, index) => {
          const href = "/" + pathArray.slice(0, index + 1).join("/");
          return (
            <li
              key={index}
              className="flex items-center"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 24 24"
                strokeWidth={1.5}
                stroke="currentColor"
                className="w-5 h-5 mx-2"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="m8.25 4.5 7.5 7.5-7.5 7.5"
                />
              </svg>
              <Link
                href={href}
                className="text-gray-500 hover:underline"
              >
                {generateBreadcrumbTitle(segment)}
              </Link>
            </li>
          );
        })}
      </ol>
    </nav>
  );
};

export default Breadcrumb;
