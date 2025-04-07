import type { Metadata } from "next";
import "./globals.css";

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
          className="absolute inset-0  bg-cover pointer-events-none"
          style={{ backgroundImage: "url('/background4.png')" }}
          aria-hidden="true"
        ></div>
        {children}
      </body>
    </html>
  );
}
