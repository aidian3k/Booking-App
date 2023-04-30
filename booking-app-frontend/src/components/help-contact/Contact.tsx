import React, {FC} from "react";
import {AbstractPopUpWindow} from "./AbstractPopUpWindow";
import {SinglePopUpProps} from "./PopUpProps";

export const Contact: FC<SinglePopUpProps> = ({onClose, isOpen}) => {
    return (
        <AbstractPopUpWindow isOpen={isOpen} onClose={onClose}>
            <h2 className="text-lg font-bold mb-4">Contact us</h2>
            <p className={'font-serif font-semibold text-base'}>If you have any questions or concerns about our app or this privacy policy, please don't hesitate to contact us.</p>
            <p className={'font-serif font-semibold text-base'}>Our customer support team is available 24/7 to assist you.</p>
            <p className={'mt-2 font-serif font-bold text-base'}>You can reach us by:</p>

            <ul className="list-disc">
                <li className={'font-serif'}>Email: rentify@gmail.com</li>
                <li className={'font-serif'}>Phone: +48 728-221-253</li>
                <li className={'font-serif'}>Social media: Follow us on Twitter, Facebook, or Instagram for news, updates, and special offers.</li>
            </ul>
        </AbstractPopUpWindow>
    )
}