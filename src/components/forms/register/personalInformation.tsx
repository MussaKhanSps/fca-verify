"use client";

// LIB IMPORTS
import Link from "next/link";
import { useForm, SubmitHandler } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";

type Inputs = {
    firstname: string;
    lastname: string;
    suffix?: string;
    title?: string;
};

export default function PersonalInformation({
    setSwap,
}: {
    setSwap: React.Dispatch<React.SetStateAction<string>>;
}) {
    const personalInforSchema = z.object({
        firstname: z
            .string()
            .min(2, "Should be atleast 3 letters Long")
            .regex(/^[a-zA-Z]+$/, "must contain only letters"),
        lastname: z
            .string()
            .min(2, "Should be atleast 3 letters Long")
            .regex(/^[a-zA-Z]+$/, "must contain only letters a-Z"),
        suffix: z.string().optional(),
        title: z.string().optional(),
    });

    const {
        register,
        handleSubmit,
        formState: { errors },
    } = useForm<Inputs>({ resolver: zodResolver(personalInforSchema) });

    const onSubmit: SubmitHandler<Inputs> = (data) => {
        console.log(errors);
        console.log(data);
        setSwap("contact");
    };

    return (
        <>
            {/* TITLES OF FORMS */}
            <div className="h-20">
                <h1 className="text-[#002D62] font-bold text-[40px] text-center">
                    Register
                </h1>
                <p className="text-[#002D62] font-bold text-[16px] text-center">
                    PERSONAL INFORMATION
                </p>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="mt-6">
                <div className="m-2 w-full max-w-sm items-center h-[385px]">
                    {/* FIRST NAME FIELD */}
                    <div>
                        <Label className="ms-2" htmlFor="firstname">
                            First Name
                        </Label>
                        <Input className="mt-2" {...register("firstname")} />
                        {errors.firstname && (
                            <p className="text-red-500 m-2">
                                {errors.firstname.message}
                            </p>
                        )}
                    </div>
                    {/* LAST NAME FIELD */}
                    <div className="pt-2">
                        <Label className="ms-2" htmlFor="lastname">
                            Last Name
                        </Label>
                        <Input className="mt-2" {...register("lastname")} />
                        {errors.lastname && (
                            <p className="text-red-500 m-2">
                                {errors.lastname.message}
                            </p>
                        )}
                    </div>
                    {/* SUFFIX DROPDOWN FIELD */}
                    <div className="pt-2">
                        <Label className="ms-2" htmlFor="UserEmail">
                            Suffix (optional)
                        </Label>
                        <Select defaultValue="">
                            <SelectTrigger className="w-[385px] my-2">
                                <SelectValue placeholder="Select a Suffix" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Suffix</SelectLabel>
                                    <SelectItem value="I">I</SelectItem>
                                    <SelectItem value="II">II</SelectItem>
                                    <SelectItem value="III">III</SelectItem>
                                    <SelectItem value="IV">IV</SelectItem>
                                    <SelectItem value="V">V</SelectItem>
                                    <SelectItem value="VI">VI</SelectItem>
                                    <SelectItem value="VII">VII</SelectItem>
                                    <SelectItem value="VIII">VIII</SelectItem>
                                    <SelectItem value="Jr.">Jr.</SelectItem>
                                    <SelectItem value="Sr.">Sr.</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
                    {/* SUFFIX DROPDOWN FIELD */}
                    <div className="pt-2">
                        <Label className="ms-2" htmlFor="UserEmail">
                            Suffix (optional)
                        </Label>
                        <Select {...register("title")} defaultValue="">
                            <SelectTrigger className="w-[385px] my-2">
                                <SelectValue placeholder="Select a Title" />
                            </SelectTrigger>
                            <SelectContent>
                                <SelectGroup>
                                    <SelectLabel>Titles</SelectLabel>
                                    <SelectItem value="Mr.">Mr.</SelectItem>
                                    <SelectItem value="Mrs.">Mrs.</SelectItem>
                                    <SelectItem value="Ms.">Ms.</SelectItem>
                                </SelectGroup>
                            </SelectContent>
                        </Select>
                    </div>
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
            </form>
        </>
    );
}
