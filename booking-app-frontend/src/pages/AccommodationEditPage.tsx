import React, {FC} from "react";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import {AccommodationEditForm} from "../components/accomodation-form/AccommodationEditForm";
import {useAuth} from "../hooks/useAuth";
import LoadingPage from "./LoadingPage";

export const AccommodationEditPage: FC = () => {
    const isLoading = useAuth(true);

    if (isLoading) {
        return <LoadingPage/>
    }

    return (
        <>
            <Navbar/>
            <AccommodationEditForm/>
            <Footer/>
        </>
    )
}