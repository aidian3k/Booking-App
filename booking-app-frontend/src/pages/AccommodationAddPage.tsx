import React, {FC} from "react";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import {AccommodationForm} from "../components/accomodation-form/AccommodationForm";
import {useAuth} from "../hooks/useAuth";
import LoadingPage from "./LoadingPage";

export const AccommodationAddPage: FC = () => {
    const isLoading = useAuth();

    if (isLoading) {
        return <LoadingPage/>
    }

    return (
        <>
            <Navbar/>
            <AccommodationForm/>
            <Footer/>
        </>
    )
}