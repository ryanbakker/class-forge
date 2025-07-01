import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Class Forge",
  description: "Create modern online courses with ease today!",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body suppressHydrationWarning>{children}</body>
    </html>
  );
}
