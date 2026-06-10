import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundFX from "@/components/BackgroundFX";
import Footer from "@/components/Footer";

export const metadata: Metadata = {
  title: "Gaurav Kumar — Full-Stack Developer",
  description:
    "Full-stack developer building scalable, user-focused web applications using React, Next.js, Firebase, and Supabase. Based in Vancouver, BC.",
  themeColor: "#FFFDF5",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
      </head>
      <body>
        <BackgroundFX />
        <Navbar />
        {children}
        <Footer />
      </body>
    </html>
  );
}
