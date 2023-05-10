import React, {FC, useState} from "react";
import {Input} from "@mui/material";
import {LocalizationProvider, MobileDatePicker} from "@mui/x-date-pickers";
import {AdapterDayjs} from "@mui/x-date-pickers/AdapterDayjs";
import Fab from "@mui/material/Fab";
import RemoveIcon from "@mui/icons-material/Remove";
import AddIcon from "@mui/icons-material/Add";

export const NavbarSearchMenu: FC = () => {
    const [direction, setDirection] = useState<string>('');
    const [department, setDepartment] = useState<Date>(new Date());
    const [arrival, setArrival] = useState<Date>(new Date());
    const [guests, setGuests] = useState<number>(1);

    function decreaseNumberOfGuests() {
        if(guests == 1) {
            return;
        } else {
            setGuests(prevState => prevState - 1);
        }
    }

    function increaseNumberOfGuests() {
        setGuests(prevState => prevState + 1);
    }

    function search() {
        console.log(direction, department, arrival, guests);
    }

    return (
        <div className={'md:flex md:w-full justify-center mb-2'}>
            <div className={'md:border md:outline-1 rounded-full md:flex md:flex-row flex-col md:shadow'}>
                <div className={'hover:bg-gray-200 px-8 py-2 rounded-l-full flex justify-center flex-col transition-all'}>
                    <p className={'text-sm font-semibold font-serif'}>Where</p>
                    <Input placeholder={'Search directions'} onChange={(event: any) => setDirection(event.target.value)}/>
                </div>

                <div className={'h-full border border-gray-100 border-1'}></div>

                <button className={'hover:bg-gray-200 pr-6 px-3 py-2 flex flex-col gap-1 justify-center transition-all'}>
                    <p className={'text-sm font-semibold font-serif'}>Arrival</p>
                    <LocalizationProvider dateAdapter={AdapterDayjs}>
                        <MobileDatePicker slotProps={{ textField: { size: 'small' } }} onChange={(event: any) => setArrival(event.$d)}/>
                    </LocalizationProvider>
                </button>

                <div className={'h-full border border-gray-100 border-1'}></div>

                <div className={'relative flex flex-col'}>
                    <button className={'hover:bg-gray-200 pr-6 px-3 py-2 flex flex-col gap-1 justify-center transition-all'}>
                        <p className={'text-sm font-semibold font-serif'}>Department</p>
                        <LocalizationProvider dateAdapter={AdapterDayjs}>
                            <MobileDatePicker slotProps={{ textField: { size: 'small' } }} onChange={(event: any) => setDepartment(event.$d)}/>
                        </LocalizationProvider>
                    </button>

                </div>

                <div className={'h-full border border-gray-100 border-1'}></div>

                <button className={'hover:bg-gray-200 pr-6 px-3 py-2 flex flex-col gap-1 justify-center transition-all'}>
                    <p className={'text-sm font-semibold font-serif'}>Guests</p>
                    <div className={'flex gap-2 justify-center items-center'}>
                        <Fab size="small" color="secondary" onClick={() => decreaseNumberOfGuests()}>
                            <RemoveIcon/>
                        </Fab>

                        <p className={'text-xl font-semibold font-serif'}>{guests}</p>

                        <Fab size="small" color="secondary" onClick={() => increaseNumberOfGuests()}>
                            <AddIcon />
                        </Fab>
                    </div>
                </button>

                <button className={'rounded-r-full bg-red-500 flex items-center p-4 gap-2 hover:bg-red-600 transition-all'} onClick={() => search()}>
                    <svg xmlns="http://www.w3.org/2000/svg" fill="red" viewBox="0 0 24 24" strokeWidth={2.5} stroke="white" className="w-5 h-5">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M21 21l-5.197-5.197m0 0A7.5 7.5 0 105.196 5.196a7.5 7.5 0 0010.607 10.607z" />
                    </svg>
                    <p className={'text-base font-semibold font-serif text-white'}>Search</p>
                </button>
            </div>
        </div>
    )
}