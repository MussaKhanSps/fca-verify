"use client";

// LIB IMPORTS
import React from "react";
import { useState } from "react";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { format } from "date-fns";
import { cn } from "@/lib/utils";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import { CalendarIcon } from "lucide-react";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import { Checkbox } from "@/components/ui/checkbox";
import Link from "next/link";

type Inputs = {
    dob?: string;
    address?: string;
    phone?: string;
    tos?: boolean;
};

export default function ContactInformation({
    setSwap,
}: {
    setSwap: React.Dispatch<React.SetStateAction<string>>;
}) {
    const [date, setDate] = useState<Date>();
    const contactInfoSchema = z.object({
        dob: z.string().optional(),
        address: z.string().optional(),
        phone: z.string().optional(),
        tos: z.boolean().optional(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(contactInfoSchema) });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(data);
        setSwap("verify");
    };

    return (
        <>
            {/* TITLES OF FORMS */}
            <div className="h-20">
                <h1 className="text-[#002D62] font-bold text-[40px] text-center">
                    Register
                </h1>
                <p className="text-[#002D62] font-bold text-[16px] text-center">
                    CONTACT INFORMATION
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                <div className="m-2 w-full max-w-sm items-center h-[385px]">
                    {/* DOB FIELD */}
                    <div>
                        <Label className="ms-2" htmlFor="dob">
                            Date of Birth
                        </Label>
                        <Popover>
                            <PopoverTrigger asChild>
                                <Button
                                    variant={"outline"}
                                    className={cn(
                                        "w-96 justify-start text-left font-normal",
                                        !date && "text-muted-foreground"
                                    )}
                                >
                                    <CalendarIcon className="mr-2 h-4 text-[#72818E]" />
                                    {date ? (
                                        format(date, "PPP")
                                    ) : (
                                        <span className="text-[#72818E]">
                                            Pick a date
                                        </span>
                                    )}
                                </Button>
                            </PopoverTrigger>
                            <PopoverContent className="w-auto p-0">
                                <Calendar
                                    mode="single"
                                    selected={date}
                                    onSelect={setDate}
                                    initialFocus
                                    captionLayout="dropdown-buttons"
                                    fromYear={1960}
                                    toYear={2030}
                                />
                            </PopoverContent>
                        </Popover>
                    </div>
                    {/* ADDRESS FIELD */}
                    <div className="pt-2">
                        <Label className="ms-2" htmlFor="address">
                            Address
                        </Label>
                        <Input
                            className="mt-2"
                            placeholder="Type to select an address..."
                        />
                        {errors.address && (
                            <p className="text-red-500 m-2">
                                {errors.address.message}
                            </p>
                        )}
                    </div>
                    {/* SUFFIX DROPDOWN FIELD */}
                    <div className="pt-2">
                        <Label className="ms-2" htmlFor="phone">
                            Phone
                        </Label>
                        <Input
                            className="mt-2 remove-arrow"
                            placeholder="+1 (XXX) XXX-XXX"
                            type="number"
                            inputMode="numeric"
                        />
                        {errors.phone && (
                            <p className="text-red-500 m-2">
                                {errors.phone.message}
                            </p>
                        )}
                    </div>
                    {/* CHECKBOX */}
                    <div className="flex m-1 mt-6 items-center space-x-2">
                        <Checkbox
                            className="w-[36px] h-[36px] data-[state=checked]:bg-[#002D62] border-[#737373] me-2"
                            id="tos"
                        />
                        <label htmlFor="tos" className="text-[16px]">
                            I agree to FCA&lsquo;s
                            <Link
                                href="https://www.fca.org/aboutus/privacy-policy"
                                className="mx-1 text-[16px] text-[#295BB0] italic underline  "
                            >
                                Terms of Service
                            </Link>{" "}
                            and
                            <Link
                                href="https://www.fca.org/aboutus/privacy-policy"
                                className="mx-1 text-[16px] text-[#295BB0] italic underline  "
                            >
                                Privacy Policy
                            </Link>
                        </label>
                    </div>
                </div>

                {/* SUBMIT BUTTON */}
                <div className="flex items-center justify-center m-2 w-96">
                    <Button
                        // onClick={() => setSwap("verify")}
                        type="submit"
                        className="flex rounded bg-[#002D62] px-[150px] text-[24px] font-medium text-white hover:bg-[#000335] focus:outline-none focus:ring active:bg-[#000335]"
                    >
                        REGISTER
                    </Button>
                </div>
            </form>
        </>
    );
}
