import React, {FC} from "react";
import {StarSvg} from "../../assets/StarSvg";

export const MainListPropertyInformation: FC<{property: MainPageProperty}> = (props ) => {
    const {property} = props;

    return (
        <div className={'flex flex-col mt-2 w-72'}>
            <div className={'flex items-center justify-between'}>
                <p className="font-semibold">{`${property.city}, ${property.country}`}</p>

                <div className={'flex gap-1 items-center'}>
                    <StarSvg/>
                    <p className={'text-serif text-sm'}>{property.review},0</p>
                </div>
            </div>

            <h3 className="text-sm text-gray-500">{property.title}</h3>

            <div className="mt-1 flex gap-1">
                <p className="font-semibold">${property.pricePerNight}</p>
                <p className={'font-serif'}> per night </p>
            </div>
        </div>
    )
}

export interface MainPageProperty {
    id: number,
    title: string,
    description: string,
    pricePerNight: number,
    review: number,
    city: string,
    country: string,
    ownerId: number,
    photo: any
}