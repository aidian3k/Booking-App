import React, {FC} from "react";
import {UserIconSvg} from "../../assets/UserIconSvg";
import {Property} from "../../model/Property";

export const PropertyMainInformation: FC<{property: Property}> = (props) => {
    const {property} = props;

    return (
        <>
            <div className={'flex gap-2'}>
                <p className={'md:text-2xl text-xl font-semibold'}>Whole property - the host is {property.hostName}</p>
                <UserIconSvg/>
            </div>

            <div className={'mt-0'}>
                <span className={'font-serif text-gray-700'}>{property.numberOfGuests} guests </span>
                <span className={'font-serif text-gray-700 font-semibold'}> . </span>
                <span className={'font-serif text-gray-700'}>{property.numberOfBedrooms} bedrooms </span>
                <span className={'font-serif text-gray-700 font-semibold'}> . </span>
                <span className={'font-serif text-gray-700'}>{property.numberOfBeds} beds </span>
            </div>
        </>
    )
}