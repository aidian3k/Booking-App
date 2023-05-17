import React, {FC} from "react";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import {PropertyPage} from "../components/property-page/PropertyPage";
import {useParams} from "react-router-dom";
import {useAuth} from "../hooks/useAuth";
import LoadingPage from "./LoadingPage";

export const SinglePropertyPage: FC = () => {
    const {id} = useParams();
    const isLoading = useAuth(false);

    if (isLoading) {
        return <LoadingPage/>
    }

    return (
        <>
            <Navbar/>
            <PropertyPage propertyId={id}/>
            <Footer/>
        </>
    )
}