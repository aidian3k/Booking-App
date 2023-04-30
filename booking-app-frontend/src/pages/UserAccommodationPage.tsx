import React, {FC} from "react";
import {Navbar} from "../components/navbar/Navbar";
import AddIcon from "@mui/icons-material/Add";
import {Footer} from "../components/footer/Footer";
import {PropertyElement} from "../components/profile-page/PropertyElement";

export const UserAccommodationPage: FC = () => {
    return (
        <>
            <Navbar/>
            <div className={'flex flex-col md:gap-4 gap-2 md:mx-8 mx-2 my-2'}>
                <PropertyElement/>
                <PropertyElement/>
                <PropertyElement/>
            </div>

            <div className={'flex w-full justify-center'}>
                <button className={'rounded-full border border-1 px-2 py-2 bg-red-500 hover:scale-105 cursor-pointer border-1 flex gap-2 items-center transition-all'}>
                    <AddIcon/>
                    <p className={'font-serif text-lg text-white font-semibold'}>Add new place</p>
                </button>
            </div>

            <Footer/>
        </>
    )
}