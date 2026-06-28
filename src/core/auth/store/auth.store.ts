import { create } from 'zustand'

import type { User } from "../models/auth.model"
import type { LoginCredentials } from "../models/login-credentials.model"
import { loginAction } from '../auth.service'
import { AUTH_TOKEN_KEY } from '../models/auth-keys'
import { AUTH_USER_KEY } from '../models/auth-keys'

type AuthStatus = 'not-authenticated' | 'authenticated' | 'checking'

type AuthState = {
    // Properties
    user: User | null,
    token: string | null,
    authStatus: AuthStatus,

    // Getters
    isAdmin : ()=> boolean;

    // Actions
    handleLogin: (credentials: LoginCredentials) => Promise<boolean>,
    handleLogout : ()=>void
}



export const useAuthStore = create<AuthState>()((set,get) => ({
    // Implementation.
    //Properties
    user: JSON.parse(localStorage.getItem(AUTH_USER_KEY) || 'null'),
    token: localStorage.getItem(AUTH_TOKEN_KEY || 'null'),
    authStatus: localStorage.getItem(AUTH_TOKEN_KEY) ? 'authenticated' : 'not-authenticated',

    // Getters
    isAdmin : ()=>{
        const roles = get().user?.roles || [];
        return roles.includes('admin');
    },

    // Actions
    handleLogin: async (credentials: LoginCredentials) => {
        
        try {
           
            const data = await loginAction(credentials);
            localStorage.setItem(AUTH_TOKEN_KEY ,data.token);
            localStorage.setItem(AUTH_USER_KEY , JSON.stringify(data.user));
            set({ user: data.user, token: data.token, authStatus: 'authenticated' })
            return true;

        } catch (error) {

            localStorage.removeItem(AUTH_TOKEN_KEY);
            set({ user: null, token: null, authStatus: 'not-authenticated' })
            return false;

        }
    },
    
    handleLogout: ()=>{
        localStorage.removeItem(AUTH_TOKEN_KEY);
        localStorage.removeItem(AUTH_USER_KEY);
        set({ user: null, token: null, authStatus: 'not-authenticated' })
    }

})
)