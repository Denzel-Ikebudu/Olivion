import type { Metadata } from "next";
import { Audiowide, Cal_Sans, Golos_Text } from "next/font/google";
import './globals.css';
import Navbar from "./components/Navbar/Navbar";

const audiowide = Audiowide({
  weight: "400",
  variable: "--font-audiowide",
  subsets: ["latin"],
})

const golostext = Golos_Text({
  weight: "400",
  variable: "--font-golos-text",
  subsets: ["latin"],
})

const calsans = Cal_Sans({
  weight: "400",
  variable: "--font-calsans",
  subsets: ["latin"],
})

export const metadata: Metadata = {
  title: "olivion",
  description: "Olivion Interior Design",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${audiowide.variable} ${golostext.variable} ${calsans.variable}`}
      >
        <Navbar />
        {children}
      </body>
    </html>
  );
}
