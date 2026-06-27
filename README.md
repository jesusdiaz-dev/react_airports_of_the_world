## Aplicacion de Aeropuertos
In this project, my goal was to gain a deep understanding of how React works and its similarities with Angular.. 

Since this is a learning project, there are some features implemented with different technologies.. 

For example: 
    For the Airports feature, I used the native Fetch API and handled the fetching states manually to understand how React manages state without external libraries.

    For the rest of the application, I used Axios and TanStack Query to leverage modern data-fetching practices.

## Best Practices: 
    - Lazy loading for routes
    - Service for API management
    - feature based structure (services: Airports, Aircarft, Auth, Admin)
    - handleError function private for DRY principle.
    - Custom hooks for mantain functional components readables. 
    - Handle side effects with cleanup function in useEffects (useAirportDetail, useAirportList).
    - Separated routes for each feature (Airports, Admin)

    - handle the errors in service layer to keep the application stable with controlled error responses.

## Stack: 
    - native fetch for API calls (Airports)
        - Axios for all rest of features.
    -Tanstack Query for handling fetching states 
        - (not in Airports feature)
    -Zustand for state management

    - react router
    - shadcn for styles
    - forms:
        - react-hook-forms 
        - zod (validations)

## API Endpoints 

API simulated with json server.
Available Endpoints:

GET	    /airports	    List all
GET	    /airports/BCN	Detail by key 
POST	/airports	    Create
PUT	    /airports/BCN	Update
DELETE	/airports/BCN	Delete
POST	/auth/login	    Login with mock token

## Features implemented:
Context API : for light/dark theme
useState: 
useEffect: 
