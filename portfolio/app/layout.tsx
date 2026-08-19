import type { Metadata } from "next";
import {
  JetBrains_Mono,
  Silkscreen,
  Pixelify_Sans,
} from "next/font/google";

import "./globals.css";

const jetbrains = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-body",
});

const silkscreen = Silkscreen({
  subsets: ["latin"],
  weight: ["400", "700"],
  variable: "--font-title",

  // Prevent unnecessary preload warning
  preload: false,
});

const pixelify = Pixelify_Sans({
  subsets: ["latin"],
  variable: "--font-name",
  weight: ["700"],

  // Prevent unnecessary preload warning
  preload: false,
});

export const metadata: Metadata = {
  title: "Profile",
  description: "Developer / Programmer",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`
          ${jetbrains.variable}
          ${silkscreen.variable}
          ${pixelify.variable}
        `}
      >
        {children}
      </body>
    </html>
  );
}