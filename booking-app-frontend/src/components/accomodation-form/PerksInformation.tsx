import React, {FC} from "react";
import {Checkbox} from "@mui/material";

export const PerksInformation: FC<any> = (props) => {
    return (
        <div className="border-solid border-2 border-sky-500 rounded-full flex justify-center gap-1 items-center">
            <Checkbox color="success" size={'small'} onClick={() => props.onChange(!props.elem)}/>
            {props.icon}
            <p className={'font-serif text-gray-700 truncate'}>{props.name}</p>
        </div>
    )
}