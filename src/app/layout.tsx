import type { Metadata } from "next";
import { Inter, Space_Grotesk } from "next/font/google";
import "./globals.css";
import { Toaster } from "@/components/ui/toaster";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const spaceGrotesk = Space_Grotesk({
  variable: "--font-space-grotesk",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: "Design Portfolio - Design System",
  description: "A minimal, modern design system for a designer's portfolio website",
  keywords: ["portfolio", "design", "UI/UX", "design system", "minimal", "modern"],
  authors: [{ name: "Designer" }],
  openGraph: {
    title: "Design Portfolio",
    description: "Minimal, modern design portfolio showcasing creative work",
    url: "https://chat.z.ai",
    siteName: "Design Portfolio",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Design Portfolio",
    description: "Minimal, modern design portfolio showcasing creative work",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${inter.variable} ${spaceGrotesk.variable} antialiased bg-background text-foreground`}
      >
        {children}
        <Toaster />
      </body>
    </html>
  );
}
