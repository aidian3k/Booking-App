import React, {FC} from "react";

export const HostInformation: FC<{hostName: string, joinDate: Date}> = (props) => {
    return (
        <div className={'text-center'}>
            <p className={'text-xl font-serif font-semibold'}>The host is {props.hostName}</p>
            <p className={'text-sm font-serif'}>With us from {props.joinDate.toDateString()}</p>
        </div>
    )
}