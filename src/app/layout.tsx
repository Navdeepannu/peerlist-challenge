import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Navbar from "@/components/navbar";
import Footer from "@/components/footer";

const inter = Inter({
  subsets: ["latin"],
  weight: ["200", "300", "400", "500"],
});

export const metadata: Metadata = {
  title: "Peerlist 7 Day Design Challenge | Interactive UI Components",
  description:
    "A collection of creative UI components built for the Peerlist Interactive Design Challenge. Features animated avatars, OTP inputs, bento grids, and more with dark/light mode support.",
  keywords: [
    "Peerlist",
    "Design Challenge",
    "UI Components",
    "React",
    "Next.js",
    "Tailwind CSS",
    "Framer Motion",
    "Animation",
  ],
  authors: [{ name: "Navdeep Singh" }],
  creator: "Navdeep Singh",
  publisher: "Navdeep Singh",
  openGraph: {
    title: "Peerlist 7 Day Design Challenge",
    description:
      "Interactive UI components with beautiful animations and dark/light mode support",
    type: "website",
    locale: "en_US",
    siteName: "Peerlist Design Challenge",
  },
  twitter: {
    card: "summary_large_image",
    title: "Peerlist 7 Day Design Challenge",
    description:
      "Interactive UI components with beautiful animations and dark/light mode support",
    creator: "@navdeepannu",
  },
  robots: {
    index: true,
    follow: true,
  },
  viewport: "width=device-width, initial-scale=1",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${inter.className} antialiased min-h-screen flex flex-col`}
      >
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
