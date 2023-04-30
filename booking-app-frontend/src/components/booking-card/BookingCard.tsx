import React, {FC} from "react";
import {StarSvg} from "../main-page/MainListPropertyInformation";

export const BookingCard: FC = () => {
    return (
        <div className={'flex justify-center items-center'}>
            <div className={'bg-white shadow shadow-gray-300 p-4 rounded-2xl'}>
                <div className={'flex justify-between'}>
                    <p className={'font-serif text-2xl'}>100$ / per night</p>
                    <div className={'flex gap-1 items-center'}>
                        <StarSvg/>
                        <p className={'text-serif text-sm'}>5,0</p>
                    </div>
                </div>

                <div className={'border rounded-2xl mt-4'}>
                    <div className={'flex'}>
                        <div className={'py-3 px-4 border-r'}>
                            <label>Check in:</label>
                            <input type={'date'}/>
                        </div>

                        <div className={'py-3 px-4'}>
                            <label>Check out:</label>
                            <input type={'date'}/>
                        </div>
                    </div>

                    <div className={'py-3 px-4 border-t flex flex-col items-centers'}>
                        <p>Number of guests:</p>
                        <input type={'number'} defaultValue={1} className={'border rounded-2xl'}/>
                    </div>
                </div>

                <button className={'w-full bg-red-500 mt-2 rounded-2xl p-2 hover:scale-105 cursor-pointer transition-all'}>
                    <p className={'text-lg text-white font-serif font-semibold'}>Book this place</p>
                </button>

                <div className={'flex flex-col gap-2'}>
                    <div className={'mt-2'}>
                        <p className={'text-serif text-center text-sm'}>The payment has not been processed
                            yet</p>
                    </div>

                    <div className={'flex justify-between'}>
                        <p className={'text-serif text-base underline'}>$100 x 5 days</p>
                        <p className={'text-serif text-base'}>500 $</p>
                    </div>

                    <div className={'flex justify-between'}>
                        <p className={'text-serif text-base underline'}>Cleaning fee</p>
                        <p className={'text-serif text-base'}>50 $</p>
                    </div>

                    <div className={'w-full border border-gray-200 border-1 my-2'}></div>

                    <div className={'flex justify-between'}>
                        <p className={'text-serif text-lg font-semibold'}>Total price:</p>
                        <p className={'text-serif text-base'}>550 $</p>
                    </div>
                </div>
            </div>
        </div>
    )
}