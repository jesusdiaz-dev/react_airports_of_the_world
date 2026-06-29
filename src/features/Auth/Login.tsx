import { Alert, AlertTitle } from "@/components/ui/alert";
import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Container } from "@/shared/components/ui/container";
import { zodResolver } from "@hookform/resolvers/zod";
import { InfoIcon } from "lucide-react";
import { useForm } from "react-hook-form";
import useLogin, { type LoginInputs } from "./useLogin";





const LoginPage: React.FC = () => {

    const { error , isFetching , onSubmit, loginSchema} = useLogin();

    const { register, handleSubmit, watch, formState: { errors, isValid } } = useForm<LoginInputs>(
        {
            resolver: zodResolver(loginSchema),
            mode: "onTouched"
    });
    
    return (
        
        <div className="min-h-screen flex justify-center items-center bg-gradient">
            <Container>
                <main className="flex justify-center items-center" >
                    <Card className="m-auto  md:w-120 px-12" >
                        <div>
                            <h2 className="text-xl">Airports of the World</h2>
                        </div>
                        <CardTitle className="text-2xl">Login</CardTitle>
                        <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                            Access just for admin Role
                        </p>
                        <form onSubmit={handleSubmit(onSubmit)} className="flex flex-col">
                            <FieldSet >
                                <FieldGroup>
                                    <Field>
                                        <FieldLabel htmlFor="email">User</FieldLabel>
                                        <Input
                                            id="email"
                                            type="email"
                                            placeholder="jesusdiaz013@gmail.com"
                                            {...register("email")} />
                                            {errors.email &&
                                                <FieldError>{errors.email.message}</FieldError>
                                            }
                                    </Field>
                                    <Field>
                                        <FieldLabel
                                            htmlFor="password"
                                        >Password</FieldLabel>
                                        <Input
                                            id="password"
                                            placeholder="Admin123"
                                            {...register("password")} />
                                            {errors.password &&
                                                <FieldError>{errors.password.message}</FieldError>
                                            }
                                    </Field>
            
                                    {
                                        error &&
                                         <Alert variant="destructive">
                                            <InfoIcon />
                                            <AlertTitle>{error}</AlertTitle>
                                        </Alert>
                                    }
                                </FieldGroup>
                            </FieldSet>
                            <Button
                                className="mt-4 cursor-pointer p-4"
                                disabled={!isValid || isFetching}
                                type="submit">Log In
                            </Button>
                        </form>
                    </Card>
                </main>
            </Container>
        </div>
    )
}

export default LoginPage;

