import React, {FC, useState} from "react";
import {PropertyElementModel} from "../../pages/UserAccommodationPage";
import {DeletingPopUp} from "./DeletingPopUp";
import {NavigateFunction, useNavigate} from "react-router-dom";

export const PropertyElement: FC<{property: PropertyElementModel}> = (props) => {
    const [isDeleting, setIsDeleting] = useState<boolean>(false);
    const navigate: NavigateFunction = useNavigate();

    function handleDeleteButton() {
        setIsDeleting(true);
    }

    return (
        <>
            <div className={'w-full bg-gray-300 hover:scale-105 transition-all cursor-pointer border-1 outline'}>
                <div className={'flex gap-2 md:p-4 p-2'} onClick={() => navigate(`/accommodation/${props.property.id}`)}>
                    <div className={'md:block flex items-center rounded-2xl w-64'}>
                        <img className={'rounded-2xl object-cover'} alt={'image'}
                             src={`data:image/png;base64,${props.property.photo.data}`}/>
                    </div>

                    <div className={'w-4/5 bg-red p-1 max-h-52 overflow-hidden'} onClick={() => navigate(`/accommodation/${props.property.id}`)}>
                        <p className={'md:text-2xl text-base font-serif font-semibold'}>{props.property.title}</p>
                        <p className={'font-semibold text-xl font-serif'}>Description:</p>
                        <p className={'md:text-base text-xs font-serif md:overflow-hidden'}>{props.property.description}</p>
                        <p className={'font-semibold text-xl font-serif'}>Extra information:</p>
                        <p className={'md:text-base text-xs font-serif md:overflow-hidden'}>{props.property.extraInformation}</p>
                    </div>
                </div>

                <div className={'flex gap-2 justify-between p-2'} onClick={() => navigate(`/accommodation/${props.property.id}`)}>
                    <p className={'text-base font-serif font-semibold tex-center'}>Country: {props.property.country}</p>
                    <p className={'text-base font-serif font-semibold text-center'}>City: {props.property.city}</p>
                    <p className={'text-base font-serif font-semibold text-center'}>Price per night: ${props.property.pricePerNight}</p>
                    <p className={'text-base font-serif font-semibold text-center'}>Street: {props.property.street}</p>
                </div>

                <div className={'flex gap-2 justify-center py-2 md:px-2'}>
                    <button className={'cursor-pointer bg-red-500 hover:scale-105 transition-all hover:bg-red-700 rounded-full p-2 mt-1'}
                    onClick={() => handleDeleteButton()}
                    >
                        <p className={'font-serif text-white '}>Delete accommodation</p>
                    </button>

                    <button className={'cursor-pointer bg-orange-400 hover:scale-105 transition-all hover:bg-orange-500 shadow rounded-full p-2 mt-1'}
                        onClick={() => navigate(`/profile/accommodations/edit/${props.property.id}`)}
                    >
                        <p className={'font-serif text-white '}>Edit accommodation</p>
                    </button>
                </div>
            </div>

            <DeletingPopUp isDeleting={isDeleting} setIsDeleting={setIsDeleting} property={props.property}/>
        </>

    )
}