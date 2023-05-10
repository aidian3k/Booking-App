import React, {FC} from "react";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import {PropertyPage} from "../components/property-page/PropertyPage";
import {useParams} from "react-router-dom";

export const SinglePropertyPage: FC = () => {
    const {id} = useParams();

    return (
        <>
            <Navbar/>
            <PropertyPage propertyId={id}/>
            <Footer/>
        </>
    )
}