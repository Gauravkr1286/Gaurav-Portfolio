import type { Metadata } from "next";
import "./globals.css";
import Navbar from "@/components/Navbar";
import BackgroundFX from "@/components/BackgroundFX";

export const metadata: Metadata = {
  title: "Gaurav | Full-Stack Developer",
  description:
    "Full-stack developer building scalable, user-focused web applications using React, Next.js, Firebase, and Supabase.",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className="antialiased text-[#EDEEF3]">
        <BackgroundFX />
        <Navbar />
        {children}
      </body>
    </html>
  );
}
