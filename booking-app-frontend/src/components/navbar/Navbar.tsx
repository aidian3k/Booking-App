import React, {FC, useState} from "react";
import {RentifyLogoNavbar} from "./RentifyLogoNavbar";
import {NavbarMainButton} from "./NavbarMainButton";
import {NavbarUserMenu} from "./NavbarUserMenu";
import {NavbarBreak} from "./NavbarBreak";
import {NavbarDirections} from "./NavbarDirections";
import {NavbarSearchMenu} from "./NavbarSearchMenu";

export const Navbar: FC = () => {
    const [searchMenuShown, setSearchMenuShown] = useState<boolean>(false);

    return (
        <>
            <header className={'p-4 flex justify-between'}>
                <RentifyLogoNavbar/>

                {searchMenuShown ? <p className={'font-serif md:text-xl text-xs font-semibold border-1 outline p-2 rounded-full cursor-pointer hover:scale-105 transition-all'} onClick={() => setSearchMenuShown(!searchMenuShown)}>The perfect apartment a few clicks away from you</p>
                    : <NavbarMainButton searchMenuShown={searchMenuShown} setSearchMenuShown={setSearchMenuShown}/>}

                <NavbarUserMenu/>
            </header>

            {searchMenuShown && <NavbarSearchMenu/>}
            <NavbarBreak/>
            <NavbarDirections/>
            <NavbarBreak/>
        </>
    )
}


