import React, {FC, useState} from "react";
import {SinglePopUpProps} from "./PopUpProps";
import {AbstractPopUpWindow} from "./AbstractPopUpWindow";
import {AccountCircle} from "@mui/icons-material";
import {LoginInput} from "../authorization/login/LoginInput";

export const RememberPasswordHelper: FC<SinglePopUpProps> = ({onClose, isOpen}) => {
    const [email, setEmail] = useState<string>('');

    return (
        <AbstractPopUpWindow isOpen={isOpen} onClose={onClose}>
            <h2 className="text-lg font-bold mb-4">Remember password</h2>
            <p>In order to remember your password, you have to pass your e-mail and we send further information on it:</p>
            <LoginInput
                icon={<AccountCircle/>}
                placeholder={'Type in your e-mail'}
                formHelper={'E-MAIL'}
                onChange={(event: any) => setEmail(event.target.value)}
            />
            <button className={'rounded-lg p-2 text-white font-serif text-lg bg-green-500 hover:scale-105 hover:bg-green-700 transition-all mr-2'}>
                Send information
            </button>
        </AbstractPopUpWindow>
    )
}