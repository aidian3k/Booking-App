import React, {FC, useState} from "react";
import {RentifyLogoNavbar} from "./RentifyLogoNavbar";
import {NavbarMainButton} from "./NavbarMainButton";
import {NavbarUserMenu} from "./NavbarUserMenu";
import {NavbarBreak} from "./NavbarBreak";
import {NavbarDirections} from "./NavbarDirections";
import {NavbarSearchMenu} from "./NavbarSearchMenu";
import {motion} from "framer-motion";
import {NavbarNotLoggedInfo} from "./NavbarNotLoggedInfo";
import {useAppSelector} from "../../hooks/reduxHooks";
import FilterListIcon from '@mui/icons-material/FilterList';
import {Filter} from "../filter/Filter";

export const Navbar: FC = () => {
    const [searchMenuShown, setSearchMenuShown] = useState<boolean>(false);
    const loggedIn: boolean = useAppSelector(state => state.auth.value);
    const [isFiltering, setIsFiltering] = useState<boolean>(false);

    return (
        <>
            <header className={'p-4 flex justify-between'}>
                <RentifyLogoNavbar/>

                {searchMenuShown ?
                    <p className={'font-serif md:text-xl text-xs font-semibold border-1 outline p-2 rounded-full cursor-pointer hover:scale-105 transition-all'}
                       onClick={() => setSearchMenuShown(!searchMenuShown)}>The perfect apartment a few clicks away from
                        you</p>
                    : <NavbarMainButton searchMenuShown={searchMenuShown} setSearchMenuShown={setSearchMenuShown}/>}

                <NavbarUserMenu/>
            </header>

            {searchMenuShown &&
                (<motion.div initial={{y: -100}}
                             animate={{y: 0}}
                             transition={{duration: 0.3}}><NavbarSearchMenu/></motion.div>)}
            <NavbarBreak/>

            <div className={'flex justify-center'}>
                <button className={'flex gap-2 p-2 border border-solid-500 rounded-xl my-2'}
                        onClick={() => setIsFiltering(true)}
                >
                    <FilterListIcon/>
                    <p className={'font-serif font-semibold'}>Filters</p>
                </button>
            </div>

            <NavbarBreak/>
            <Filter isFiltering={isFiltering} setIsFiltering={setIsFiltering}/>

            {loggedIn ? <NavbarDirections/> : <NavbarNotLoggedInfo/>}

            <NavbarBreak/>
        </>
    )
}


