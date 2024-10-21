import { AuthState, registerShcema } from "@/types/auth/userauth";
import { zodResolver } from "@hookform/resolvers/zod";
import * as z from "zod"
import React, { useState } from "react";
import { useForm } from "react-hook-form";
import toast from "react-hot-toast";
import { Loader2 } from "lucide-react";

import { cn } from "@/lib/utils";

import { INSTRUCTOR_REGISTER,  } from "@/utils/constants";
import instructorApiClient from "@/utils/instructorauth";

interface InstructorRegisterProps {
  setAuthState: (state: AuthState) => void;
}

const InstructorRegister: React.FC<InstructorRegisterProps> = ({ setAuthState }) => {
    const [isLoading, setIsLoading] = useState<boolean>(false);

    const handleLogin = () => {
        setAuthState("Login");
    };
    
    const form = useForm<z.infer<typeof registerShcema>>({
        resolver: zodResolver(registerShcema),
    });

    const { errors, isSubmitting, isValid } = form.formState;

    const onSubmit = async (values: z.infer<typeof registerShcema>) => {
        try {
            setIsLoading(true);
            const response = await instructorApiClient.post(INSTRUCTOR_REGISTER, {
                email: values.email,
                password: values.password
            });
            const data = response.data;

            if (data) {
                toast.success("User registration successful");
                setTimeout(() => {
                    setAuthState("Login");
                }, 1000);
            }
        } catch (error) {
            toast.error("Error creating User");
            console.error(error);
        } finally {
            setIsLoading(false);
        }
    };

    return (
        <section className="flex-1">
            <section className="mt-4 mb-3">
                <h1 className="text-center text-2xl font-semibold">
                    Acquel
                </h1>
                <p className="text-center text-muted-foreground text-lg">A Online Learning Platform</p>
            </section>
            <form onSubmit={form.handleSubmit(onSubmit)} className="flex flex-col w-4/5 lg:px-10 sm:px-2 mx-auto space-y-2">
                <input
                    id="email"
                    placeholder="Email Address"
                    className="w-full border py-3 px-2 outline-none rounded-md border-neutral-400"
                    type="text"
                    {...form.register("email")}
                />
                <label htmlFor="email">
                    {errors.email && <p className="text-xs text-red-500">{errors.email.message}</p>}
                </label>
                
                <input
                    id="password"
                    placeholder="Password"
                    className="border py-3 px-2 rounded-md outline-none border-neutral-400"
                    type="password"
                    {...form.register("password")}
                />
                <label htmlFor="password">
                    {errors.password && <p className="text-xs text-red-500 mb-2">{errors.password.message}</p>}
                </label>
                
                <input
                    id="confirmPassword"
                    placeholder="Confirm Password"
                    className="border py-3 px-2 rounded-md outline-none border-neutral-400"
                    type="password"
                    {...form.register("confirmPassword")}
                />
                <label htmlFor="confirmPassword">
                    {errors.confirmPassword && <p className="text-xs text-red-500 mb-2">{errors.confirmPassword.message}</p>}
                </label>
   
                <button
                    type="submit"
                    disabled={!isValid || isSubmitting || isLoading}
                    className={cn(
                        "bg-gradient-to-r from-purple-500 to-purple-600 px-2 py-3 rounded-md text-white text-lg flex items-center justify-center",
                        (!isValid || isSubmitting || isLoading) && "opacity-50 cursor-not-allowed"
                    )}
                >
                    {isLoading ? (
                        <>
                            <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                            Registering...
                        </>
                    ) : (
                        "Register"
                    )}
                </button>
            </form>

            <p className="text-center mt-4">
                Already a user? <span onClick={handleLogin} className="underline decoration-purple-600 text-purple-600 cursor-pointer">Login</span>
            </p>
        </section>
    );
};

export default InstructorRegister;