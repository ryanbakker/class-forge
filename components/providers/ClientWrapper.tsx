"use client";

import { ThemeProvider } from "../themes/ThemeProvider";
import { ClerkConvexProvider } from "./ClerkConvexProvider";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkConvexProvider>
      <ThemeProvider
        attribute="class"
        defaultTheme="system"
        enableSystem
        disableTransitionOnChange
      >
        {children}
      </ThemeProvider>
    </ClerkConvexProvider>
  );
}
