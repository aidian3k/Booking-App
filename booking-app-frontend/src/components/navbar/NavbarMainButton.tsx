import React, {FC} from "react";

export const NavbarMainButton: FC<any> = (props) => {
    return (
        <div className={'flex border border-gray-300 rounded-full items-center gap-4 py-2 px-4 shadow shadow-gray-300 hover:shadow-gray-400 transition-all hover:scale-105 cursor-pointer'}
             onClick={() => props.setSearchMenuShown(!props.searchMenuShown)}
        >
            <button>
                <p className={'text-serif bg-clip-text text-gray-900 font-medium'}>Anywhere</p>
            </button>

            <div className={'border border-l border-gray-300 h-full'}></div>

            <button>
                <p className={'text-serif bg-clip-text text-gray-900 font-medium'}>Anywhere</p>
            </button>

            <div className={'border border-l border-gray-300 h-full'}></div>

            <button>
                <p className={'text-serif bg-clip-text text-gray-300'}>Add guests</p>
            </button>

            <button className={'rounded-full bg-red-500 flex items-center p-1'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white"
                     className="w-5 h-5">
                    <path strokeLinecap="round" strokeLinejoin="round"
                          d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z"/>
                </svg>
            </button>
        </div>
    )
}