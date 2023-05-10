import React, {FC, useState} from "react";
import {NavbarBreak} from "./NavbarBreak";
import {InputDescription} from "../accomodation-form/InputDescription";
import {InputAdornment, Slider, TextField} from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {FilterAbstractPopUpWindow} from "../help-contact/PopUpAbstractWindow";

export const Filter: FC<{ isFiltering: boolean, setIsFiltering: any }> = (props) => {
    const [minimalPrice, setMinimalPrice] = useState<number>(0);
    const [maximumPrice, setMaximumPrice] = useState<number>(0);
    const [numberOfBeds, setNumberOfBeds] = useState<number>(0);
    const [numberOfBedrooms, setNumberOfBedrooms] = useState<number>(0);
    const [typeOfProperty, setTypeOfProperty] = useState<number>(0);

    return (
        <FilterAbstractPopUpWindow isOpen={props.isFiltering} onClose={() => props.setIsFiltering(false)}>
            <div className={'max-h-96 overflow-y-scroll w-full'}>
                <p className={'font-serif text-center font-semibold text-xl'}>Filters</p>
                <NavbarBreak/>

                <div className={'mt-4'}>
                    <InputDescription heading={'Price range'}
                                      helperText={'Remember that this price does not include cleaning fee and other payments!'}/>
                </div>

                <Slider size={'medium'} color={'secondary'}/>

                <div className={'flex gap-2 justify-center'}>
                    <TextField label="Minimum" variant="outlined" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {<AttachMoneyIcon/>}
                            </InputAdornment>
                        ),
                    }}/>
                    <div className={'mt-2'}>
                        <MinimizeIcon/>
                    </div>
                    <TextField label="Maximum" variant="outlined" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {<AttachMoneyIcon/>}
                            </InputAdornment>
                        ),

                    }}
                               type={'text'}
                    />
                </div>

                <div className={'mt-2'}>
                    <NavbarBreak/>
                </div>

                <div className={'mt-4'}>
                    <InputDescription heading={'Beds and bedrooms'}
                                      helperText={'Please specify the specific number of bedrooms and beds!'}/>
                </div>

                <div className={'flex flex-col gap-2'}>
                    <p className={'mt-2 font-serif text-base text-center'}>Beds</p>
                    <div className={'flex gap-2 justify-center'}>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Any
                        </button>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            1
                        </button>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            2
                        </button>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            3
                        </button>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            4
                        </button>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            5+
                        </button>
                    </div>
                </div>

                <div className={'flex flex-col gap-2'}>
                    <p className={'mt-2 font-serif text-base text-center'}>Bedrooms</p>
                    <div className={'flex gap-2 justify-center'}>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            Any
                        </button>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            1
                        </button>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            2
                        </button>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            3
                        </button>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            4
                        </button>
                        <button className="bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full">
                            5+
                        </button>
                    </div>
                </div>

                <div className={'mt-4'}>
                    <NavbarBreak/>
                </div>

                <div className={'mt-4'}>
                    <InputDescription heading={'Property type'} helperText={'Please specify the type of the property'}/>
                </div>

                <div className={'flex gap-2 mt-2 justify-center'}>
                    <div
                        className={'flex flex-col justify-between border border-1 border-gray-400 py-2 px-4 h-28 rounded-xl w-32 cursor-pointer hover:bg-gray-300 hover:scale-105 transition-all'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"/>
                        </svg>

                        <p className={'font-serif font-semibold'}>House</p>
                    </div>

                    <div
                        className={'flex flex-col justify-between border border-1 border-gray-400 py-2 px-4 h-28 rounded-xl w-32 cursor-pointer hover:bg-gray-300 hover:scale-105 transition-all'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/>
                        </svg>

                        <p className={'font-serif font-semibold'}>Apartment</p>
                    </div>
                </div>
            </div>
        </FilterAbstractPopUpWindow>
    )
}