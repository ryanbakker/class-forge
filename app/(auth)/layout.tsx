import { Metadata } from "next";
import { ReactNode } from "react";
import ClientWrapper from "@/components/providers/ClientWrapper";

interface AuthLayoutProps {
  children: ReactNode;
}

export const metadata: Metadata = {
  title: "ClassForge - Login",
  description: "Login to get started building your lessons using AI",
};

function AuthLayout({ children }: AuthLayoutProps) {
  return (
    <body suppressHydrationWarning>
      <ClientWrapper>{children}</ClientWrapper>
    </body>
  );
}

export default AuthLayout;
