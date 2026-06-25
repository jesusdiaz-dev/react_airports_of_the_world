import type { RouteObject } from 'react-router-dom';

const airportRoutes: RouteObject[] = [
    {
        index: true,
        lazy: async () => {
            const { default: C } = await import('./pages/AirportsList/AirportList');
            return { element: <C /> }
        }
    },
    {
        path: ':id',
        lazy: async () => {
            const { default: C } = await import('./pages/AirportDetail/AirportDetail');
            return { element: <C /> };
        }
    }
];

export default airportRoutes;