import React, {FC, useState} from "react";
import {DropDownMenu} from "./dropdown-navbar-menu/DropDownMenu";

export const NavbarUserMenu: FC = () => {
    const [showingMenu, setShowingMenu] = useState<boolean>(false);

    return (
        <>
            <button className={'flex border border-gray-300 rounded-full items-center gap-2 py-2 px-4 shadow shadow-gray-300 hover:shadow-gray-400 transition-all hover:scale-105'}
                    onClick={() => setShowingMenu(!showingMenu)}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                </svg>
                <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-7 h-7">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                </svg>
            </button>

            {showingMenu && <DropDownMenu/>}
        </>
    )
}