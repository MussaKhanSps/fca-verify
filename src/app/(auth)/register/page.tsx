"use client";

// LIB IMPORTS
import { useState } from "react";

// UI IMPORTS
import Email from "@/components/forms/register/email";
import PersonalInformation from "@/components/forms/register/personalInformation";
import ContactInformation from "@/components/forms/register/contactInformation";
import VerifyAccess from "@/components/forms/register/verify";

export default function RegisterPage() {
    const [swap, setSwap] = useState("email");

    // console.log(email);
    return (
        <div className="flex flex-col items-center justify-center ">
            {swap === "email" ? (
                <Email setSwap={setSwap} />
            ) : swap === "personal" ? (
                <PersonalInformation setSwap={setSwap} />
            ) : swap === "contact" ? (
                <ContactInformation setSwap={setSwap} />
            ) : swap === "verify" ? (
                <VerifyAccess setSwap={setSwap} />
            ) : null}
        </div>
    );
}
