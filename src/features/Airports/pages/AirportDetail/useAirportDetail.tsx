import type { Airport } from "@core/airports/airport.model";
import { getAirportById } from "@core/airports/airport.service";
import { useEffect, useState } from "react";

const useAirportDetail = (id: string | undefined) => {

    const [error, setError] = useState<string>('');
    const [isLoading, setIsLoading] = useState<boolean>(true);
    const [airport, setAirport] = useState<Airport | null>(null);
    const [triggerReload, setTriggerReload] = useState<number>(0);



    useEffect(() => {
        let cancelled = false;
        
        console.log(id);

        // Con esta condicional puedo usar este hook para el formulario 
        // de create y update.. Si viene new, no hago fetch 
        if (!id || id === 'new') {
            setIsLoading(false);
            setError('');
            setAirport(null);
            return;
        }

        if (!id) {
            setError('ID is undefined.');
            return;
        };

        const fetchAirportDetail = async () => {
            try {
                setIsLoading(true);
                setError('')
                const airport = await getAirportById(id);
                if (!cancelled) {
                    setAirport(airport);
                }
            } catch (error) {
                if (!cancelled) {
                    setError('Ocurrió un error al obtener el aeropuerto, intentelo de nuevo mas tarde.')
                }
            } finally {
                if (!cancelled) {
                    setIsLoading(false);
                }
            }
        }

        fetchAirportDetail();

        return () => {
            cancelled = true;
        }
    }, [id, triggerReload])

    const refetch = () => {
        setTriggerReload(prev => prev + 1);
    }

    return { error, isLoading, airport, triggerReload, refetch };
}

export default useAirportDetail;