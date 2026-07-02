import type { Airport } from "./airport.model";
import { airportsApi } from "../api/airports.api";
import { sleep } from "@/lib/sleep";

const getAllAirports = async (): Promise<Airport[]> => {
    const { data } = await airportsApi.get<Airport[]>('airports');
    return data;
};

const getAirportById = async (key: string): Promise<Airport> => {
    sleep(4000)
    const { data } = await airportsApi.get<Airport>(`airports/${key}`);
    return data;
};

// Lo dejo preparado para el update
const createUpdateAirport = async (airportLike: Partial<Airport>): Promise<Airport> => {
    
    await sleep(1500); // simulo retraso

    const isNew = !airportLike.id;

    // Esto lo deberia generar la base de datos, pero aca lo simulo asi.
    const newId = isNew ? crypto.randomUUID() : airportLike.id;
    
    if(isNew){
        airportLike.id = newId;
    }

    const { data } = isNew
        ? await airportsApi.post<Airport>('airports', airportLike)
        : await airportsApi.put<Airport>(`airports/${airportLike.key}`, airportLike);
    return data;
};


const deleteAirportById = async ( id : string ) : Promise< void > =>{
    const { data } = await airportsApi.delete('airports/'+id);
    return data;
}

export { getAllAirports, getAirportById, createUpdateAirport , deleteAirportById };