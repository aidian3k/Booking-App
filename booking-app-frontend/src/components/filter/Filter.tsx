import React, {FC, useState} from "react";
import {NavbarBreak} from "../navbar/NavbarBreak";
import {InputDescription} from "../accomodation-form/InputDescription";
import {Button, InputAdornment, Slider, TextField} from "@mui/material";
import MinimizeIcon from "@mui/icons-material/Minimize";
import AttachMoneyIcon from '@mui/icons-material/AttachMoney';
import {FilterAbstractPopUpWindow} from "./PopUpAbstractWindow";
import {Close} from "@mui/icons-material";
import {FilteringButton} from "./FilteringButton";

export const Filter: FC<{ isFiltering: boolean, setIsFiltering: any }> = (props) => {
    const [minimalPrice, setMinimalPrice] = useState<number>(0);
    const [maximumPrice, setMaximumPrice] = useState<number>(300);
    const [numberOfBeds, setNumberOfBeds] = useState<number>(1);
    const [numberOfBedrooms, setNumberOfBedrooms] = useState<number>(1);
    const [typeOfProperty, setTypeOfProperty] = useState<string>('');
    const [value, setValue] = React.useState<number[]>([0, 300]);

    const handleChange = (event: Event, newValue: number | number[]) => {
        setValue(newValue as number[]);
        setMinimalPrice(Number(value[0]));
        setMaximumPrice(Number(value[1]));
    };

    function handleMaximumChange(event: any) {
        setMaximumPrice(Number(event.target.value));
        setValue([value[0], maximumPrice]);
    }

    function handleMinimumChange(event: any) {
        setMinimalPrice(Number(event.target.value));
        setValue([minimalPrice, value[1]]);
    }

    function clearAllElements() {
        setMinimalPrice(0);
        setMaximumPrice(300);
        setNumberOfBeds(1);
        setNumberOfBedrooms(1);
        setTypeOfProperty('');
        setValue([0, 300]);
    }

    function showPlaces() {
        console.log(minimalPrice, maximumPrice, numberOfBedrooms, numberOfBeds, typeOfProperty)
    }

    return (
        <FilterAbstractPopUpWindow isOpen={props.isFiltering} onClose={() => props.setIsFiltering(false)}>
            <div className={'max-h-[32rem] overflow-y-scroll w-full px-4 py-2'}>
                <div className={'flex items-center justify-between px-2'}>
                    <button className={'rounded-full bg-gray-300 p-1 hover:bg-red-300 hover:scale-105 transition-all self-center mb-1'}
                        onClick={() => props.setIsFiltering(false)}
                    >
                        <Close/>
                    </button>
                    <p className={'font-serif text-center font-semibold text-xl flex-grow flex justify-center'}>Filters</p>
                </div>
                <NavbarBreak/>

                <div className={'mt-4'}>
                    <InputDescription heading={'Price range'}
                                      helperText={'Remember that this price does not include cleaning fee and other payments!'}/>
                </div>

                <Slider
                    getAriaLabel={() => 'Price range'}
                    size={'medium'}
                    color={'secondary'}
                    value={value}
                    onChange={handleChange}
                    disableSwap={true}
                    getAriaValueText={(value) => `${value}`}
                />

                <div className={'flex gap-2 justify-center'}>
                    <TextField label="Minimum" variant="outlined" InputProps={{
                        startAdornment: (
                            <InputAdornment position="start">
                                {<AttachMoneyIcon/>}
                            </InputAdornment>
                        ),
                    }}
                               value={minimalPrice}
                               onChange={(event) => handleMinimumChange(event)}

                    />

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
                               value={maximumPrice}
                               onChange={(event: any) => handleMaximumChange(event)}
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
                        <FilteringButton text={'1'} number={numberOfBeds} setNumber={setNumberOfBeds}/>
                        <FilteringButton text={'2'} number={numberOfBeds} setNumber={setNumberOfBeds}/>
                        <FilteringButton text={'3'} number={numberOfBeds} setNumber={setNumberOfBeds}/>
                        <FilteringButton text={'4'} number={numberOfBeds} setNumber={setNumberOfBeds}/>
                        <FilteringButton text={'5'} number={numberOfBeds} setNumber={setNumberOfBeds}/>
                        <FilteringButton text={'5+'} number={numberOfBeds} setNumber={setNumberOfBeds}/>
                    </div>
                </div>

                <div className={'flex flex-col gap-2'}>
                    <p className={'mt-2 font-serif text-base text-center'}>Bedrooms</p>
                    <div className={'flex gap-2 justify-center'}>
                        <FilteringButton text={'1'} number={numberOfBedrooms} setNumber={setNumberOfBedrooms}/>
                        <FilteringButton text={'2'} number={numberOfBedrooms} setNumber={setNumberOfBedrooms}/>
                        <FilteringButton text={'3'} number={numberOfBedrooms} setNumber={setNumberOfBedrooms}/>
                        <FilteringButton text={'4'} number={numberOfBedrooms} setNumber={setNumberOfBedrooms}/>
                        <FilteringButton text={'5'} number={numberOfBedrooms} setNumber={setNumberOfBedrooms}/>
                        <FilteringButton text={'5+'} number={numberOfBedrooms} setNumber={setNumberOfBedrooms}/>
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
                        className={`flex flex-col justify-between border border-1 border-gray-400 py-2 px-4 h-28 rounded-xl w-32 cursor-pointer hover:bg-gray-300 hover:scale-105 transition-all ${typeOfProperty==='House' ? 'bg-gray-300' : ''}`}
                        onClick={() => setTypeOfProperty('House')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M8.25 21v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21m0 0h4.5V3.545M12.75 21h7.5V10.75M2.25 21h1.5m18 0h-18M2.25 9l4.5-1.636M18.75 3l-1.5.545m0 6.205l3 1m1.5.5l-1.5-.5M6.75 7.364V3h-3v18m3-13.636l10.5-3.819"/>
                        </svg>

                        <p className={'font-serif font-semibold'}>House</p>
                    </div>

                    <div
                        className={`flex flex-col justify-between border border-1 border-gray-400 py-2 px-4 h-28 rounded-xl w-32 cursor-pointer hover:bg-gray-300 hover:scale-105 transition-all ${typeOfProperty==='Apartment' ? 'bg-gray-300' : ''}`}
                        onClick={() => setTypeOfProperty('Apartment')}
                    >
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5}
                             stroke="currentColor" className="w-10 h-10">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M2.25 21h19.5m-18-18v18m10.5-18v18m6-13.5V21M6.75 6.75h.75m-.75 3h.75m-.75 3h.75m3-6h.75m-.75 3h.75m-.75 3h.75M6.75 21v-3.375c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21M3 3h12m-.75 4.5H21m-3.75 3.75h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008zm0 3h.008v.008h-.008v-.008z"/>
                        </svg>
                        <p className={'font-serif font-semibold'}>Apartment</p>
                    </div>

                </div>
            </div>

            <div className={'flex gap-2 mt-2'}>
                <Button variant="contained" color="error" sx={{width: 1 / 2}}
                onClick={() => clearAllElements()}
                >
                    Clear all
                </Button>

                <Button variant="contained" color="success" sx={{width: 1 / 2}} onClick={() => showPlaces()}>
                    Show places
                </Button>
            </div>
        </FilterAbstractPopUpWindow>
    )
}