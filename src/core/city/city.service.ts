import { airportsApi } from "@core/api/airports.api";
import type { City } from "./models/city.model";
import type { Country } from "@core/country/models/country.model";

export const getCityByCountry = async (country : Country) : Promise<City[]> => {
    const { data } = await airportsApi.get<City[]>('cities');
    console.log(data);
    const dataFilteredByCountry = data.filter(city => city.country === country.id)
    return dataFilteredByCountry;
}