import { Button } from "@/components/ui/button";
import { Card, CardTitle } from "@/components/ui/card";
import { Field, FieldError, FieldGroup, FieldLabel, FieldSet } from "@/components/ui/field";
import { Input } from "@/components/ui/input";
import { Container } from "@/shared/components/ui/container";
import { login } from "@core/auth/auth.service";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";
import { useForm, type SubmitHandler } from "react-hook-form";
import { useNavigate } from "react-router-dom";
import { z } from "zod";

const loginSchema = z.object({
    email: z.email("Invalid email"),
    password: z.string().min(1, "password is required")
})

type LoginInputs = z.infer<typeof loginSchema>;



const LoginPage: React.FC = () => {

    const navigate = useNavigate();

    const { register, handleSubmit, watch, formState: { errors } } = useForm<LoginInputs>(
        {
            resolver: zodResolver(loginSchema),
            mode: "onTouched"
        });

    const [error, setError] = useState('');
    const [isFetching, setIsFetching] = useState(false);

    const onSubmit: SubmitHandler<LoginInputs> = async ({ email, password }) => {
        try {
            setIsFetching(true)
            setError('');
            const resp = await login({ email, password });
            localStorage.setItem('token',resp.token);
            navigate(`/admin/dashboard`);
        } catch (error) {
            // if(!cancelled){
            setError('ocurrio un error')
            // }
        } finally {
            setIsFetching(false);
        }
    };

    return (
        <Container  >
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
                                        placeholder="Email"
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
                                        placeholder="Email"

                                        {...register("password")} />
                                    {errors.password &&
                                        <FieldError>{errors.password.message}</FieldError>
                                    }
                                </Field>

                                

                            </FieldGroup>
                        </FieldSet>
                        <Button className="mt-4 cursor-pointer p-4" type="submit">Log In</Button>
                    </form>
                </Card>
            </main>

        </Container>
    )
}

export default LoginPage;