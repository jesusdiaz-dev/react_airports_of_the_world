## Aplicacion de Aeropuertos
In this project, my goal was to gain a deep understanding of how React works and its similarities with Angular.. 

Since this is a learning project, there are some features implemented with different technologies.. 

For example: 

    In some pages I use Tanstack Query for fetching states, and in the Airport List and detail, I managed the state by my own.

## Best Practices: 

    -Fetching
    - Service for API management / Some with fetch and another with axios.
    - Tanstack Query for handling fetching statuses
    
    - Custom hooks for mantain functional components readables. 
    
    Architechture
    - Feature based structure (services: Airports, Aircarft, Auth, Admin)

    Framework's issues: 
    - Handle side effects with cleanup function in useEffects (useAirportDetail, useAirportList).
    
    State Management:
    - Store Patter for Auth State mannagement. 


    Routing:
    - Lazy loading for routes
    - Separated routes for each feature (Airports, Admin)
    - Protected Routing (Admin)

    DRY:
    - Content projection with {children} (component: Container, NavLink)
    - HandleError function private for DRY principle.

    Error Management
    - Handle the errors in service layer to keep the application stable with controlled error responses.

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
useState: 
useEffect: 
