import { useAuthStore } from "@core/auth/store/auth.store";
import { useNavigate } from "react-router-dom";


// Logica que se reutiliza en varios componentes => customHook.
const useLogout=()=>{

const navigate = useNavigate();

  const { handleLogout } = useAuthStore();
  
  const onClickLogout = ()=>{
    handleLogout();
    navigate('/login')
  }

  return {onClickLogout}

}

  export default useLogout;