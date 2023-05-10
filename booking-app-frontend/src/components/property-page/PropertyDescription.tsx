import React, {FC} from "react";

export const PropertyDescription: FC<{description: string, extraInfo: string}> = (props) => {
    return (
        <>
            <div className={'flex flex-col gap-2 mt-2'}>
                <p className={'font-serif text-lg font-semibold'}>Place description</p>
                <p className={'font-serif'}>{props.description}</p>
            </div>

            <div className={'flex flex-col gap-2 mt-2'}>
                <p className={'font-serif text-lg font-semibold'}>Extra information</p>
                <p className={'font-serif'}>{props.extraInfo}</p>
            </div>
        </>
    )
}