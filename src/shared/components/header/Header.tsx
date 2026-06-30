// src/components/Header.tsx
import { Button } from "@/components/ui/button"
import { NavigationMenu,  NavigationMenuList } from "@/components/ui/navigation-menu"
import { Separator } from "@/components/ui/separator"
import { useAuthStore } from "@core/auth/store/auth.store"
import { Link, NavLink } from "react-router-dom"
import useLogout from "../../../core/auth/hooks/useLogout"
import { Container } from "../ui/Container"

const commonLinks = [
  { label: "Home", href: "/" },
]

export function Header() {

  const { authStatus } = useAuthStore();
  const { onClickLogout } = useLogout();

  console.log(authStatus);

  return (
    <header className="sticky top-0 z-50 w-full bg-background">
      <Container>
        <div className="flex h-14 items-center justify-between">

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
                authStatus === 'authenticated' ?
                  <Button variant={"destructive"} onClick={onClickLogout}>
                      logout
                  </Button>
                  :
                  <NavLink to='login'>
                    <Button >
                        login
                    </Button>
                </NavLink>
              }

            </NavigationMenuList>
          </NavigationMenu>

        </div>
      </Container>
      <Separator />
    </header>
  )
}
