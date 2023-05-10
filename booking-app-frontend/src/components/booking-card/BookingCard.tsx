import React, {FC, useState} from "react";
import {StarSvg} from "../../assets/StarSvg";
import {Property} from "../../model/Property";

export const BookingCard: FC<{property: Property}> = (props) => {
    const [checkIn, setCheckIn] = useState<Date>(new Date());
    const [checkOut, setCheckOut] = useState<Date>(new Date());
    const [numberOfGuests, setNumberOfGuests] = useState<number>(1);
    const {property} = props;

    function getDateSubtractionInDays(firstDate: Date, secondDate: Date) {
        return (firstDate.valueOf() - secondDate.valueOf()) / (1000 * 60 * 60 * 24);
    }

    function calculateFinalPrice() {
        const numberOfDays = getDateSubtractionInDays(checkOut, checkIn);

        return property.price * numberOfDays * numberOfGuests;
    }

    function getCleaningFee() {
        const numberOfDays = getDateSubtractionInDays(checkOut, checkIn);

        return property.cleaningFee * numberOfDays;
    }

    function changeNumberOfGuests(event: any) {
        if (event.target.value - 1 <= 0) {
            setNumberOfGuests(event.target.value);
        } else {
            setNumberOfGuests(event.target.value);
        }
    }

    function processCheckout() {
        console.log(checkIn, checkOut, numberOfGuests)
    }

    return (
        <div className={'flex justify-center items-center'}>
            <div className={'bg-white shadow shadow-gray-300 p-4 rounded-2xl'}>
                <div className={'flex justify-between'}>
                    <p className={'font-serif text-2xl'}>{`${property.price}$ / per night}`}</p>
                    <div className={'flex gap-1 items-center'}>
                        <StarSvg/>
                        <p className={'text-serif text-sm'}>{property.rating},0</p>
                    </div>
                </div>

                <div className={'border rounded-2xl mt-4'}>
                    <div className={'flex'}>
                        <div className={'py-3 px-4 border-r'}>
                            <label>Check in:</label>
                            <input type={'date'} onChange={(event: any)  => setCheckIn(new Date(event.target.value))}/>
                        </div>

                        <div className={'py-3 px-4'}>
                            <label>Check out:</label>
                            <input type={'date'} onChange={(event: any)  => setCheckOut(new Date(event.target.value))}/>
                        </div>
                    </div>

                    <div className={'py-3 px-4 border-t flex flex-col items-centers text-center'}>
                        <p>Number of guests:</p>
                        <input type={'number'} value={numberOfGuests} onChange={(event: any) => changeNumberOfGuests(event)} className={'border rounded-xl text-center'}/>
                    </div>
                </div>

                <button className={'w-full bg-red-500 mt-2 rounded-2xl p-2 hover:scale-105 cursor-pointer transition-all'}
                    onClick={() => processCheckout()}
                >
                    <p className={'text-lg text-white font-serif font-semibold'}>Book this place</p>
                </button>

                <div className={'flex flex-col gap-2'}>
                    <div className={'mt-2'}>
                        <p className={'text-serif text-center text-sm'}>The payment has not been processed
                            yet</p>
                    </div>

                    <div className={'flex justify-between'}>
                        <p className={'text-serif text-base underline'}>$100 x {getDateSubtractionInDays(checkOut, checkIn)} days x {numberOfGuests} guests</p>
                        <p className={'text-serif text-base'}>{calculateFinalPrice()} $</p>
                    </div>

                    <div className={'flex justify-between'}>
                        <p className={'text-serif text-base underline'}>Cleaning fee</p>
                        <p className={'text-serif text-base'}>{getCleaningFee()} $</p>
                    </div>

                    <div className={'w-full border border-gray-200 border-1 my-2'}></div>

                    <div className={'flex justify-between'}>
                        <p className={'text-serif text-lg font-semibold'}>Total price:</p>
                        <p className={'text-serif text-base'}>{calculateFinalPrice() + getCleaningFee()} $</p>
                    </div>
                </div>
            </div>
        </div>
    )
}