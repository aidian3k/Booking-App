import {FC} from "react";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import {PropertyList} from "../components/main-page/PropertyList";
import {useAuth} from "../hooks/useAuth";

export const MainPage: FC = () => {
    useAuth(false);

    return (
        <>
            <Navbar/>
            <PropertyList/>
            <Footer/>
        </>
    )
}