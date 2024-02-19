import "../globals.css";
import { Inter } from "next/font/google";
import { ReactChildren } from "@/types";
import dynamic from 'next/dynamic';
import Footer from "@/components/Footer";

const inter = Inter({ subsets: ["latin"] });
const Header = dynamic(() => import('@/components/Header'))

export default function RootLayout({children}: ReactChildren) {
  return (
    <html lang="en">
      <body className={`${inter.className} min-h-screen flex flex-col`}>
        <Header/>
        <main className="flex-1">
          {children}
        </main>
        <Footer/>
      </body>
    </html>
  );
}
