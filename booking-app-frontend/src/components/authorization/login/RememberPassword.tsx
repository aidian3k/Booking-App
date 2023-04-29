import React, {FC} from "react";

export const RememberPassword: FC = () => {
    return (<div className={'md:flex flex-col md:flex-row md:justify-between p-2 justify-center items-center'}>
            <div className={'md:w-1/2 w-full md:text-base text-center'}>
                <p className={'text-xs font-serif'}>
                    Remember to logout from the devices which other use!
                </p>
            </div>

            <p className={'text-xs font-serif text-[#00BFFF] hover:text-yellow flex justify-center'}>
                <button>Do not remember password?</button>
            </p>
        </div>)
}