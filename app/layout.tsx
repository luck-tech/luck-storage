import type { Metadata } from "next";
import "./globals.css";
import { Zilla_Slab } from "next/font/google";

const zillaSlabFont = Zilla_Slab({
  subsets: ["latin"],
  weight: ["400", "700"],
});

export const metadata: Metadata = {
  title: "luck Storage",
  description: "luckの個人的なメモアプリです",
  icons: {
    icon: "/favicon.ico",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={zillaSlabFont.className}>{children}</body>
    </html>
  );
}
