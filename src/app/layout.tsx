import type { Metadata } from "next";
import "./globals.css";
import Header from "../components/Header"

export const metadata: Metadata = {
  title: "Be Grand",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="flex flex-col lg:flex-row " >
         <Header />
        {children}
      </body>
    </html>
  );
}
