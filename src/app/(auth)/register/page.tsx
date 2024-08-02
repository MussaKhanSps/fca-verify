"use client";
import { useState } from "react";

export default function RegisterPage() {
    const [email, setEmail] = useState("");
    const [phone, setPhone] = useState("");
    const [firstName, setFirstName] = useState("");
    const [lastName, setLastName] = useState("");
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
                <div className="m-2 w-96 ">
                    <label
                        htmlFor="UserEmail"
                        className="block text-xs font-medium text-gray-700"
                    >
                        Email*
                    </label>

                    <input
                        type="email"
                        id="UserEmail"
                        className="mt-1 w-full rounded-md border-2 border-gray-500 shadow-sm sm:text-sm"
                        onChange={handleEmailChange}
                        required
                    />
                    {emailError && <p className="text-red-500">{emailError}</p>}
                </div>
                {/* FIRST NAME */}
                <div className="m-2 w-96">
                    <label
                        htmlFor="fisrtName"
                        className="block text-xs font-medium text-gray-700"
                    >
                        First Name*
                    </label>

                    <input
                        type="text"
                        id="fisrtName"
                        className="mt-1 w-full rounded-md border-2 border-gray-500 shadow-sm sm:text-sm"
                        onChange={handleFirstNameChange}
                        required
                    />
                    {firstNameError && (
                        <p className="text-red-500">{firstNameError}</p>
                    )}
                </div>
                {/* LAST NAME */}
                <div className="m-2 w-96">
                    <label
                        htmlFor="lastName"
                        className="block text-xs font-medium text-gray-700"
                    >
                        Last Name*
                    </label>

                    <input
                        type="text"
                        id="lastName"
                        className="mt-1 w-full rounded-md border-2 border-gray-500 shadow-sm sm:text-sm"
                        required
                    />
                </div>
                {/* DOB */}
                <div className="m-2 w-96">
                    <label
                        htmlFor="dob"
                        className="block text-xs font-medium text-gray-700"
                    >
                        DOB - Date of Birth
                    </label>

                    <input
                        type="text"
                        id="dob"
                        className="mt-1 w-full rounded-md border-2 border-gray-500 shadow-sm sm:text-sm"
                        required
                    />
                </div>
                {/* PHONE NO */}
                <div className="m-2 w-96">
                    <label
                        htmlFor="phone"
                        className="block text-xs font-medium text-gray-700"
                    >
                        Contact No
                    </label>

                    <input
                        type="number"
                        inputMode="numeric"
                        id="phone"
                        className="mt-1 w-full rounded-md border-2 border-gray-500 shadow-sm sm:text-sm"
                        onChange={handlePhoneChange}
                        required
                    />
                    {phoneError && <p className="text-red-500">{phoneError}</p>}
                </div>
                {/* COUNTRY */}
                <div className="m-2 w-96">
                    <label
                        htmlFor="country"
                        className="block text-xs font-medium text-gray-700"
                    >
                        Country
                    </label>

                    <input
                        type="text"
                        id="country"
                        className="mt-1 w-full rounded-md border-2 border-gray-500 shadow-sm sm:text-sm"
                        required
                    />
                </div>
                {/* STREET */}
                <div className="m-2 w-96">
                    <label
                        htmlFor="street"
                        className="block text-xs font-medium text-gray-700"
                    >
                        Street
                    </label>

                    <input
                        type="text"
                        id="street"
                        className="mt-1 w-full rounded-md border-2 border-gray-500 shadow-sm sm:text-sm"
                        required
                    />
                </div>
                {/* CITY */}
                <div className="m-2 w-96">
                    <label
                        htmlFor="city"
                        className="block text-xs font-medium text-gray-700"
                    >
                        City
                    </label>

                    <input
                        type="text"
                        id="city"
                        className="mt-1 w-full rounded-md border-2 border-gray-500 shadow-sm sm:text-sm"
                        required
                    />
                </div>
                {/* STATE */}
                <div className="m-2 w-96">
                    <label
                        htmlFor="state"
                        className="block text-xs font-medium text-gray-700"
                    >
                        State
                    </label>

                    <input
                        type="text"
                        id="state"
                        className="mt-1 w-full rounded-md border-2 border-gray-500 shadow-sm sm:text-sm"
                        required
                    />
                </div>
                {/* POSTAL CODE */}
                <div className="m-2 w-96">
                    <label
                        htmlFor="postal"
                        className="block text-xs font-medium text-gray-700"
                    >
                        Postal Code
                    </label>

                    <input
                        type="text"
                        id="postal"
                        className="mt-1 w-full rounded-md border-2 border-gray-500 shadow-sm sm:text-sm"
                        required
                    />
                </div>
                {/* SUFFIX */}
                <div className="m-2 w-96">
                    <label
                        htmlFor="suffix"
                        className="block text-xs font-medium text-gray-700"
                    >
                        Suffix
                    </label>

                    <select
                        name="suffix"
                        id="suffix"
                        className="mt-1.5 w-full rounded-lg py-[2px] border-2 border-gray-500 text-gray-700 sm:text-sm"
                        required
                    >
                        <option value="" disabled selected>
                            Please select
                        </option>
                        <option value="he/him">He/Him</option>
                        <option value="she/her">She/Her</option>
                        <option value="they/them">They/Them</option>
                    </select>
                </div>
                {/* SEX / GENER */}
                <div className="m-2 w-96">
                    <label
                        htmlFor="gender"
                        className="block text-xs font-medium text-gray-700"
                    >
                        Sex/Gender
                    </label>

                    <select
                        name="gender"
                        id="gender"
                        className="mt-1.5 w-full rounded-lg py-[2px] border-2 border-gray-500 text-gray-700 sm:text-sm"
                        required
                    >
                        <option value="" disabled selected>
                            Please select
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="other">Other</option>
                    </select>
                </div>
                <div className="flex m-2">
                    <input type="checkbox" className="h-5 w-5 mr-2" required />
                    <div>
                        <p>By creating an account you are agreeing to the</p>
                        <p>Terms of Service & Privacy Policy.</p>
                    </div>
                </div>

                <div className="flex items-center justify-center m-2 w-96">
                    <button
                        type="submit"
                        className="inline-block rounded bg-blue-600 px-[158px] py-3 text-sm font-medium text-white hover:bg-blue-500 hover:shadow-xl focus:outline-none focus:ring active:bg-blue-500"
                    >
                        Submit
                    </button>
                </div>
            </form>
        </div>
    );
}
