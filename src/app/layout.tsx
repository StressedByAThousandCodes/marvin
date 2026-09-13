import type { Metadata } from "next";
import localFont from "next/font/local";
import "@fontsource/dancing-script/600.css";
import "@fontsource/dancing-script/700.css";
import "./globals.css";
import ThemeProvider from "king/components/providers/ThemeProvider";

const geistSans = localFont({
  src: "./fonts/GeistVF.woff",
  variable: "--font-geist-sans",
  weight: "100 900",
});
const geistMono = localFont({
  src: "./fonts/GeistMonoVF.woff",
  variable: "--font-geist-mono",
  weight: "100 900",
});

export const metadata: Metadata = {
  title: "Marvin Villalon — Software Engineer",
  description: "Personal portfolio of Marvin Villalon, software engineer.",
  manifest: "/manifest.ts",
  icons: [
    {
      rel: "icon",
      type: "image/png",
      sizes: "16x16",
      url: "./marvin.svg",
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <ThemeProvider>{children}</ThemeProvider>
      </body>
    </html>
  );
}