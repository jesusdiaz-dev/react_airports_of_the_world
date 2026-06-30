import { createUpdateAirport } from '@core/airports/airport.service';
import {useMutation, useQuery } from '@tanstack/react-query'
import { z } from 'zod';
import { VALIDATION_MESSAGES as MESAGE } from '@core/Common/validation.constants';
import { useEffect, useState } from 'react';
import type { Country } from '@core/country/models/country.model';
import { getAllCountries } from '@core/country/country.service';
import { getCityByCountry } from '@core/city/city.service';
import type { Airport } from '@core/airports/airport.model';
import { toast } from "sonner"
import { zodResolver } from '@hookform/resolvers/zod';
import { useForm } from 'react-hook-form';


export const aiportSchema = z.object({
        key: z.string().length(3, {error:"The key must be 3 characters long"}),
        name: z.string().min(1,MESAGE.required),
        country: z.string().min(1,MESAGE.required),
        city: z.string().min(1,MESAGE.required),
        owner: z.string().min(1,MESAGE.required),
        build: z.string().min(1,MESAGE.required),
        image: z.url(MESAGE.invalidUrl)
    });

export type AirportInputs = z.infer<typeof aiportSchema>;

const useAirportForm = () => {

    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);


    const { register, handleSubmit, control, reset, formState: {errors}} = useForm<AirportInputs>({
        resolver: zodResolver(aiportSchema),
        mode: "onTouched",
    });
    
    const {
        isPending: isCitiesPending,
        error: citiesError,
        data: cities
    } = useQuery({
        queryKey: ['cities', selectedCountry],
        queryFn: () => getCityByCountry(selectedCountry!),
        staleTime: 1000 * 60 * 5,
        enabled: !!selectedCountry,
    })

    const {
        isPending: isCountriesPending,
        error: countriesError,
        data: countries } = useQuery({
            queryKey: ['countries'],
            queryFn: getAllCountries,
            staleTime: 1000 * 60 * 5
    })

    useEffect(() => {
        if (countries && countries.length > 0 && !selectedCountry) {
            setSelectedCountry(countries[0]);
        }
    }, [countries, selectedCountry])
    
    // A diferencia de useQuery que se ejecuta al iniciar el componente,
    // useMutation espera a que se ejecute 'mutation.mutate()' para dispararse.
    const mutation = useMutation({
        mutationFn: createUpdateAirport,
        // onSuccess: ()=>{}
        // onError: ()=>{}
    });




    const onSubmitFn = async ( airportLike : Partial<Airport> ) => {
        await mutation.mutateAsync( airportLike , {
            onSuccess: ()=>{
                toast.success("Airport Created Successfully.",{ position: "top-right" })
                reset();
                setSelectedCountry(countries![0]);
            },
            onError: (error)=>{
                // tengo que manejar el error de esta manera 
                // porque json server siempre me devuelve un 500.
                // Si fuera un backend real, sabria que error sucedió realmente.
                alert('An error has occurred. Maybe the ID is duplicated. ')
            }
        } );
    }

    const handleCountryChange = (countryId: string) => {
        const country = countries?.find(c => c.id === countryId) ?? null;
        setSelectedCountry(country);
    };

    return {
        handleSubmit,
        control,
        errors,
        register,

        isCitiesPending,
        onSubmitFn,
        mutation,
        countries,
        cities,
        handleCountryChange,

    }
}


export default useAirportForm
