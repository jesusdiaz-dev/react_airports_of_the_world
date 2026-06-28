import { createBrowserRouter, Navigate } from 'react-router-dom';
import RootLayout from '../shared/layout/RootLayout';
import airportRoutes from '../features/Airports/airports.routes';

export const appRouter = createBrowserRouter([
    // Root route with nested routes
    {
        path: '/',
        element: <RootLayout />, // <-- Layout component
        children: [
            {
                index: true, 
                element: <Navigate to="airports" replace /> 
            },
            {
                path: 'airports',
                children: airportRoutes  // ← directo, sin lazy wrapper, porque importa rutas.
            },
            {
                path: 'login',
                lazy: async ()=>{
                    const { default : C } = await import('../features/Auth/Login')
                    return { element : <C/>}
                }
            },
            {
                path: '*',
                lazy: async () => {
                    const { default: C } = await import('../shared/pages/not-found');
                    return { element: <C /> }
                }
            }
        ]
    },
    {
        path: 'admin/dashboard',
        lazy: async () => {
            const { default: C } = await import('../features/Admin/pages/AdminPage');
            return { element: <C /> }
        }
    },
]);