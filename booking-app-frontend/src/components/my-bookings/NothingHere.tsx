import React, {FC} from "react";

export const NothingHere: FC<{ onClick: any, buttonText: string }> = (props) => {
    const {onClick, buttonText} = props;

    return (
        <>
            <p className={'font-serif text-4xl mb-4 bg-gradient-to-r from-blue-500 to-purple-500 bg-clip-text text-transparent font-semibold mt-2'} onClick={onClick}>Nothing
                is here :(</p>
            <button className={'cursor-pointer bg-green-400 transition-all hover:bg-green-600 rounded-full p-2'} onClick={onClick}>
                <p className={'font-serif text-white text-xl font-semibold'}>{buttonText}</p>
            </button>
        </>
    )
}