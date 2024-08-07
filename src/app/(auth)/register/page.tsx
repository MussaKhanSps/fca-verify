"use client";
// LIB IMPORTS
import { useState } from "react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import { format } from "date-fns";

// UI IMPORTS
import { Calendar as CalendarIcon } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Calendar } from "@/components/ui/calendar";
import {
    Popover,
    PopoverContent,
    PopoverTrigger,
} from "@/components/ui/popover";
import {
    Select,
    SelectContent,
    SelectGroup,
    SelectItem,
    SelectLabel,
    SelectTrigger,
    SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "@/components/ui/checkbox";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
    const [suffix, setSuffix] = useState("");

    const [date, setDate] = useState<Date>();
    const [phoneError, setPhoneError] = useState("");
    const [emailError, setEmailError] = useState("");
    const [firstNameError, setFirstNameError] = useState("");
    const [lastNameError, setLastNameError] = useState("");

    const restrictedDomains = ["example.com", "anotherdomain.com"];

    const validateEmail = (email: string) => {
        if (email === "") {
            return "This is a required field";
        }
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return "Invalid email format";
        }

        const domain = email.split("@")[1];
        if (restrictedDomains.includes(domain)) {
            return "This domain is not allowed";
        }

        return "";
    };

    const validateFirstName = (firstName: string) => {
        const numericRegex = /^\d+$/;

        if (firstName === "") {
            return "This is a required field";
        }

        if (numericRegex.test(firstName)) {
            return "First Name should not contain numeric characters and spaces";
        }

        return "";
    };

    const validatePhone = (phone: string) => {
        const numericRegex = /^\d+$/;

        if (phone === "") {
            return "This is a required field";
        }

        if (!numericRegex.test(phone)) {
            return "Contact No. should not contain non-numeric characters and spaces";
        }

        if (phone.length < 9) {
            return "Contact No. lower than 9 digits";
        }

        return "";
    };

    const handleEmailChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newEmail = event.target.value;
        setEmail(newEmail);
        setTimeout(() => {
            setEmailError(validateEmail(newEmail));
        }, 1000);
    };

    const handleFirstNameChange = (
        event: React.ChangeEvent<HTMLInputElement>
    ) => {
        const newFirstName = event.target.value;
        setEmail(newFirstName);
        setTimeout(() => {
            setFirstNameError(validateFirstName(newFirstName));
        }, 1000);
    };

    const handlePhoneChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newPhone = event.target.value;
        setPhone(newPhone);
        setTimeout(() => {
            setPhoneError(validatePhone(newPhone));
        }, 1000);
    };

    return (
        <div className="flex flex-col items-center justify-center	">
            <form action="">
                {/* EMAIL FIELD */}
                <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="UserEmail">Email*</Label>
                    <Input
                        type="email"
                        id="UserEmail"
                        placeholder="Email"
                        onChange={handleEmailChange}
                        required
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                </div>
                {/* FIRST NAME */}
                <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="fisrtName">First Name*</Label>
                    <Input
                        type="text"
                        id="fisrtName"
                        placeholder="First Name"
                        onChange={handleFirstNameChange}
                        required
                    />
                    {lastNameError && (
                        <p className="text-red-500">{lastNameError}</p>
                    )}
                </div>
                {/* LAST NAME */}
                <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="lastName">Last Name*</Label>
                    <Input
                        type="text"
                        id="lastName"
                        placeholder="First Name"
                        required
                    />
                    {firstNameError && (
                        <p className="text-red-500">{firstNameError}</p>
                    )}
                </div>
                {/* DOB */}
                <div className="m-2 w-96">
                    <Label>Date of Birth*</Label>
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
                {/* PHONE NO */}
                <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="phone">Contact No*</Label>
                    <Input
                        type="number"
                        inputMode="numeric"
                        id="phone"
                        className="remove-arrow"
                        placeholder="Contact No"
                        onChange={handlePhoneChange}
                        required
                    />
                    {phoneError && <p className="text-red-500">{phoneError}</p>}
                </div>

                {/* COUNTRY */}
                <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="country">Country*</Label>
                    <Input type="text" id="country" placeholder="Country" />
                </div>

                {/* STREET */}
                <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="street">Street*</Label>
                    <Input type="text" id="street" placeholder="Street" />
                </div>

                {/* CITY */}
                <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="city">City*</Label>
                    <Input type="text" id="city" placeholder="City" />
                </div>

                {/* STATE */}
                <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="state">State*</Label>
                    <Input type="text" id="state" placeholder="State" />
                </div>

                {/* POSTAL CODE */}
                <div className="m-2 grid w-full max-w-sm items-center gap-1.5">
                    <Label htmlFor="postal">Postal Code*</Label>
                    <Input
                        type="number"
                        inputMode="numeric"
                        id="postal"
                        className="remove-arrow"
                        placeholder="Postal Code"
                    />
                </div>

                {/* SUFFIX */}
                <div className="m-2">
                    <Label htmlFor="suffix">Suffix</Label>
                    <Select
                        name="suffix"
                        value={suffix}
                        onValueChange={setSuffix}
                    >
                        <SelectTrigger className="w-96">
                            <SelectValue placeholder="Select a Suffix" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Suffix</SelectLabel>
                                <SelectItem value="he/him">He/Him</SelectItem>
                                <SelectItem value="she/her">She/Her</SelectItem>
                                <SelectItem value="they/them">
                                    They/Them
                                </SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* SEX / GENER */}
                <div className="m-2">
                    <Label htmlFor="gender">Sex/Gender</Label>
                    <Select
                        name="suffix"
                        value={suffix}
                        onValueChange={setSuffix}
                    >
                        <SelectTrigger className="w-96">
                            <SelectValue placeholder="Select a Gender / Sex" />
                        </SelectTrigger>
                        <SelectContent>
                            <SelectGroup>
                                <SelectLabel>Gender/Sex</SelectLabel>
                                <SelectItem value="male">Male</SelectItem>
                                <SelectItem value="female">Female</SelectItem>
                                <SelectItem value="other">Other</SelectItem>
                            </SelectGroup>
                        </SelectContent>
                    </Select>
                </div>

                {/* PRIVACY POLICY */}
                <div className="m-2 items-top flex items-center space-x-2">
                    <Checkbox
                        className="data-[state=checked]:bg-[#002D62]"
                        id="terms"
                        required
                    />
                    <div className="grid gap-1.5 leading-none">
                        <label
                            htmlFor="terms"
                            className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
                        >
                            Accept terms and conditions
                        </label>
                    </div>
                </div>
                <p className="m-2 text-sm text-muted-foreground">
                    You agree to our
                    <Link
                        className="mx-1 text-[#002D62] hover:text-[#000335] font-bold"
                        href="https://www.fca.org/aboutus/privacy-policy"
                    >
                        Terms of Service
                    </Link>
                    and
                    <Link
                        className="mx-1 text-[#002D62] hover:text-[#000335] font-bold"
                        href="https://www.fca.org/aboutus/privacy-policy"
                    >
                        Privacy Policy.
                    </Link>
                </p>

                {/* SUBMIT BUTTON */}
                <div className="flex items-center justify-center m-2 w-96">
                    <Button
                        type="submit"
                        className="inline-block rounded bg-[#002D62] px-[168px] text-sm font-medium text-white hover:bg-[#000335] focus:outline-none focus:ring active:bg-[#000335]"
                    >
                        Submit
                    </Button>
                </div>
            </form>
        </div>
    );
}
