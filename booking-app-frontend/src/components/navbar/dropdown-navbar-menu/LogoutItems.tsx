import React, {FC} from "react";
import {DropDownItem} from "./DropDownItem";
import AppRegistrationIcon from "@mui/icons-material/AppRegistration";
import LoginIcon from "@mui/icons-material/Login";

export const LogoutItems: FC = () => {
    return (
        <>
            <DropDownItem image={<AppRegistrationIcon/>} text={'Register'} pathWhenClicked={'/authorization'}/>
            <DropDownItem image={<LoginIcon/>} text={'Login'} pathWhenClicked={'/authorization'}/>
        </>
    )
}