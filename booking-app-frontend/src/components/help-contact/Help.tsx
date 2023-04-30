import React, {FC} from "react";
import {SinglePopUpProps} from "./PopUpProps";
import {AbstractPopUpWindow} from "./AbstractPopUpWindow";

export const Help: FC<SinglePopUpProps> = ({onClose, isOpen}) => {
    return (
        <AbstractPopUpWindow isOpen={isOpen} onClose={onClose}>
            <h2 className="text-lg font-bold mb-4 text-gray-500">Help</h2>
            <p className={'font-serif font-semibold text-base text-gray-500'}>Welcome to our booking app! Here are some helpful tips to get you started:</p>

            <ul className="list-disc">
                <li className={'font-serif text-gray-500'}>To book an appointment, simply choose the proper date and select the property from the list.</li>
                <li className={'font-serif text-gray-500'}>If you need to cancel or reschedule your appointment, please do so at least 24 hours in advance.</li>
                <li className={'font-serif text-gray-500'}>Once you've booked your appointment, you can view your upcoming appointments on the "My Bookings" page.</li>
            </ul>

            <p className={'font-serif font-semibold text-base text-gray-500'}>Thanks for choosing our booking app! We hope you have a great experience.</p>
        </AbstractPopUpWindow>
    )
}