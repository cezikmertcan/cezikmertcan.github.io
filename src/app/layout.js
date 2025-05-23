import { Raleway } from "next/font/google";

import "./globals.css";
const raleWay = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mertcan Çezik | Game & Backend Developer",
  description: "Experienced in Unity, Phaser.js, Node.js, and React. Explore my portfolio of games, apps, and backend projects.",
  keywords: [
    "Mertcan Çezik",
    "game developer",
    "backend developer",
    "Unity",
    "Phaser.js",
    "Node.js",
    "React",
    "JavaScript",
    "Turkey developer",
    "full stack"
  ],
  authors: [{ name: "Mertcan Çezik" }],
  creator: "Mertcan Çezik",
  openGraph: {
    title: "Mertcan Çezik | Game & Backend Developer",
    description: "Explore projects built with Unity, Phaser.js, React, and Node.js by Mertcan Çezik. Backend systems, games, and apps all in one place.",
    url: "http://cezikmertcan.github.io/",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    title: "Mertcan Çezik | Game & Backend Developer",
    description: "Portfolio of Mertcan Çezik — full stack backend and game development with Unity, Node.js, and React.",
    card: "summary",
    creator: "@cezikmertcan",
  },
};


export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${raleWay.variable} antialiased`}>{children}</body>
    </html>
  );
}
