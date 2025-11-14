import { Geist, Geist_Mono, Inter, Anek_Latin } from "next/font/google";
import localFont from "next/font/local";
import "./globals.css";


const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const anekLatin = Anek_Latin({
  variable: "--font-anek-latin",
  subsets: ["latin"],
});

const conthrax = localFont({
  src: "../public/fonts/Conthrax.otf",
  variable: "--font-conthrax",
  weight: "600",
});


export const metadata = {
  title: "Topiko | Digital Business Solutions",
  description: "Topiko helps businesses build their digital identity.",
  robots:{
    index:false,
    follow:false
  }
};

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={` ${geistSans.variable}
          ${geistMono.variable}
          ${inter.variable}
          ${anekLatin.variable}
          ${conthrax.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
