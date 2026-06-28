// src/components/Header.tsx
import { Button } from "@/components/ui/button"
import { NavigationMenu,  NavigationMenuList } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { useAuthStore } from "@core/auth/store/auth.store"
import { Link, NavLink } from "react-router-dom"
import useLogout from "../../../core/auth/hooks/useLogout"

const commonLinks = [
  { label: "Home", href: "/" },
]

export function Header() {

  const { user } = useAuthStore();
  const { onClickLogout } = useLogout();

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <div className="mx-auto flex h-14 max-w-5xl items-center justify-between px-6">

        {/* Logo */}
        <Link to="/" className="text-sm font-semibold tracking-tight capitalize">
          Airports App 
        </Link>

        {/* Nav */}
        <NavigationMenu>
          <NavigationMenuList className="flex gap-4">
            {commonLinks.map((link) => (
              <NavLink key={link.href} to={link.href}>
              </NavLink>
            ))}

            {/* Boton login o logon */}
            {
              user ?
                <Button variant={"destructive"} onClick={onClickLogout}>
                    logout
                </Button>
                :
                <NavLink to='login'>
                  <Button variant={"destructive"}>
                      logout
                  </Button>
              </NavLink>
            }

          </NavigationMenuList>
        </NavigationMenu>

      </div>
      <Separator />
    </header>
  )
}
