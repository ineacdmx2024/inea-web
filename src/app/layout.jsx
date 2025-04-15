import { Roboto } from "next/font/google";
import "./globals.css";
import { Montserrat } from "next/font/google";
import NavBar from "@/components/NavBar";
import Footer from "@/components/Footer";

const roboto = Roboto({
  weight: ["300", "400", "500", "700"],
  styles: ["italic", "normal"],
  subsets: ["latin"],
});

const montserrat = Montserrat({
  subsets: ["latin"],
  variable: "--font-montserrat", // usa variable para aplicar vía clase
  display: "swap",
});

export const metadata = {
  title: "INEA Ciudad de México",
  description: "INEA de la Ciudad de Mexico",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className={montserrat.variable}>
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
      <body className={`${roboto.className} font-montserrat`}>
        <NavBar />
        {children}
        <Footer/>
      </body>
    </html>
  );
}
