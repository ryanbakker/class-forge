import ClientWrapper from "@/components/providers/ClientWrapper";
import { Metadata } from "next";
import { ReactNode } from "react";

interface DashboardLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "ClassForge - Dashboard",
  description:
    "Your control centre for creating engaging classes and homework for your online courses",
};

function DashboardLayout({ children }: DashboardLayoutProps) {
  return (
    <body suppressHydrationWarning>
      <ClientWrapper>{children}</ClientWrapper>
    </body>
  );
}

export default DashboardLayout;
