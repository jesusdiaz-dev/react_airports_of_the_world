// src/components/Header.tsx
import { NavigationMenu, NavigationMenuItem, NavigationMenuLink, NavigationMenuList, navigationMenuTriggerStyle } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { Link } from "react-router-dom"

const links = [
  { label: "Home", href: "/" },
]

export function Header() {
  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="text-sm font-semibold tracking-tight capitalize">
          airports of the world
        </Link>

        {/* Nav */}
        <NavigationMenu>
          <NavigationMenuList>
            {links.map((link) => (
              <NavigationMenuItem key={link.href}>
                <NavigationMenuLink 
                    asChild 
                  className={navigationMenuTriggerStyle()}
                >
                  <Link to={link.href}>{link.label}</Link>
                </NavigationMenuLink>
              </NavigationMenuItem>
            ))}
          </NavigationMenuList>
        </NavigationMenu>

      </div>
      <Separator />
    </header>
  )
}