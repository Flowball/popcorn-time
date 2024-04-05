import Navbar from "@/components/Navbar";
import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { Suspense } from "react";
import MovieProvider from "./context/context";
import "./globals.css";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Popcorn-Time",
  description: "School submission webpage",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="no-scrollbar">
      <body className={inter.className}>
        <Suspense>
          <MovieProvider>
            <Navbar />
            {children}
          </MovieProvider>
        </Suspense>
      </body>
    </html>
  );
}
