import React, {FC} from "react";

export const LoginInformation: FC = () => {
    return (
        <div className={'text-center m-0'}>
                    <span className={'text-xs '}>Clicking login, you accept
                        <span className={'font-semibold'}> the conditions of using the service </span>
                    </span>

            <span className={'text-xs font-serif'}>
                        and  <span className={'font-semibold'}> privacy politics of</span> Rentify
                    </span>
        </div>
    )
}