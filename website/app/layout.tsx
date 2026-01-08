import type { Metadata } from "next";
import { Plus_Jakarta_Sans, Geist_Mono } from "next/font/google";
import Script from "next/script";
import "./globals.css";
import { Footer, FloatingNav } from "@/components/layout";
import { SmoothScrollProvider } from "@/components/providers/SmoothScrollProvider";

const jakartaSans = Plus_Jakarta_Sans({
  variable: "--font-jakarta-sans",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Orison Digital - Digital Solutions That Matter",
  description:
    "Creating digital experiences that drive results. Web development, digital marketing, and more.",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="light">
      <body
        className={`${jakartaSans.variable} ${geistMono.variable} antialiased min-h-screen flex flex-col`}
      >
        <SmoothScrollProvider>
          <Script
            src="https://widgets.leadconnectorhq.com/loader.js"
            data-resources-url="https://widgets.leadconnectorhq.com/chat-widget/loader.js"
            data-widget-id="685ea114382097b1b73f5ee1"
          ></Script>
          <FloatingNav />
          <main className="flex-1">{children}</main>
          <Footer />
        </SmoothScrollProvider>
      </body>
    </html>
  );
}
