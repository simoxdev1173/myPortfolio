import type { Metadata } from "next";
import localFont from "next/font/local"; 
import "./globals.css";

// Configure your local font
const excon =localFont({
  src : './fonts/excon/Excon-Medium.woff2',
  variable: '--font-excon',
});
const ranade = localFont({
  src: './fonts/ranade/Ranade-Light.ttf', 
  variable: '--font-ranade', 
});
export const metadata: Metadata = {
  title: "EL ATTAR MOHAMMED PORTFOLIO",
  description: "MY MODERN PORTFOLIO WEBSITE",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={` ${ranade.variable} antialiased`}
      >
        {children}
      </body>
    </html>
  );
}
