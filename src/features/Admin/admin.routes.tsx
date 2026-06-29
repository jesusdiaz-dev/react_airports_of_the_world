import type { RouteObject } from "react-router-dom";

export const adminRoutes: RouteObject[] = [
    {
        path: 'dashboard',
        lazy: async () => {
            const { default: C } = await import('./pages/Admin/AdminPage');
            return { element: <C /> }
        },

        children: [
            {
                path: 'airports',
                element: <h1>Airports</h1>
            },
            {
                path: 'flights',
                element: <h1>Flights</h1>
            }


        ]
    },
]
