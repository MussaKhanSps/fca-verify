"use client";

// LIB IMPORTS
import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import Link from "next/link";
import {
    InputOTP,
    InputOTPGroup,
    InputOTPSlot,
} from "@/components/ui/input-otp";
import { REGEXP_ONLY_DIGITS_AND_CHARS } from "input-otp";

type Inputs = {
    dob?: string;
    address?: string;
    phone?: string;
    tos?: boolean;
};

export default function VerifyAccess({
    setSwap,
}: {
    setSwap: React.Dispatch<React.SetStateAction<string>>;
}) {
    const [date, setDate] = useState<Date>();
    const personalInforSchema = z.object({
        dob: z.string().optional(),
        address: z.string().optional(),
        phone: z.string().optional(),
        tos: z.boolean().optional(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(personalInforSchema) });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        setSwap("create");
    };

    return (
        <>
            {/* TITLES OF FORMS */}
            <div className="h-20">
                <h1 className="text-[#002D62] font-bold text-[40px] text-center">
                    Register
                </h1>
                <p className="text-[#002D62] font-bold text-[16px] text-center">
                    VERIFY ACCESS
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                <div className="m-2 w-full max-w-sm items-center h-[385px]">
                    {/* VERIFY ACCESS CODE FIELD */}
                    <div className="pt-2 flex flex-col items-center justify-center w-[380px]">
                        <p className="text-center text-[16px] text-[#4D4D4F] py-8 w-[280px]">
                            We sent a one-time password to
                            &rdquo;johndoe@gmail.com&rdquo; to verify your
                            access to the account.
                        </p>
                        <p className="text-center text-[16px] text-[#4D4D4F] py-8 w-[230px]">
                            Enter your one-time password below:
                        </p>
                        <InputOTP
                            maxLength={6}
                            pattern={REGEXP_ONLY_DIGITS_AND_CHARS}
                        >
                            <InputOTPGroup className="my-2">
                                <InputOTPSlot className="w-16 h-12" index={0} />
                                <InputOTPSlot className="w-16 h-12" index={1} />
                                <InputOTPSlot className="w-16 h-12" index={2} />
                                <InputOTPSlot className="w-16 h-12" index={3} />
                                <InputOTPSlot className="w-16 h-12" index={4} />
                                <InputOTPSlot className="w-16 h-12" index={5} />
                            </InputOTPGroup>
                        </InputOTP>
                    </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="flex items-center justify-center m-2 w-96">
                    <Button
                        type="submit"
                        className="flex rounded bg-[#002D62] px-[110px] text-[24px] font-medium text-white hover:bg-[#000335] focus:outline-none focus:ring active:bg-[#000335]"
                    >
                        VERIFY ACCESS
                    </Button>
                </div>
                {/* LINKS */}
                <div className="flex items-center justify-center">
                    <p className="text-[16px] ms-6">Didn&#39;t receive it?</p>
                    <Link
                        href=""
                        target="_blank"
                        className="mx-4 text-[16px] text-[#295BB0] italic underline "
                    >
                        Send another password
                    </Link>
                </div>
            </form>
        </>
    );
}
