import React, {FC} from "react";

export const FindingIcon: FC<any> = (props: any) => {
    return (
        <div className={'flex gap-2'}>
            {props.icon}
            <p className={'font-serif text-gray-700'}>{props.name}</p>
        </div>
    )
}