// En React, no existen los Guards de Angular.
// Por esa razon, utilizamos estos componentes que verifican el AuthStatus.

import { useAuthStore } from "@core/auth/store/auth.store";
import type { PropsWithChildren } from "react";
import { Navigate } from "react-router-dom";

// No puede entrar a las rutas si NO esta autenticado 
export const AuthenticatedRoute = ({children} : PropsWithChildren)=>{
    
    const { authStatus} = useAuthStore();

    if(authStatus === 'checking') return null;
    
    if(authStatus === 'not-authenticated') return <Navigate to="/login" />;

    return children;
}

// No puede entrar a las rutas si esta autenticado 
export const NotAuthenticatedRoute = ({children} : PropsWithChildren)=>{
    
    const { authStatus} = useAuthStore();

    if(authStatus === 'checking') return null;
    
    if(authStatus === 'authenticated') return <Navigate to="/" />;

    return children;
}

// No puede entrar a las rutas si no es admin
export const isAdminRoute = ({children} : PropsWithChildren)=>{
    
    const { authStatus , isAdmin} = useAuthStore();

    if(authStatus === 'checking') return null;
    
    if(authStatus === 'not-authenticated') return <Navigate to="/login" />;

    if(!isAdmin()) return <Navigate to="/" />;

    return children;
}

