import { Metadata } from "next";
import ClientWrapper from "@/components/providers/ClientWrapper";

export const metadata: Metadata = {
  title: "ClassForge",
  description: "Create engaging content for online courses with AI assistance",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <body suppressHydrationWarning className="flex flex-col">
      <ClientWrapper>{children}</ClientWrapper>
    </body>
  );
}
