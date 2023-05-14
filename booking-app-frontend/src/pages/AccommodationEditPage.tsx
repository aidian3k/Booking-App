import React, {FC} from "react";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import {AccommodationEditForm} from "../components/accomodation-form/AccommodationEditForm";

export const AccommodationEditPage: FC = () => {
    return (
        <>
            <Navbar/>
            <AccommodationEditForm/>
            <Footer/>
        </>
    )
}