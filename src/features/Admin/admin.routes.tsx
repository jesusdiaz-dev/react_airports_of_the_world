import type { RouteObject } from "react-router-dom";

export const adminRoutes: RouteObject[] = [
    {
        path: 'dashboard',
        lazy: async () => {
            const { default: C } = await import('./pages/AdminPage');
            return { element: <C /> }
        }
    },
]
