import React, {FC} from "react";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import {AccommodationForm} from "../components/accomodation-form/AccommodationForm";

export const AccommodationAddPage: FC = () => {
    return (
        <>
            <Navbar/>
            <AccommodationForm/>
            <Footer/>
        </>
    )
}