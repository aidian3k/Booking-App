import {FC} from "react";
import {Navbar} from "../components/navbar/Navbar";
import {Footer} from "../components/footer/Footer";
import {PropertyList} from "../components/main-page/PropertyList";

export const MainPage: FC = () => {
    return (
        <>
            <Navbar/>
            <PropertyList/>
            <Footer/>
        </>
    )
}