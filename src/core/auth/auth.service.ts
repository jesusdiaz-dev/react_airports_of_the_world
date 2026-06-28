import type { AuthResponse } from "./auth.model";

const baseUrl = "http://localhost:1600";

interface LoginCredentials {
    email:string; 
    password:string
}


const login = async (credentials : LoginCredentials ) : Promise<AuthResponse> =>{
    const {email, password} = credentials;
    try{
        const resp = await fetch(`${baseUrl}/auth/login`,{
            method: 'POST',
            headers: {
                'Content-Type':'application/json'
            },
            body: JSON.stringify({
                username: email,
                password
            })
        } )

        if(!resp.ok){
            if(resp.status === 404){
                throw new Error('email or password wrong')
            }
            // Aca podria manejar mas errores, de hecho, podria implementar patron Result
            // Pero quiza, para el proximo proyecto.
            throw new Error('An error has occurred');
        }

        return resp.json();
    }catch(error : unknown){ 
        if(error instanceof Error ){
            throw error;
        }
        throw new Error('An unexpected error occurred');
    }
}

export {login};