import type { Airport } from "./airport.model";


const baseUrl = "http://localhost:1600";

// Servicio equivalente al service en Angular, 
// la logica de peticiones (que puede ser reutilizable) esta aca
const getAllAirports = async (): Promise<Airport[]> => {
    const response = await fetch(`${baseUrl}/allAirports`);

    handleError(response);
   
    const data: Airport[] = await response.json();
    return data;
};

const getAirportById = async (key : string) : Promise <Airport > =>{
    const response = await fetch (`${baseUrl}/airport/${key}`,{
        method:'POST',
        headers: {
            'Content-Type':'application/json'
        },
        body: JSON.stringify({ key })
    });

    handleError(response);

    const data: Airport = await response.json();
    return data;
}

function handleError(response : Response){
     if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
    }
}

export { getAllAirports, getAirportById };