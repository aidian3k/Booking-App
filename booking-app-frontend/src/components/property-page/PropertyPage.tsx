import React, {FC} from "react";
import {PropertyImages} from "./PropertyImages";
import {LocationSvg} from "./LocationSvg";
import {PropertyBreak} from "./PropertyBreak";
import {PropertyMainInformation} from "./PropertyMainInformation";
import {PropertyUtils} from "./PropertyUtils";
import {PropertyDescription} from "./PropertyDescription";
import {BookingCard} from "../booking-card/BookingCard";
import {HostInformation} from "../reviews/HostInformation";
import {Review} from "../reviews/Review";

export const PropertyPage: FC = () => {

    return (
        <div className={'mt-4 bg-gray-100 md:px-20 px-5 py-2 flex-col'}>
            <h2 className={'text-serif text-3xl font-semibold'}>Amazing house in Croatia</h2>
            <a className={'flex gap-1 font-semibold underline'} target="_blank"
               href={'https://maps.google.com/?q=' + 'Croatia'}>
                <LocationSvg/>
                <p className={'text-serif truncate'}>{'Varaždin Breg, Varaždinska županija'}</p>
            </a>

            <PropertyImages/>

            <div className={'grid md:grid-cols-2 grid-cols-1 gap-2 md:mt-4 mt-2'}>
                <div>
                    <div className={'flex gap-1 flex-col'}>
                        <PropertyMainInformation/>
                        <PropertyBreak/>
                        <PropertyUtils/>
                        <PropertyBreak/>
                        <PropertyDescription/>
                    </div>


                </div>

                <BookingCard/>
            </div>

            <div className={'my-2'}>
                <PropertyBreak/>
            </div>

            <div className={'grid md:grid-cols-2 grid-cols-1 gap-2'}>
                <HostInformation/>

                <div>
                    <p className={'text-xl font-serif font-semibold'}>Reviews about the host:</p>
                    <Review/>
                </div>
            </div>

            <div className={'w-full h-5'}></div>
        </div>
    )
}