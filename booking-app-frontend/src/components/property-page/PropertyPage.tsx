import React, {FC, useLayoutEffect, useState} from "react";
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
import {ReviewAddForm} from "./ReviewAddForm";
import {User} from "../../model/User";

export const PropertyPage: FC<{ propertyId: any }> = (props) => {
    const [property, setProperty] = useState<Property>(propertyInitialState);
    const [reviewAdd, setReviewAdd] = useState<boolean>(false);
    const [host, setHost] = useState<User>({id: 1, creationDate: new Date(), email: '', surname: '', phoneNumber: '', name: ''});

    useLayoutEffect(() => {
        connector.get(`/api/v1/property/${props.propertyId}`)
            .then(response => {
                setProperty(response.data.property);
                setHost(response.data.userDto)
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

            <PropertyImages photos={property.photos}/>

            <div className={'grid md:grid-cols-2 grid-cols-1 gap-2 md:mt-4 mt-2'}>
                <div>
                    <div className={'flex gap-1 flex-col'}>
                        <PropertyMainInformation property={property} hostName={host.name}/>
                        <PropertyBreak/>
                        <PropertyUtils property={property}/>
                        <PropertyBreak/>
                        <PropertyDescription description={property.description} extraInfo={property.extraInformation}/>
                    </div>


                </div>

                <BookingCard property={property} hostId={host.id}/>
            </div>

            <div className={'my-2'}>
                <PropertyBreak/>
            </div>

            <HostInformation hostName={host.name} joinDate={new Date()}/>
            <p className={'text-xl font-serif font-semibold text-center'}>Reviews about the host:</p>
            <ReviewList hostId={host.id}/>

            <div className={'flex justify-center'}>
                <button
                    className={'w-1/2 bg-red-500 mt-2 rounded-2xl p-2 hover:scale-105 cursor-pointer transition-all'}
                    onClick={() => setReviewAdd(true)}
                ><p className={'text-lg text-white font-serif font-semibold'}>Add new review</p></button>
            </div>

            <ReviewAddForm reviewAdd={reviewAdd} setReviewAdd={setReviewAdd} userName={host.name} userId={host.id} propertyId={property.id}/>
            <div className={'w-full h-5'}></div>
        </div>
    )
}