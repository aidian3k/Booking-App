import React, {FC} from "react";
import {SinglePopUpProps} from "./PopUpProps";
import {AbstractPopUpWindow} from "./AbstractPopUpWindow";

export const AboutUs: FC<SinglePopUpProps> = ({onClose, isOpen}) => {
    return (
        <AbstractPopUpWindow isOpen={isOpen} onClose={onClose}>
            <h2 className="text-lg font-bold mb-4">About us</h2>
            <p>Welcome to Rentify, the ultimate destination for booking vacation properties! Our platform offers a wide range of properties</p>
            <p>, from cozy cabins to luxurious villas, in some of the most beautiful locations around the world.</p>
            <p>We believe that everyone should have the opportunity to experience the joys of travel, which is why we make</p>
            <p> it easy and affordable to book your dream vacation rental. With Rentify, you can browse properties, compare prices and amenities, and book your stay—all in one convenient location.</p>
        </AbstractPopUpWindow>
    )
}