import React, {FC} from "react";
import {UserIconSvg} from "../../assets/UserIconSvg";

export const PropertyMainInformation: FC = () => {
    return (
        <>
            <div className={'flex gap-2'}>
                <p className={'md:text-2xl text-xl font-semibold'}>Whole property - the host is Adrian</p>
                <UserIconSvg/>
            </div>

            <div className={'mt-0'}>
                <span className={'font-serif text-gray-700'}>6 guests </span>
                <span className={'font-serif text-gray-700 font-semibold'}> . </span>
                <span className={'font-serif text-gray-700'}>2 bedrooms </span>
                <span className={'font-serif text-gray-700 font-semibold'}> . </span>
                <span className={'font-serif text-gray-700'}>5 beds </span>
            </div>
        </>
    )
}