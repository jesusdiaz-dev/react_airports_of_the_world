import { useState } from "react";
import { useAuthStore } from "@core/auth/store/auth.store";
import { zodResolver } from "@hookform/resolvers/zod";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";


const loginSchema = z.object({
    email: z.email("Invalid email"),
    password: z.string().min(1, "password is required")
})

export type LoginInputs = z.infer<typeof loginSchema>;

const useLogin = ()=>{

    const [error, setError] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    
    const navigate = useNavigate();
    const { handleLogin } = useAuthStore();

  

  

    const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }) => {
        try {
            setIsFetching(true)
            setError('');
            const success = await handleLogin({email,password});
            if(success){
                navigate(`/admin/dashboard`);
            }else{
                setError('Credenciales Incorrectas')
            }
        } catch (error) {
            // if(!cancelled){
            setError('Ha ocurrido un error inesperado')
            // }
        } finally {
            setIsFetching(false);
        }
    };
    

    return {error, isFetching,  onSubmit, loginSchema};
}

export default useLogin;