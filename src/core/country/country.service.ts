import { airportsApi } from "@core/api/airports.api";
import type { Country } from "./models/country.model";

export const getAllCountries = async () : Promise<Country[]> => {
    const { data } = await airportsApi.get('countries');
    return data;
}