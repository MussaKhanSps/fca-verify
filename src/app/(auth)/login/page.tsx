"use client";

// LIB IMPORTS
import { useState } from "react";

// UI IMPORTS
import LoginWithEmail from "@/components/forms/login/loginWithEmail";
import LoginWithPassword from "@/components/forms/login/loginWithPassword";

export default function LoginPage() {
    const [swap, setSwap] = useState(true);

    // console.log(email);

    const checkLogin = () => {};

    return (
        <div className="flex flex-col items-center justify-center ">
            {swap ? (
                <LoginWithEmail setSwap={setSwap} />
            ) : (
                <LoginWithPassword setSwap={setSwap} />
            )}
        </div>
    );
}
