import React, {FC} from "react";
import {ReservationElement} from "./ReservationElement";

export const ReservedProperties: FC = () => {
    return (
        <div>
            <h1 className="font-serif font-semibold text-3xl text-center mt-4 mb-2">Reserved properties:</h1>
            <div className={'grid md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-3 mb-4'}>
                <ReservationElement/>
                <ReservationElement/>
                <ReservationElement/>
                <ReservationElement/>
                <ReservationElement/>
                <ReservationElement/>
            </div>
        </div>
    )
}