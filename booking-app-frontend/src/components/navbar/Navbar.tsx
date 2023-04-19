import React, {FC, useState} from "react";
import LoginIcon from '@mui/icons-material/Login';
import AppRegistrationIcon from '@mui/icons-material/AppRegistration';
import HelpIcon from '@mui/icons-material/Help';
import {Input} from "@mui/material";
import {LocalizationProvider, MobileDatePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Fab from '@mui/material/Fab';
import AddIcon from '@mui/icons-material/Add';
import RemoveIcon from '@mui/icons-material/Remove';

export const Navbar: FC = () => {
    const [showingMenu, setShowingMenu] = useState<boolean>(false);
    const [searchMenuClicked, setSearchMenuClicked] = useState<boolean>(false);

    return (
        <>
            <header className={'p-4 flex justify-between'}>
                <a className={'flex gap-2 items-center'} href={'hello'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25" />
                    </svg>
                    <p className={'text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'}>Rentify</p>
                </a>

                <div className={'flex border border-gray-300 rounded-full items-center gap-4 py-2 px-4 shadow shadow-gray-300 hover:shadow-gray-400 transition-all'}>
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
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                    </button>
                </div>

                <button className={'flex border border-gray-300 rounded-full items-center gap-2 py-2 px-4 shadow shadow-gray-300 hover:shadow-gray-400 transition-all'}
                onClick={() => setShowingMenu(!showingMenu)}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12" />
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="gray" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                </button>

                {showingMenu && <DropDownMenu/>}

            </header>

            <div className={'w-full border border-gray-100 border-1'}></div>

            <div className={'flex gap-5 justify-center md:mt-4 mt-2 transition-all mb-4'}>
                <button className={'bg-pink-600 rounded-2xl px-4 py-2 hover:bg-pink-700 transition-all hover:scale-105'}>
                    <div className={'flex gap-2'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                        </svg>
                        <p className={'text-white font-semibold font-serif text-lg'}>My profile</p>
                    </div>
                </button>

                <button className={'bg-pink-600 rounded-2xl px-4 py-2 hover:bg-pink-700 transition-all hover:scale-105'}>
                    <div className={'flex gap-2 items-center justify-center'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                            <path fillRule="evenodd" d="M3 6.75A.75.75 0 013.75 6h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 6.75zM3 12a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75A.75.75 0 013 12zm0 5.25a.75.75 0 01.75-.75h16.5a.75.75 0 010 1.5H3.75a.75.75 0 01-.75-.75z" clipRule="evenodd" />
                        </svg>
                        <p className={'text-white font-semibold font-serif text-lg'}>My bookings</p>
                    </div>
                </button>

                <button className={'bg-pink-600 rounded-2xl px-4 py-2 hover:bg-pink-700 transition-all hover:scale-105'}>
                    <div className={'flex gap-2'}>
                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="white" className="w-6 h-6">
                            <path d="M19.006 3.705a.75.75 0 00-.512-1.41L6 6.838V3a.75.75 0 00-.75-.75h-1.5A.75.75 0 003 3v4.93l-1.006.365a.75.75 0 00.512 1.41l16.5-6z" />
                            <path fillRule="evenodd" d="M3.019 11.115L18 5.667V9.09l4.006 1.456a.75.75 0 11-.512 1.41l-.494-.18v8.475h.75a.75.75 0 010 1.5H2.25a.75.75 0 010-1.5H3v-9.129l.019-.006zM18 20.25v-9.565l1.5.545v9.02H18zm-9-6a.75.75 0 00-.75.75v4.5c0 .414.336.75.75.75h3a.75.75 0 00.75-.75V15a.75.75 0 00-.75-.75H9z" clipRule="evenodd" />
                        </svg>
                        <p className={'text-white font-semibold font-serif text-lg'}>My accommodations</p>
                    </div>
                </button>
            </div>

            <div className={'w-full border border-gray-100 border-1'}></div>
        </>
    )
}

export const DropDownMenu: FC = () => {
    return (
        <div className={'absolute md:top-16 top-20 md:right-20 right-12 bg-white border-1 shadow p-4 rounded-2xl md:w-52 w-44'}>
            <DropDownItem image={<AppRegistrationIcon/>} text={'Register'}/>
            <DropDownItem image={<LoginIcon/>} text={'Login'}/>
            <DropDownItem image={<HelpIcon/>} text={'Help'}/>
        </div>
    )
}

export const DropDownItem: FC<any> = (props) => {
    return (
        <>
            <button className={'flex gap-4 hover:bg-gray-100 bg-white w-full'}>
                {props.image}
                <p className={'font-serif text-base text-gray-500'}>{props.text}</p>
            </button>
            <div className={'w-full border border-1 border-gray-500 mt-1'}/>
        </>
    )
}

export const ExpandedNavbar: FC = () => {
    return (
        <>
            <header className={'p-4 flex justify-between'}>
                <a className={'flex gap-2 items-center'} href={'hello'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-10 h-10">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M12.75 3.03v.568c0 .334.148.65.405.864l1.068.89c.442.369.535 1.01.216 1.49l-.51.766a2.25 2.25 0 01-1.161.886l-.143.048a1.107 1.107 0 00-.57 1.664c.369.555.169 1.307-.427 1.605L9 13.125l.423 1.059a.956.956 0 01-1.652.928l-.679-.906a1.125 1.125 0 00-1.906.172L4.5 15.75l-.612.153M12.75 3.031a9 9 0 00-8.862 12.872M12.75 3.031a9 9 0 016.69 14.036m0 0l-.177-.529A2.25 2.25 0 0017.128 15H16.5l-.324-.324a1.453 1.453 0 00-2.328.377l-.036.073a1.586 1.586 0 01-.982.816l-.99.282c-.55.157-.894.702-.8 1.267l.073.438c.08.474.49.821.97.821.846 0 1.598.542 1.865 1.345l.215.643m5.276-3.67a9.012 9.012 0 01-5.276 3.67m0 0a9 9 0 01-10.275-4.835M15.75 9c0 .896-.393 1.7-1.016 2.25"/>
                    </svg>
                    <p className={'text-3xl font-serif font-bold text-transparent bg-clip-text bg-gradient-to-r to-emerald-600 from-sky-400'}>Rentify</p>
                </a>

                <p className={'font-serif md:text-xl text-xs font-semibold'}>The perfect apartment a few clicks away from you</p>

                <button
                    className={'flex border border-gray-300 rounded-full items-center gap-2 py-2 px-4 shadow shadow-gray-300 hover:shadow-gray-400 transition-all'}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="currentColor" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25H12"/>
                    </svg>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="white" viewBox="0 0 24 24" strokeWidth={1.5}
                         stroke="gray" className="w-7 h-7">
                        <path strokeLinecap="round" strokeLinejoin="round"
                              d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z"/>
                    </svg>
                </button>
            </header>

            <div className={'md:flex md:w-full justify-center mb-2'}>
                <div className={'md:border md:outline-1 rounded-full md:flex md:flex-row flex-col md:shadow'}>
                    <div className={'hover:bg-gray-200 px-8 py-2 rounded-l-full flex justify-center flex-col transition-all'}>
                        <p className={'text-sm font-semibold font-serif'}>Where</p>
                        <Input placeholder={'Search directions'}/>
                    </div>

                    <div className={'h-full border border-gray-100 border-1'}></div>

                    <button className={'hover:bg-gray-200 pr-6 px-3 py-2 flex flex-col gap-1 justify-center transition-all'}>
                        <p className={'text-sm font-semibold font-serif'}>Department</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker slotProps={{ textField: { size: 'small' } }}/>
                        </LocalizationProvider>
                    </button>

                    <div className={'h-full border border-gray-100 border-1'}></div>

                    <div className={'relative flex flex-col'}>
                        <button className={'hover:bg-gray-200 pr-6 px-3 py-2 flex flex-col gap-1 justify-center transition-all'}>
                            <p className={'text-sm font-semibold font-serif'}>Arrival</p>
                            <LocalizationProvider dateAdapter={AdapterDayjs}>
                                <MobileDatePicker slotProps={{ textField: { size: 'small' } }}/>
                            </LocalizationProvider>
                        </button>

                    </div>

                    <div className={'h-full border border-gray-100 border-1'}></div>

                    <button className={'hover:bg-gray-200 pr-6 px-3 py-2 flex flex-col gap-1 justify-center transition-all'}>
                        <p className={'text-sm font-semibold font-serif'}>Who</p>
                        <div className={'flex gap-2 justify-center items-center'}>
                            <Fab size="small" color="secondary">
                                <RemoveIcon/>
                            </Fab>

                            <p className={'text-xl font-semibold font-serif'}>5</p>

                            <Fab size="small" color="secondary">
                                <AddIcon />
                            </Fab>
                        </div>
                    </button>

                    <button className={'rounded-r-full bg-red-500 flex items-center p-4 gap-2 hover:bg-red-600 transition-all'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                        </svg>
                        <p className={'text-base font-semibold font-serif text-white'}>Search</p>
                    </button>
                </div>
            </div>

            <div className={'w-full border border-gray-100 border-1'}></div>
        </>
    )
}

