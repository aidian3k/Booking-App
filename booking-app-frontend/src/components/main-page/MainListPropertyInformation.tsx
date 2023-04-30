import React, {FC} from "react";
import {StarSvg} from "../../assets/StarSvg";

export const MainListPropertyInformation: FC = () => {
    return (
        <div className={'flex flex-col mt-2 w-72'}>
            <div className={'flex items-center justify-between'}>
                <p className="font-semibold">{'Schadming, Austria'}</p>

                <div className={'flex gap-1 items-center'}>
                    <StarSvg/>
                    <p className={'text-serif text-sm'}>5,0</p>
                </div>
            </div>

            <h3 className="text-sm text-gray-500">{'View for mountains'}</h3>

            <div className="mt-1 flex gap-1">
                <p className="font-semibold">${100}</p>
                <p className={'font-serif'}> per night </p>
            </div>
        </div>
    )
}