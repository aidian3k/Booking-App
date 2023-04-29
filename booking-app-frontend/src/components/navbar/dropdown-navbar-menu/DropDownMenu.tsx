import React, {FC} from "react";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";
import HelpIcon from "@mui/icons-material/Help";
import {DropDownItem} from "./DropDownItem";

export const DropDownMenu: FC = () => {
    return (
        <div className={'absolute md:top-16 top-20 md:right-20 right-12 bg-white border-1 shadow p-4 rounded-2xl md:w-52 w-44'}>
            <DropDownItem image={<AppRegistrationIcon/>} text={'Register'}/>
            <DropDownItem image={<LoginIcon/>} text={'Login'}/>
            <DropDownItem image={<HelpIcon/>} text={'Help'}/>
        </div>
    )
}