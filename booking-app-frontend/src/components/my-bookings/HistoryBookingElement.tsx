import React, {FC, useState} from "react";
import {DateRange} from "@mui/icons-material";
import PriceCheckIcon from '@mui/icons-material/PriceCheck';
import Person2Icon from '@mui/icons-material/Person2';
import {MyBookingInfoElement} from "./MyBookingInfoElement";
import {ProfilePageBooking} from "../../model/ProfilePageBooking";
import {NavigateFunction, useNavigate} from "react-router-dom";
import {ReviewAddForm} from "../property-page/ReviewAddForm";

export const HistoryBookingElement: FC<{bookingInfo: ProfilePageBooking}> = (props) => {
    const {bookingInfo} = props;
    const navigate: NavigateFunction = useNavigate();
    const [reviewAdd, setReviewAdd] = useState<boolean>(false);

    return (
        <>
            <div className="flex flex-col items-center bg-gray-500 border border-gray-700 rounded-lg md:flex-row md:max-w-3xl hover:bg-gray-600 md:hover:scale-105 transition-all">
                <img className="object-cover w-full rounded-t-lg h-96 md:h-auto md:w-48 md:rounded-none md:rounded-l-lg cursor-pointer" src={`data:image/png;base64,${bookingInfo.photo.data}`} alt="" onClick={() => navigate(`/accommodation/${bookingInfo.propertyId}`)}/>
                <div className="flex flex-col justify-between p-4 cursor-pointer leading-normal"
                     onClick={() => navigate(`/accommodation/${bookingInfo.propertyId}`)}>
                    <h5 className="mb-2 text-2xl font-bold tracking-tight text-white">{bookingInfo.title}</h5>
                    <div className={'w-full border border-gray-100 border-1 my-1'}></div>
                    <div className={'flex flex-col gap-2'}>
                        <MyBookingInfoElement icon={<DateRange color={'secondary'}/>} textElement={`${new Date(bookingInfo.checkIn).toLocaleDateString()} -- ${new Date(bookingInfo.checkOut).toLocaleDateString()}`}/>
                        <MyBookingInfoElement icon={<PriceCheckIcon color={'secondary'}/>} textElement={`Total price: ${bookingInfo.totalPrice}$`}/>
                        <MyBookingInfoElement icon={<Person2Icon color={'secondary'}/>} textElement={`Guests: ${bookingInfo.numberOfGuests}`}/>
                    </div>
                </div>

                <button className="px-4 py-2 bg-red-500 text-white rounded-md my-2 hover:bg-red-700 transition-all duration-500 md:mt-14 mr-2" onClick={() => setReviewAdd(true)}>
                    <p className={'font-serif font-semibold'}>Add review</p>
                    <p className={'font-serif font-semibold'}>about the host</p>
                </button>
            </div>
            <ReviewAddForm reviewAdd={reviewAdd} setReviewAdd={setReviewAdd} hostId={bookingInfo.hostId} clientId={bookingInfo.clientId} propertyId={bookingInfo.propertyId}/>
        </>
    )
}