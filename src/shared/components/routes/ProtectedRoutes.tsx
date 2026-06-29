// En React, no existen los Guards de Angular.
// Por esa razon, utilizamos estos componentes que verifican el AuthStatus.

import { useAuthStore } from "@core/auth/store/auth.store";
import type { PropsWithChildren } from "react";
import { Navigate, Outlet } from "react-router-dom";

// No puede entrar a las rutas si NO esta autenticado 
export const AuthenticatedRoute = ()=>{
    
    const { authStatus} = useAuthStore();

    if(authStatus === 'checking') return null;
    
    if(authStatus === 'not-authenticated') return <Navigate to="/login" />;

    return <Outlet />;
}

// No puede entrar a las rutas si esta autenticado 
export const NotAuthenticatedRoute = ()=>{
    
    const { authStatus} = useAuthStore();

    if(authStatus === 'checking') return null;
    
    if(authStatus === 'authenticated') return <Navigate to="/" />;

    return <Outlet />;
}

// No puede entrar a las rutas si no es admin
export const isAdminRoute = ()=>{
    
    const { authStatus , isAdmin} = useAuthStore();

    if(authStatus === 'checking') return null;
    
    if(authStatus === 'not-authenticated') return <Navigate to="/login" />;

    if(!isAdmin()) return <Navigate to="/" />;

    return <Outlet />;
}

