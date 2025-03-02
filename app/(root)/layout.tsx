import { Metadata } from "next";
import { ReactNode } from "react";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "ClassForge",
  description: "Create engaging content for online courses with AI assistance",
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <body suppressHydrationWarning>
      <h2>Root Layout</h2>
      {children}
    </body>
  );
}

export default RootLayout;
