import { SpeedInsights } from "@vercel/speed-insights/next";
import { Analytics } from "@vercel/analytics/react";
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
      <SpeedInsights />
      <Analytics />
    </html>
  );
}
