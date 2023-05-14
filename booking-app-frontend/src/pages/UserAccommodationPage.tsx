import React, {FC, useEffect, useState} from "react";
import {Navbar} from "../components/navbar/Navbar";
import AddIcon from "@mui/icons-material/Add";
import {Footer} from "../components/footer/Footer";
import {PropertyElement} from "../components/profile-page/PropertyElement";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {connector} from "../utils/axios";

export const UserAccommodationPage: FC = () => {
    const navigate: NavigateFunction = useNavigate();
    const [properties, setProperties] = useState<PropertyElementModel[]>([]);


    useEffect(() => {
        connector.get(`/api/v1/property/profile/${1}`)
            .then(response => setProperties(response.data))
    }, []);

    const propertyJsx: JSX.Element[] = properties.map(property => {
        return <PropertyElement property={property}/>
    })

    return (
        <>
            <Navbar/>
            <div className={'flex flex-col md:gap-4 gap-2 md:mx-8 mx-2 my-2'}>
                {propertyJsx}
            </div>

            <div className={'flex w-full justify-center'}>
                <button
                    className={'rounded-full border border-1 px-2 py-2 bg-red-500 hover:scale-105 cursor-pointer border-1 flex gap-2 items-center transition-all'}
                    onClick={() => navigate('/profile/accommodations/add')}>
                    <AddIcon/>
                    <p className={'font-serif text-lg text-white font-semibold'}>Add new place</p>
                </button>
            </div>

            <Footer/>
        </>
    )
}

export interface PropertyElementModel {
    id: number,
    title: string,
    description: string,
    extraInformation: string,
    country: string,
    pricePerNight: number
    street: string,
    city: number
    photo: any
}