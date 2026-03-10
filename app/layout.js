import { Geist, Geist_Mono, Manrope, Playfair_Display, Libre_Baskerville } from "next/font/google";
import "./globals.css";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import DisclaimerModal from "../components/DisclaimerModal";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const manrope = Manrope({
  variable: "--font-manrope",
  subsets: ["latin"],
});

const libre_baskerville = Libre_Baskerville({
  variable: "--font-libre-baskerville",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
});

export const metadata = {
  title: "Trivantage Capital",
  description: "Trivantage Capital is a leading investment firm dedicated to providing innovative financial solutions and exceptional service to our clients. With a focus on delivering superior returns and managing risk, we offer a range of investment products and services tailored to meet the unique needs of our clients. Our team of experienced professionals is committed to helping our clients achieve their financial goals through strategic investment management and personalized advice.",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">

      <head>
        <link
          href="https://fonts.googleapis.com/css2?family=Material+Symbols+Outlined"
          rel="stylesheet"
        />
      </head>

      <body
        className={`${manrope.variable} ${libre_baskerville.variable} antialiased`}
      >
        <Navbar />
        {children}
        <Footer />
        <DisclaimerModal />
      </body>
    </html>
  );
}
