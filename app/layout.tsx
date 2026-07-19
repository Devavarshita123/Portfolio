import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import Navbar from "../components/layout/Navbar";
import ThemeProvider from "../components/providers/ThemeProvider";
import "./globals.css";
import ScrollProgress from "../components/ui/ScrollProgress";
const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title:
    "Devavarshita Vatsavai | Software Engineer",

  description:
    "Software Engineer specializing in Full Stack Development, AI, Cloud, and Problem Solving.",

  keywords: [
    "Software Engineer",
    "Java Developer",
    "Full Stack Developer",
    "Next.js",
    "React",
    "Portfolio",
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html
      lang="en"
      suppressHydrationWarning
      className={`${geistSans.variable} ${geistMono.variable}`}
    >
      <body>
        <ThemeProvider>
          <ScrollProgress />
          <Navbar />
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}