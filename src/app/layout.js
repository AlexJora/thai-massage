import "./globals.css";
import Navigation from "@/components/Navigation";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { Libre_Franklin, Montserrat } from "next/font/google";


const libre_franklin = Libre_Franklin({
  weight: '400',
  subsets: ["latin"],
  display: "swap",
  variable: "--font-libre-franklin",
});

const montserrat = Montserrat({
  weight: '500',
  subsets: ["latin"],
  display: "swap",
  variable: "--font-montserrat",
});


export default function RootLayout({ children }) {
  return (
    <html
      lang="en"
      className={`${libre_franklin.variable} ${montserrat.variable}`}
    >
      <body>
        <Header />
        <Navigation />

        {children}
        <Footer />
      </body>
    </html>
  );
}
