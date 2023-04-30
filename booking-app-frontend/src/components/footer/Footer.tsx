import React, {FC, useState} from "react";
import {RentifyLogoNavbar} from "../navbar/RentifyLogoNavbar";
import {FooterBreak} from "./FooterBreak";
import {FooterHelp} from "./FooterHelp";
import {AboutUs} from "../help-contact/AboutUs";
import {PrivacyPolicy} from "../help-contact/PrivacyPolicy";
import {Contact} from "../help-contact/Contact";

export const Footer: FC = () => {
    const [isAboutUsOpened, setAboutUsOpened] = useState<boolean>(false);
    const [isPrivacyPolicyOpened, setPrivacyPolicyOpened] = useState<boolean>(false);
    const [isContactOpened, setIsContactOpened] = useState<boolean>(false);

    return (
        <>
            <FooterBreak/>

            <footer className="bg-white rounded-lg shadow w-full">
                <div className="w-full max-w-screen-xl mx-auto p-4 md:py-8">
                    <div className="sm:flex sm:items-center sm:justify-between">
                        <a className="flex items-center mb-4 sm:mb-0 gap-2">
                            <RentifyLogoNavbar/>
                        </a>

                        <ul className="flex flex-wrap items-center mb-6 text-sm font-medium text-gray-500 sm:mb-0">
                            <li>
                                <button className="mr-4 hover:underline md:mr-6" onClick={() => setAboutUsOpened(true)}>About</button>
                                <AboutUs isOpen={isAboutUsOpened} onClose={() => setAboutUsOpened(false)}/>
                            </li>
                            <li>
                                <button className="mr-4 hover:underline md:mr-6" onClick={() => setPrivacyPolicyOpened(true)}>Privacy Policy</button>
                                <PrivacyPolicy isOpen={isPrivacyPolicyOpened} onClose={() => setPrivacyPolicyOpened(false)}/>
                            </li>
                            <li>
                                <button className="hover:underline" onClick={() => setIsContactOpened(true)}>Contact</button>
                                <Contact isOpen={isContactOpened} onClose={() => setIsContactOpened(false)}/>
                            </li>
                        </ul>

                    </div>

                    <hr className="my-6 border-gray-200 sm:mx-auto lg:my-8"/>
                    <FooterHelp/>
                </div>
            </footer>
        </>
    )
}