import { Home, LogOut, Plus, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenuButton,
  SidebarSeparator,
} from "@/components/ui/sidebar";
import { BsFire } from "react-icons/bs";
import { SignOutButton } from "@clerk/nextjs";
import Link from "next/link";

// Menu items.
const items = [
  {
    title: "The first class I've used ClassForge for",
    url: "#",
    icon: Home,
  },
];

export async function AppSidebar() {
  const currentClass = (text: string, maxLength = 30) =>
    text.length > maxLength ? text.slice(0, maxLength).trimEnd() + "…" : text;

  return (
    <Sidebar variant="inset" collapsible="icon">
      <SidebarHeader className="flex mt-2">
        <SidebarMenuButton>
          <Link href="/" className="flex items-center gap-1 ">
            <BsFire className="text-orange-600 h-9 w-9 md:h-7 md:w-7" />
            <span className="text-3xl md:text-2xl font-extrabold text-transparent bg-clip-text bg-gradient-to-tr from-orange-600 to-fuchsia-400">
              ClassForge
            </span>
          </Link>
        </SidebarMenuButton>
      </SidebarHeader>
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Welcome to your AI agent</SidebarGroupLabel>
        </SidebarGroup>
        <SidebarSeparator />
        <SidebarGroup>
          <SidebarMenuButton asChild>
            <button className="cursor-pointer">
              <Plus className="w-full" />
              <span>New Class</span>
            </button>
          </SidebarMenuButton>
          <SidebarGroupLabel>
            {currentClass(
              "How to code really cool react projects from scratch"
            )}{" "}
          </SidebarGroupLabel>
          <SidebarGroupContent>
            {items.map((item) => (
              <SidebarGroupLabel key={item.title}>
                {currentClass(item.title)}
              </SidebarGroupLabel>
            ))}
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      <SidebarFooter>
        <SidebarMenuButton asChild>
          <a href="/manage-plan">
            <Settings />
            <span>Manage Plan</span>
          </a>
        </SidebarMenuButton>
        <SidebarMenuButton asChild>
          <SignOutButton>
            <div>
              <LogOut />
              <span>Sign Out</span>
            </div>
          </SignOutButton>
        </SidebarMenuButton>
      </SidebarFooter>
    </Sidebar>
  );
}
