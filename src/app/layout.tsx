import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";
import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Anshum | Full Stack Developer",
  description: "Computer Science Engineering student passionate about building real-world products, backend systems, automation workflows, and modern user experiences.",
  openGraph: {
    title: "Anshum | Full Stack Developer",
    description: "Computer Science Engineering student passionate about building real-world products, backend systems, automation workflows, and modern user experiences.",
    url: "https://anshum-portfolio.vercel.app",
    siteName: "Anshum Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Anshum | Full Stack Developer",
    description: "Computer Science Engineering student passionate about building real-world products, backend systems, automation workflows, and modern user experiences.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="dark">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">
          {children}
        </main>
        <Footer />
      </body>
    </html>
  );
}
