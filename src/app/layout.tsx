import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Denislav Dimitrov",
  description: "Denislav's personal portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="bg-dark antialiased">{children}</body>
    </html>
  );
}
