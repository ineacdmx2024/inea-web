import { Roboto } from "next/font/google";
import "./globals.css";
import NavBar from "@/components/NavBar";
import Ubicacion from "@/components/Ubicacion";

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
        <Ubicacion />
      </body>
    </html>
  );
}
