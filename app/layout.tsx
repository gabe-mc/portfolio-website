import { Metadata } from "next";
import "./globals.css";
import Navbar from './components/navbar';

export const metadata: Metadata = {
  title: "Gabriel McFadyen",
  description: "Gabriel McFadyen's portfolio website",
    icons: {
    icon: "/gm_logo.png",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="font-sans antialiased">
        <Navbar />
        <main>{children}</main>
      </body>
    </html>
  );
}