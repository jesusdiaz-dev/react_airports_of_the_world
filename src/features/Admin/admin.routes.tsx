import PageUnderConstruction from "@/shared/components/ui/PageUnderConstruction";
import { Navigate, type RouteObject } from "react-router-dom";

export const adminRoutes: RouteObject[] = [
    {
        path: 'dashboard',
        lazy: async () => {
            const { default: C } = await import('./pages/Dashboard/DashboardPage');
            return { element: <C /> }
        },

        children: [
            {
                path: '',
                element: <Navigate to="airports" replace />
            },
            {
                path: 'airports',
                lazy: async () => {
                    const { default: C } = await import('./pages/Dashboard/components/Airports/AirportForm');
                    return { element: <C /> }
                },
            },
            {
                path: 'flights',
                // element: <h1>This page is under construction</h1>
                element: <PageUnderConstruction/>
            }

        ]
    },
]
