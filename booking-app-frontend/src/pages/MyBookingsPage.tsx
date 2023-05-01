import React, {FC} from "react";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import {MyBookingElement} from "../components/my-bookings/MyBookingElement";

export const MyBookingsPage: FC = () => {
    return (
        <>
            <Navbar/>

            <div className={'grid md:grid-cols-2 grid-cols-1 md:gap-4 gap-2 md:mx-8 mx-2 my-2'}>
                <MyBookingElement/>
                <MyBookingElement/>
                <MyBookingElement/>
                <MyBookingElement/>
                <MyBookingElement/>
                <MyBookingElement/>
            </div>

            <Footer/>
        </>
    )
}