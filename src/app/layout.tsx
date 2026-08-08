import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import CustomCursor from "@/components/CustomCursor";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  title: "PTL MEDIA | Premium Video Editing Agency",
  description: "We don't just edit videos. We create experiences. From scroll-stopping reels to cinematic brand films.",
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className={`${inter.variable} antialiased`}>
      <body className="min-h-full flex flex-col bg-background text-foreground">
        <SmoothScroll>
          <CustomCursor />
          <div className="noise-overlay" />
          {children}
        </SmoothScroll>
      </body>
    </html>
  );
}
