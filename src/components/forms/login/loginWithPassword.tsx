"use client";

// LIB IMPORTS
import React from "react";
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { useState } from "react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { ArrowLeft, Eye, EyeOff } from "lucide-react";
import { Checkbox } from "@/components/ui/checkbox";

type Inputs = {
    password: string;
    loggedIn?: boolean;
};

export default function LoginWithPassword({
    setSwap,
}: {
    setSwap: React.Dispatch<React.SetStateAction<boolean>>;
}) {
    const [show, setShow] = useState(false);
    const passwordSchema = z.object({
        password: z.string().min(6, "Password must be at least 6 characters"),
        loggedIn: z.boolean().optional(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(passwordSchema) });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
    };

    return (
        <>
            {/* TITLES OF FORMS */}
            <div className="h-28">
                <h1 className="text-[#002D62] font-bold text-[40px] text-center">
                    Log In
                </h1>
            </div>
            <form onSubmit={handleSubmit(onSubmit)}>
                <div className="m-2 w-full max-w-sm items-center h-[300px]">
                    {/* EMAIL PLACEHOLDER */}
                    <div className="flex m-1 items-center">
                        <ArrowLeft
                            className="me-4 cursor-pointer"
                            onClick={() => setSwap(true)}
                        />
                        <p>johndoe@gmail.com</p>
                    </div>
                    {/* PASSWORD FIELD */}
                    <div className="pt-4">
                        <Label className="ms-2" htmlFor="UserEmail">
                            Password
                        </Label>
                        <div className="relative w-[380px]">
                            <Input
                                className="mt-2"
                                placeholder="●●●●●●●●●"
                                {...register("password")}
                                type={show ? "text" : "password"}
                            />
                            <div
                                className="absolute w-[30px] bottom-1 left-[350px] bg-transparent hover:bg-transparent text-black border-none cursor-pointer"
                                onClick={() => setShow(!show)}
                            >
                                {show ? <EyeOff /> : <Eye />}
                            </div>
                        </div>
                        {errors.password && (
                            <p className="text-red-500 m-2">
                                {errors.password.message}
                            </p>
                        )}
                    </div>
                    {/* CHECKBOX */}
                    <div className="flex m-1 mt-6 items-center space-x-2">
                        <Checkbox
                            className="w-[36px] h-[36px] data-[state=checked]:bg-[#002D62] border-[#737373] me-2"
                            id="loggedIn"
                            {...register("loggedIn")}
                        />
                        <label htmlFor="loggedIn" className="">
                            Keep me logged in
                        </label>
                    </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="flex items-center justify-center m-2 w-96">
                    <Button
                        type="submit"
                        className="flex rounded bg-[#002D62] px-[165px] text-[24px] font-medium text-white hover:bg-[#000335] focus:outline-none focus:ring active:bg-[#000335]"
                    >
                        LOG IN
                    </Button>
                </div>
                {/* LINKS */}
                <div className="flex items-center justify-between">
                    <p className="text-[16px]">Forgot Password?</p>
                    <Link
                        href="/forgot-password"
                        className="text-[16px] text-[#295BB0] italic underline"
                    >
                        Reset my password
                    </Link>
                </div>
            </form>
        </>
    );
}
