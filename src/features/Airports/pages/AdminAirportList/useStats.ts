import { getAllAirports } from "@core/airports/airport.service";
import { getAllFlights } from "@core/flight/flight.service";
import { useQuery } from "@tanstack/react-query"
import { useEffect, useState } from "react";

const useStats = () => {
    // cantidad de aeropuertos
    const [airportsQuantity , setAirportsQuantity ] = useState(0);
    const [totalFlights , setTotalFlights ] = useState(0);
    const [totalSoldOutFlights , setTotalSoldOutFlights ] = useState(0);

    const {data:airports} = useQuery({
        queryKey: ['airports'],
        queryFn: getAllAirports
        }
    );

    const { data: flights} = useQuery({
        queryKey: ['flights'],
        queryFn: getAllFlights
    })

    useEffect(()=>{
        if(airports){
            const quantity = airports.reduce(
                (acc) => { 
                    return ++acc
                }, 0
            )
            setAirportsQuantity(quantity)
        }
    },[airports])

    useEffect(()=>{
        if(flights){
            // Cantidad total de vuelos
            const quantity = flights.reduce(
                (acc) => { 
                    return ++acc
                }, 0
            )
            setTotalFlights(quantity)

            // Cantidad de vuelos vendidos
            const soldOutQuantity = flights.reduce(
                (acc, flight) => { 
                    if(flight.status === "sold-out"){
                        return ++acc;
                    }
                    return acc;
                }, 0
            )
            setTotalSoldOutFlights(soldOutQuantity)
        }
    },[flights])
    
    //use query
        // le pego al servicio

    // cantidad de vuelos

    // cantidad de vuelos vendidos
    return {airportsQuantity , totalFlights, totalSoldOutFlights}
}

export default useStats