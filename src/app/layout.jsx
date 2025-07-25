import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

export const metadata = {
  title: "INEA Ciudad de México",
  description: "INEA de la Ciudad de Mexico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <head>
        <link href="https://fonts.googleapis.com/css2?family=Montserrat&display=swap" rel="stylesheet" />
      </head>
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
      <body className={roboto.className}>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
