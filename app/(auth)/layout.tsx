import { Metadata } from "next";
import { ReactNode } from "react";

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
      <h2>Auth Layout</h2>
      {children}
    </body>
  );
}

export default AuthLayout;
