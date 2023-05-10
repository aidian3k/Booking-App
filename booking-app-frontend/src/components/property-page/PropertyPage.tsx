import React, {FC, useEffect, useState} from "react";
import {PropertyImages} from "./PropertyImages";
import {LocationSvg} from "../../assets/LocationSvg";
import {PropertyBreak} from "./PropertyBreak";
import {PropertyMainInformation} from "./PropertyMainInformation";
import {PropertyUtils} from "./PropertyUtils";
import {PropertyDescription} from "./PropertyDescription";
import {BookingCard} from "../booking-card/BookingCard";
import {HostInformation} from "../reviews/HostInformation";
import {Property, propertyInitialState} from "../../model/Property";
import {connector} from "../../utils/axios";
import {ReviewList} from "../reviews/ReviewList";

export const PropertyPage: FC<{propertyId: any}> = (props) => {
    const [property, setProperty] = useState<Property>(propertyInitialState);

    useEffect(() => {
        connector.get(`/api/v1/property/${props.propertyId}`)
            .then(response => {
                setProperty(response.data);
            })
    }, [])

    return (
        <div className={'bg-gray-100 md:px-20 px-5 py-2 flex-col'}>
            <h2 className={'text-serif text-3xl font-semibold'}>{property.title}</h2>

            <a className={'flex gap-1 font-semibold underline'} target="_blank"
               href={`https://maps.google.com/?q=${property.country}`}>
                <LocationSvg/>
                <p className={'text-serif truncate'}>{`${property.country}, ${property.city}, ${property.street}`}</p>
            </a>

            <PropertyImages/>

            <div className={'grid md:grid-cols-2 grid-cols-1 gap-2 md:mt-4 mt-2'}>
                <div>
                    <div className={'flex gap-1 flex-col'}>
                        <PropertyMainInformation property={property}/>
                        <PropertyBreak/>
                        <PropertyUtils/>
                        <PropertyBreak/>
                        <PropertyDescription description={property.description} extraInfo={property.extraInformation}/>
                    </div>


                </div>

                <BookingCard property={property}/>
            </div>

            <div className={'my-2'}>
                <PropertyBreak/>
            </div>

            <HostInformation hostName={property.hostName} joinDate={property.joinDate}/>
            <p className={'text-xl font-serif font-semibold text-center'}>Reviews about the host:</p>
            <ReviewList/>

            <div className={'w-full h-5'}></div>
        </div>
    )
}