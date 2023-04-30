import React, {FC} from "react";
import {NavigateFunction, useNavigate} from "react-router-dom";

export const DropDownItem: FC<any> = (props) => {
    const navigate: NavigateFunction = useNavigate();

    return (
        <>
            <button className={'flex gap-4 hover:bg-gray-100 bg-white w-full'} onClick={() => navigate(props.pathWhenClicked)}>
                {props.image}
                <p className={'font-serif text-base text-gray-500'}>{props.text}</p>
            </button>
            <div className={'w-full border border-1 border-gray-500 mt-1'}/>
        </>
    )
}