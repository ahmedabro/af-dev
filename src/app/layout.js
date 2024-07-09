import { Inter, Play, Josefin_Sans } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/Navbar";
import Scroller from "@/components/Scroller";
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const play = Play({ weight: ["400", "700"], subsets: ["latin"] })
const josefin = Josefin_Sans({ subsets: ["latin"] })

export const metadata = {
  title: "A.F Dev",
  description: "Personal Portfolio",
};

export default function RootLayout({ children }) {
  return (
    <html lang="en" className="overflow-x-hidden">
      <body className={`${josefin.className} bg-BG_COLOR text-white`}>
        <div className="w-screen h-screen">
          <Navbar />
          <Scroller />
          {children}
          <Footer />

        </div>  
      </body>
    </html>
  );
}
