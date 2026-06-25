import { useEffect, useState } from "react";
import { getAllAirports } from "@core/airports/airport.service";
import type { AirportSummary } from "@core/airports/airport.model";

// Equivalente al interface de un modelo en Angular


interface UseAirportListResult {
  isLoading: boolean;
  error: string | null;
  airports: AirportSummary[];
  refetch: () => void; // equivalente a llamar el método del service de nuevo
}


const useAirportList = () : UseAirportListResult => {
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [error, setError] = useState<string>('');
  const [airports, setAirports] = useState<AirportSummary[]>([]);
  const [reload, setReloadAirports] = useState<number>(0);

  // useEffect para cargar los aeropuertos al montar el componente, equivalente al Facade en Angular
  useEffect(()=>{
    let cancelled = false;

    const fetchAirports = async()=>{
      try {
        setIsLoading(true);
        setError('');
        const data = await getAllAirports();
        if(!cancelled){
          setAirports(data);
        }
      } catch (error) {
        if(!cancelled){
          setError("Ocurrió un error al obtener la lista de aeropuertos.");
        }
      } finally {          
        if(!cancelled){
          setIsLoading(false);
        }
      }
    }
    fetchAirports();

    return ()=>{
          console.log('cleanup');
          cancelled = true;
      }
  },[reload])

  

  const refetch = () => {
    setReloadAirports(prev => prev + 1);
  };

  return { isLoading, error, airports, refetch };
}

export default useAirportList;