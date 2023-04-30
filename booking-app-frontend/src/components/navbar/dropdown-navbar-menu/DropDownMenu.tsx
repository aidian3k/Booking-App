import React, {FC, useState} from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import HelpIcon from "@mui/icons-material/Help";
import {DropDownItem} from "./DropDownItem";
import {Help} from "../../help-contact/Help";

export const DropDownMenu: FC = () => {
    const [isHelpOpened, setIsHelpOpened] = useState<boolean>(false);

    return (
        <div className={'absolute md:top-16 top-20 md:right-20 right-12 bg-white border-1 shadow p-4 rounded-2xl md:w-52 w-44'}>
            <DropDownItem image={<AppRegistrationIcon/>} text={'Register'} pathWhenClicked={'/authorization'}/>
            <DropDownItem image={<LoginIcon/>} text={'Login'} pathWhenClicked={'/authorization'}/>
            <button className={'flex gap-4 hover:bg-gray-100 bg-white w-full'} onClick={() => setIsHelpOpened(true)}>
                <HelpIcon/>
                <p className={'font-serif text-base text-gray-500'}>{'Help'}</p>
            </button>
            <Help isOpen={isHelpOpened} onClose={() => setIsHelpOpened(false)}/>
            <div className={'w-full border border-1 border-gray-500 mt-1'}/>
        </div>
    )
}