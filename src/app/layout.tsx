import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Amarjot",
  description: "Amarjot Singh's Portfolio",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body>
        {children}
      </body>
    </html>
  );
}
