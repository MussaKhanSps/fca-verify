"use client";

// LIB IMPORTS
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";

type Inputs = {
    email: string;
};

export default function LoginWithEmail({
    setSwap,
}: {
    setSwap: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const emailSchema = z.object({
        email: z.string().email("Invalid email format"),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(emailSchema) });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        setSwap(false);
    };

    return (
        <>
            {/* TITLES OF FORMS */}
            <div className="h-28">
                <h1 className="text-[#002D62] font-bold text-[40px] text-center">
                    Welcome
                </h1>
                <p className="text-[#002D62] font-bold text-[16px] text-center">
                    LOG IN
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                {/* EMAIL FIELD */}
                <div className="m-2 w-full max-w-sm items-center h-[300px]">
                    <Label className="ms-2" htmlFor="UserEmail">
                        Email
                    </Label>
                    <Input
                        className="mt-2"
                        placeholder="example@domain.com"
                        {...register("email")}
                    />
                    {errors.email && (
                        <p className="text-red-500 m-2">
                            {errors.email.message}
                        </p>
                    )}
                </div>

                {/* SUBMIT BUTTON */}
                <div className="flex items-center justify-center m-2 w-96">
                    <Button
                        type="submit"
                        className="flex rounded bg-[#002D62] px-[140px] text-[24px] font-medium text-white hover:bg-[#000335] focus:outline-none focus:ring active:bg-[#000335]"
                    >
                        CONTINUE
                    </Button>
                </div>
                {/* LINKS */}
                <div className="flex items-center justify-between">
                    <p className="text-[16px]">Need an account?</p>
                    <Link
                        href="/register"
                        className="text-[16px] text-[#295BB0] italic underline"
                    >
                        Register for an Account
                    </Link>
                </div>
            </form>
        </>
    );
}
