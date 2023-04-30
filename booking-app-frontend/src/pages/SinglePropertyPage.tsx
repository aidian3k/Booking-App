import React, {FC} from "react";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import {PropertyPage} from "../components/property-page/PropertyPage";

export const SinglePropertyPage: FC = () => {
    return (
        <>
            <Navbar/>
            <PropertyPage/>
            <Footer/>
        </>
    )
}