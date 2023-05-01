import React, {FC} from "react";
import {DateRange} from "@mui/icons-material";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import Person2Icon from '@mui/icons-material/Person2';
import {MyBookingInfoElement} from "./MyBookingInfoElement";

export const MyBookingElement: FC = () => {
    const sampleImg = 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg';

    return (
        <a href="#" className="flex flex-col items-center bg-gray-500 border border-gray-700 rounded-lg md:flex-row md:max-w-3xl hover:bg-gray-600 md:hover:scale-105 transition-all">
            <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg" src={sampleImg} alt=""/>
            <div className="flex flex-col justify-between p-4 leading-normal">
                <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">Beautiful place in Austria</h5>
                <div className={'w-full border border-gray-100 border-1 my-1'}></div>
                <div className={'flex flex-col gap-2'}>
                    <MyBookingInfoElement icon={<DateRange color={'secondary'}/>} textElement={'2023-01-16 -- 2023-01-22'}/>
                    <MyBookingInfoElement icon={<PriceCheckIcon color={'secondary'}/>} textElement={'Total price: 100$'}/>
                    <MyBookingInfoElement icon={<Person2Icon color={'secondary'}/>} textElement={'Guests: 5'}/>
                </div>
            </div>
            <button className="px-4 py-2 bg-red-500 text-white rounded-md my-2 hover:bg-red-700 transition-all duration-500 md:mt-14">
                Cancel reservation
            </button>
        </a>
    )
}