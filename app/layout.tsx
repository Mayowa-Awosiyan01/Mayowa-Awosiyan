import type { Metadata } from "next";
import { Analytics } from "@vercel/analytics/react";
import localFont from "next/font/local";
import "./globals.css";
import NavBar from "./components/navbar";
import WelcomeSection from "./components/welcomeSection";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Mayowa Awosiyan's Portfolio",
  description: "A portfolio showcasing Mayowa's work and skills",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <WelcomeSection />
        <NavBar />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
