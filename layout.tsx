// app/layout.tsx
import { Geist, Geist_Mono } from "next/font/google";
import Image from "next/image";
import "./globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: "The Counterfeit",
  description: "Created by Akunna Onyekachi",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <head>
        {/* Favicon */}
        <link rel="icon" href="/black.svg" type="image/svg+xml" />
      </head>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased relative min-h-screen`}
      >
       {children}

        {/* Donate button */}
        <a
          href="https://buymeacoffee.com/akunna"
          target="_blank"
          rel="noopener noreferrer"
          className="fixed bottom-4 right-4 bg-[#D8BFD8] p-3 rounded-full shadow-lg hover:scale-110 transition-transform duration-200 flex items-center justify-center"
          aria-label="Buy me a coffee"
        >
          <Image src="/coffee.svg" alt="Buy me a coffee" width={35} height={35} />
        </a>
      </body>
    </html>
  );
}
