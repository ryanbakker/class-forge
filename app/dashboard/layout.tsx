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

export const metadata: Metadata = {
  title: "Class Forge | Courses",
  description: "Create modern online courses with ease today!",
};

// Dashboard layout

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <ClerkProvider afterSignOutUrl="/">
      <html lang="en">
        <body suppressHydrationWarning>
          <SidebarProvider>
            <AppSidebar />
            <SidebarInset>
              <header className="p-3 flex items-center space-x-3">
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
              </header>
              <main className="p-3">{children}</main>
            </SidebarInset>
          </SidebarProvider>
        </body>
      </html>
    </ClerkProvider>
  );
}
