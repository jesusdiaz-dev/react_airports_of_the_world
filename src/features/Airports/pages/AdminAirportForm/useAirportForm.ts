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

interface Props {
    airport ?: Airport;
}

const useAirportForm = ( { airport } : Props = {}) => {

    const [selectedCountry, setSelectedCountry] = useState<Country | null>(null);

    // Crea el formulario
    const { register, handleSubmit, control, reset, formState: {errors}} = useForm<AirportInputs>({
        resolver: zodResolver(aiportSchema),
        mode: "onTouched",
    });
    
    // Get de cities cuando, se habilita cuando hay un selected country
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

    // Get de Countries
    const {
        isPending: isCountriesPending,
        error: countriesError,
        data: countries } = useQuery({
            queryKey: ['countries'],
            queryFn: getAllCountries,
            staleTime: 1000 * 60 * 5
    })

    useEffect(() => {
    
    if (!countries || countries.length === 0) return;

    if (airport) {
        reset({
            key: airport.key,
            name: airport.name,
            country: airport.country,
            city: airport.city,
            owner: airport.owner,
            build: airport.build,
            image: airport.image,
        });

        const country = countries.find(c => c.name === airport.country) ?? null;
        setSelectedCountry(country);
    } else if (!selectedCountry) {
        setSelectedCountry(countries[0]); // modo "crear"
    }
}, [airport, countries, reset]);
    
    // A diferencia de useQuery que se ejecuta al iniciar el componente,
    // useMutation espera a que se ejecute 'mutation.mutate()' para dispararse.
    const mutation = useMutation({
        mutationFn: createUpdateAirport,
    });


    const handleCountryChange = (countryName: string) => {
        const country = countries?.find(c => c.name === countryName) ?? null;
        setSelectedCountry(country);
    };

    const onSubmitFn = async ( airportLike : Partial<Airport> ) => {
        await mutation.mutateAsync( airportLike , {
            onSuccess: ()=>{
                const text = airport ? 'Updated' : 'Created';
                toast.success(`Airport ${text} Successfully.`,{ position: "top-right" })
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

    
    return {
        handleSubmit,
        control,
        errors,
        register,

        isCitiesPending: !!selectedCountry && isCitiesPending,
        onSubmitFn,
        mutation,
        countries,
        cities,
        handleCountryChange,

    }
}


export default useAirportForm
