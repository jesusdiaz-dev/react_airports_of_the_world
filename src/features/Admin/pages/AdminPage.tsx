import { Container } from "@/shared/components/ui/container";
import { useAuthStore } from "@core/auth/store/auth.store"


const AdminPage = () => {

  const { user } = useAuthStore();

  return (
    <Container>
      <h1>Admin Page</h1>
      <h2>Wellcome {user?.fullName}</h2>
      <p>This is the admin page, just a simple page.</p>
      
    </Container>

  )
}

export default AdminPage
