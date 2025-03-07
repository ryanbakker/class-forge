"use client";

import { ThemeProvider } from "../themes/ThemeProvider";
import { ClerkConvexProvider } from "./ClerkConvexProvider";
import { SchematicProvider } from "@schematichq/schematic-react";
import SchematicWrapped from "./SchematicWrapped";
import { ClerkProvider } from "@clerk/nextjs";

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const schematicPubKey = process.env.NEXT_PUBLIC_SCHEMATIC_PUBLISHABLE_KEY;

  if (!schematicPubKey) {
    throw new Error("No Schematic Pub Key Found");
  }

  return (
    <ClerkProvider>
      <ClerkConvexProvider>
        <SchematicProvider publishableKey={schematicPubKey}>
          <SchematicWrapped>
            <ThemeProvider
              attribute="class"
              defaultTheme="system"
              enableSystem
              disableTransitionOnChange
            >
              {children}
            </ThemeProvider>
          </SchematicWrapped>
        </SchematicProvider>
      </ClerkConvexProvider>
    </ClerkProvider>
  );
}
