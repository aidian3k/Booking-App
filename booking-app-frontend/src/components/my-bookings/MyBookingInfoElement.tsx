import React, {FC} from "react";

export const MyBookingInfoElement: FC<MyBookingInfoProps> = (props) => {
    return (
        <div className={'flex gap-2'}>
            {props.icon}
            <p className={'text-white font-serif font-semibold'}>{props.textElement}</p>
        </div>
    )
}

export const MyBookingInfoElementBlack: FC<MyBookingInfoProps> = (props) => {
    return (
        <div className={'flex gap-2'}>
            {props.icon}
            <p className={'text-black font-serif font-semibold'}>{props.textElement}</p>
        </div>
    )
}

export interface MyBookingInfoProps {
    icon: any,
    textElement: string;
}