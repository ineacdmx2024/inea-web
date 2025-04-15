import "./globals.css";
import { Roboto } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  subsets: ["latin"],
  weight: ["400", "500", "700"],
  variable: "--font-roboto",
});

export const metadata = {
  title: "INEA CDMX",
  description: "Educación para adultos en la Ciudad de México",
};

export default function RootLayout({ children }) {
  return (
    <html lang="es"> 
      {/* <link
        href="https://framework-gb.cdn.gob.mx/assets/styles/main.css"
        rel="stylesheet"
        key="gob-mx-css"
      />

      <script
        src="https://framework-gb.cdn.gob.mx/gobmx.js"
        key="gob-mx-js"
        defer
      ></script> */}
      <body className={`${roboto.variable}`}>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
