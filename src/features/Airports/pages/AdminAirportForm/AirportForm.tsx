import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from '@/components/ui/field';
import { Select, SelectContent, SelectGroup, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { Spinner } from '@/components/ui/spinner';
import { Controller } from 'react-hook-form';

import { FormInputField } from '../../../../shared/components/ui/ChustomInput';
import useAirportForm from './useAirportForm';



const AirportForm = () => {

    const {
        control, errors, register,
        countries, cities,
        isCitiesPending,
        handleSubmit,onSubmitFn,handleCountryChange,
     } = useAirportForm();

    return (
        <div>
            <h1 className="text-xl mb-8">Create a new Airport</h1>
            <form 
                className="space-y-6 max-w-md mx-auto p-6 bg-card rounded-lg border shadow-sm"
                onSubmit={handleSubmit(onSubmitFn)}
                >
                {/* Key */}
                <FormInputField
                    label="Airport Key"
                    placeholder="e.g. BCN"
                    description="The 3-letter IATA code."
                    error={errors.key}
                    {...register("key")}
                />

                {/* Name */}
                <FormInputField
                    label="Airport Name"
                    placeholder="e.g. Josep Tarradellas"
                    error={errors.name}
                    {...register("name")}
                />

                {/* Country & City */}
                <FieldSet>
                    <FieldGroup className="grid grid-cols-2 gap-4">
                        <Field>
                            <FieldLabel>Country</FieldLabel>
                            <Controller
                                name="country"
                                control={control}
                                render={({ field }) => (
                                    <Select
                                        value={field.value}
                                        onValueChange={(value) => {
                                            field.onChange(value);
                                            handleCountryChange(value);
                                        }}
                                    >
                                        <SelectTrigger className="w-full">
                                            <SelectValue placeholder="Select" />
                                        </SelectTrigger>
                                        <SelectContent>
                                            <SelectGroup>
                                                {countries && countries.map((c) =>
                                                    <SelectItem key={c.id} value={c.id}>{c.name}</SelectItem>
                                                )}
                                            </SelectGroup>
                                        </SelectContent>
                                    </Select>
                                )}
                            />
                            {errors.country &&
                                <FieldError>{errors.country.message}</FieldError>
                            }
                        </Field>

                        <Field>
                            <FieldLabel>City</FieldLabel>
                            <Controller
                                name="city"
                                control={control}
                                render={({ field }) => (
                                    isCitiesPending ? (
                                        <Spinner />
                                    ) : (
                                        <Select value={field.value} onValueChange={field.onChange}>
                                            <SelectTrigger className="w-full">
                                                <SelectValue placeholder="Select" />
                                            </SelectTrigger>
                                            <SelectContent>
                                                <SelectGroup>
                                                    {cities && cities.map((city) =>
                                                        <SelectItem key={city.key} value={city.key}>{city.name}</SelectItem>
                                                    )}
                                                </SelectGroup>
                                            </SelectContent>
                                        </Select>
                                    )
                                )}
                            />
                            {errors.city &&
                                <FieldError>{errors.city.message}</FieldError>
                            }
                        </Field>
                    </FieldGroup>
                </FieldSet>

                {/* Owner */}
                <FormInputField
                    label="Owner / Operator"
                    placeholder="e.g. ENAIRE"
                    error={errors.owner}
                    {...register("owner")}
                />

                {/* Build */}
                <FormInputField
                    label="Build Year"
                    type="number"
                    placeholder="e.g. 1961"
                    error={errors.build}
                    {...register("build")}
                />

                {/* An example of what they looked like before be an Custom Input */}
                {/* <FieldSet>
                    <FieldGroup>
                        <Field>
                            <FieldLabel>Image URL</FieldLabel>
                            <Input
                                type="url"
                                placeholder="https://example.com/image.jpg"
                                {...register("image")}
                            />
                            {errors.image &&
                                <FieldError>{errors.image.message}</FieldError>
                            }
                        </Field>
                    </FieldGroup>
                </FieldSet> */}

                {/* Url */}
                <FormInputField
                    label="Image URL"
                    type="url"
                    placeholder="https://example.com/image.jpg"
                    error={errors.image}
                    {...register("image")}
                />


                <button
                    type="submit"
                    className="inline-flex items-center justify-center white-space-nowrap rounded-md text-sm font-medium ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 bg-primary text-primary-foreground hover:bg-primary/90 h-10 px-4 py-2 w-full"
                >
                    Save Airport Details
                </button>

            </form>
        </div>
    )
}

export default AirportForm
