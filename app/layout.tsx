import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "ClassForge",
  description: "Create engaging content for online courses with AI assistance",
};

export default function DefaultLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      {children}
    </html>
  );
}
