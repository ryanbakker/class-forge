import { Metadata } from "next";
import { ReactNode } from "react";
import ClientWrapper from "@/components/providers/ClientWrapper";

interface RootLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "ClassForge",
  description: "Create engaging content for online courses with AI assistance",
};

function RootLayout({ children }: RootLayoutProps) {
  return (
    <body suppressHydrationWarning className="flex flex-col">
      <ClientWrapper>{children}</ClientWrapper>
    </body>
  );
}

export default RootLayout;
