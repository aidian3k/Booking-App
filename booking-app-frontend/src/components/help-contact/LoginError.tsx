import React, {FC} from "react";
import {SinglePopUpProps} from "./PopUpProps";
import {AbstractPopUpWindow} from "./AbstractPopUpWindow";

export const LoginError: FC<SinglePopUpProps> = ({onClose, isOpen}) => {
    return (
        <AbstractPopUpWindow isOpen={isOpen} onClose={onClose}>
            <h2 className="text-lg font-bold mb-4">Authentication Error</h2>
            <p className={'font-serif text-lg'}>We are sorry, you have passed wrong email or password</p>
            <p className={'font-serif text-base'}>If you do not remember your password, try remembering your password via email!</p>
        </AbstractPopUpWindow>
    )
}