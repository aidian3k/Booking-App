import React, {FC} from "react";

export const InputDescription: FC<InputDescriptionModel> = (props: InputDescriptionModel) => {
    return (
        <div>
            <p className={'text-2xl text-black font-bold font-serif'}>{props.heading}</p>
            <p className={'text-xs text-gray-500 font-semibold font-serif'}>{props.helperText}</p>
        </div>
    )
}

export interface InputDescriptionModel {
    heading: string,
    helperText: string
}