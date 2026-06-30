import {Outlet } from "react-router-dom";
import Footer from "../components/footer/footer";
import { Header } from "../components/header/Header";
import { SidebarProvider } from "@/components/ui/sidebar";
import { AppSidebar } from "@features/Admin/pages/AppSidebar";
import { useAuthStore } from "@core/auth/store/auth.store";

export default function RootLayout() {

    const { authStatus } = useAuthStore();

    return (
        <>


            <SidebarProvider>

                {
                    authStatus == 'authenticated'
                    &&
                    <AppSidebar />
                }
                <div className="flex flex-col flex-1 min-h-screen">
                    <Header />
                    <main className="flex-1 p-6">
                        <Outlet />
                    </main>
                    <Footer />
                </div>
            </SidebarProvider>

        </>
    );
}

