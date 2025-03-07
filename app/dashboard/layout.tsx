import { AppSidebar } from "@/components/AppSidebar";
// import Footer from "@/components/Footer";
import ClientWrapper from "@/components/providers/ClientWrapper";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
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
      <ClientWrapper>
        <SidebarProvider>
          <AppSidebar />
          <SidebarInset>
            <main>
              <SidebarTrigger />
              {children}
            </main>
          </SidebarInset>
          {/* <Footer /> */}
        </SidebarProvider>
      </ClientWrapper>
    </body>
  );
}

export default DashboardLayout;
