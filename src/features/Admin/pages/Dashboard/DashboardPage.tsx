import { Container } from "@/shared/components/ui/Container";
import { useAuthStore } from "@core/auth/store/auth.store"
import { Outlet } from "react-router-dom";
import { AdminTitle } from "./components/AdminTitle";


const AdminPage = () => {

  const { user } = useAuthStore();

  return (
    <Container>

      <AdminTitle user={user}/>
      
      <Outlet/>

    </Container>

  )
}

export default AdminPage
