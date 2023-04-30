import React, {FC} from "react";
import {RentifyLogoNavbar} from "../navbar/RentifyLogoNavbar";
import {FooterBreak} from "./FooterBreak";
import {FooterHelp} from "./FooterHelp";

export const Footer: FC = () => {
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
                                <a href="#" className="mr-4 hover:underline md:mr-6 ">About</a>
                            </li>
                            <li>
                                <a href="#" className="mr-4 hover:underline md:mr-6">Privacy Policy</a>
                            </li>
                            <li>
                                <a href="#" className="hover:underline">Contact</a>
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