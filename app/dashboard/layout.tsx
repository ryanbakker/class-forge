import type { Metadata } from "next";
import "../globals.css";
import { ClerkProvider } from "@clerk/nextjs";
import {
  SidebarInset,
  SidebarProvider,
  SidebarTrigger,
} from "@/components/ui/sidebar";
import AppSidebar from "@/components/AppSidebar";
import { Separator } from "@/components/ui/separator";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
} from "@/components/ui/breadcrumb";
import SearchInput from "@/components/SearchInput";

export const metadata: Metadata = {
  title: "Class Forge | Courses",
  description: "Create modern online courses with ease today!",
};

// Dashboard layout

export default function DashboardLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <SidebarProvider>
        <AppSidebar />
        <SidebarInset>
          <header className="py-3 flex items-center space-x-3 container px-4 mx-auto">
            <SidebarTrigger
              variant="secondary"
              size="lg"
              className="cursor-pointer"
              aria-label="Toggle sidebar"
              title="Toggle sidebar"
            />
            <Separator orientation="vertical" />
            <Breadcrumb>
              <BreadcrumbList>
                <BreadcrumbItem>
                  <BreadcrumbLink href="/dashboard">
                    Explore Courses
                  </BreadcrumbLink>
                </BreadcrumbItem>
              </BreadcrumbList>
            </Breadcrumb>

            <SearchInput />
          </header>
          <div className="mx-3">
            <Separator />
          </div>
          {children}
        </SidebarInset>
      </SidebarProvider>
    </ClerkProvider>
  );
}
