import React, {FC} from "react";
import LogoutIcon from '@mui/icons-material/Logout';

export const LoggedInItems: FC = () => {
    return (
        <>
            <button className={'flex gap-4 hover:bg-gray-100 bg-white w-full'} onClick={() => console.debug('logout')}>
                {<LogoutIcon/>}
                <p className={'font-serif text-base text-gray-500'}>Logout</p>
            </button>
            <div className={'w-full border border-1 border-gray-500 mt-1'}/>
        </>
    )
}