import { Raleway } from "next/font/google";

import "./globals.css";
const raleWay = Raleway({
  variable: "--font-raleway",
  subsets: ["latin"],
});

export const metadata = {
  title: "Mertcan Çezik | Game & Backend Developer",
  description: "Game and backend developer who has some experience in Unity, Phaser.js, Node.js, and React.",
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
    "full stack",
    "backend developer",
  ],
  authors: [{ name: "Mertcan Çezik" }],
  creator: "Mertcan Çezik",
  openGraph: {
    title: "Mertcan Çezik | Game & Backend Developer",
    description: "Game and backend developer who has some experience in Unity, Phaser.js, Node.js, and React.",
    url: "http://cezikmertcan.github.io/",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    title: "Mertcan Çezik | Game & Backend Developer",
    description: "Game and backend developer who has some experience in Unity, Phaser.js, Node.js, and React.",
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
