import type { Metadata } from "next";
import localfont from "next/font/local";
import "./globals.css";
import Image from "next/image";

// const pacifico = localfont({
//   src: [{
//     path: './fonts/Pacifico/Pacifico-Regular.ttf',
//     weight: '400',
//     style: 'normal'
//   }],
//   variable: '--font-Pacifico'
// })

export const metadata: Metadata = {
  title: "M&M",
  description: "Wedding website",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`font-Roboto overflow-y-scroll antialiased  bg-center max-w-[1014px] mx-auto relative`}
      >
        {" "}
        <div
          className="absolute inset-0 bg-[url('/background4.png')]  bg-cover pointer-events-none"
          aria-hidden="true"
        ></div>
        {children}
      </body>
    </html>
  );
}
