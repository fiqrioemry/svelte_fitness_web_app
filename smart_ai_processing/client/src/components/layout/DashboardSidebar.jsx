import { Calendar, Inbox, Settings } from "lucide-react";

import {
  Sidebar,
  SidebarContent,
  SidebarGroup,
  SidebarMenu,
  SidebarHeader,
  SidebarMenuButton,
  SidebarMenuItem,
} from "@/components/ui/sidebar";
import WebLogo from "../WebLogo";
import { useLocation } from "react-router-dom";
import { cn } from "@/lib/utils";

const items = [
  {
    title: "Settings",
    url: "/seeker/settings",
    icon: Settings,
  },
  {
    title: "Applications",
    url: "/seeker/applications",
    icon: Inbox,
  },
  {
    title: "notifications",
    url: "/seeker/notifications",
    icon: Calendar,
  },
];

export function DashboardSidebar() {
  const location = useLocation();

  return (
    <Sidebar>
      <SidebarContent>
        <SidebarHeader className="p-4">
          <WebLogo />
        </SidebarHeader>

        <SidebarGroup>
          <SidebarMenu>
            {items.map((item) => {
              const active = location.pathname.includes(item.url);
              return (
                <SidebarMenuItem
                  key={item.title}
                  className={cn(active ? "bg-gray-100" : "", "rounded-md")}
                >
                  <SidebarMenuButton asChild>
                    <a href={item.url}>
                      <item.icon />
                      <span>{item.title}</span>
                    </a>
                  </SidebarMenuButton>
                </SidebarMenuItem>
              );
            })}
          </SidebarMenu>
        </SidebarGroup>
      </SidebarContent>
    </Sidebar>
  );
}
