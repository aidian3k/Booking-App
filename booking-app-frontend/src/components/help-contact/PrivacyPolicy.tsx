import React, {FC} from "react";
import {SinglePopUpProps} from "./PopUpProps";
import {AbstractPopUpWindow} from "./AbstractPopUpWindow";

export const PrivacyPolicy: FC<SinglePopUpProps> = ({onClose, isOpen}) => {
    return (
        <AbstractPopUpWindow isOpen={isOpen} onClose={onClose}>
            <h2 className="text-lg font-bold mb-4">Privacy policy</h2>
            <p className={'font-serif font-semibold text-center text-lg'}>Information we collect:</p>

            <ul className="list-disc">
                <li className={'font-serif'}>When you create an account on our app, we collect your name, email address, and other basic contact information.</li>
                <li className={'font-serif'}>When you book a service through our app, we collect information about the service provider, date and time of the appointment, and any other details necessary to fulfill your request.</li>
                <li className={'font-serif'}>We may collect information about your location when you use our app, in order to provide you with relevant services and recommendations.</li>
                <li className={'font-serif'}>We may also collect information about your device and internet connection, such as your IP address and browser type.</li>
                <li className={'font-serif'}>We may use your information for marketing purposes, such as sending you promotional emails or offers.</li>
            </ul>
        </AbstractPopUpWindow>
    )
}