import { Plane, CalendarDays } from "lucide-react" // Optional icons for a better look
import {
  Sidebar,
  SidebarContent,
  SidebarFooter,
  SidebarGroup,
  SidebarGroupContent,
  SidebarGroupLabel,
  SidebarHeader,
  SidebarMenu,
  SidebarMenuItem,
  SidebarMenuButton,
} from "@/components/ui/sidebar"
import { Link } from "react-router-dom"

export function AppSidebar() {
  return (
    <Sidebar>
      <SidebarHeader>
        <div className="px-4 py-2 font-bold text-lg text-orange-500">
          Dashboard
        </div>
      </SidebarHeader>
      
      <SidebarContent>
        <SidebarGroup>
          <SidebarGroupLabel>Navigation</SidebarGroupLabel>
          <SidebarGroupContent>
            <SidebarMenu>
              
              {/* Airports Item */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/admin/dashboard/airports" className="flex items-center gap-2">
                    <Plane className="h-4 w-4" />
                    <span>Airports</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

              {/* Flights Item */}
              <SidebarMenuItem>
                <SidebarMenuButton asChild>
                  <Link to="/admin/dashboard/flights" className="flex items-center gap-2">
                    <CalendarDays className="h-4 w-4" />
                    <span>Flights</span>
                  </Link>
                </SidebarMenuButton>
              </SidebarMenuItem>

            </SidebarMenu>
          </SidebarGroupContent>
        </SidebarGroup>
      </SidebarContent>
      
      <SidebarFooter />
    </Sidebar>
  )
}