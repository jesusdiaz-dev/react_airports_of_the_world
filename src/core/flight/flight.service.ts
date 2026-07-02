
import { airportsApi } from "../api/airports.api";
import type { Flight } from "./flight.model";

async function getAllFlights(){
    const {data} = await airportsApi.get<Flight[]>('flights');
    return data;
}

export {getAllFlights};