import {FC} from "react";
import NetworkWifiIcon from '@mui/icons-material/NetworkWifi';
import PetsIcon from '@mui/icons-material/Pets';
import KitchenIcon from '@mui/icons-material/Kitchen';
import PoolIcon from '@mui/icons-material/Pool';
import WorkIcon from '@mui/icons-material/Work';
import GasMeterIcon from '@mui/icons-material/GasMeter';
import LocalLaundryServiceIcon from '@mui/icons-material/LocalLaundryService';
import AcUnitIcon from '@mui/icons-material/AcUnit';

export const PropertyPage: FC = () => {
    const sampleImg = 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg';

    return (
        <div className={'mt-4 bg-gray-100 md:px-20 px-5 py-2 flex-col'}>
            <h2 className={'text-serif text-3xl font-semibold'}>Amazing house in Croatia</h2>
            <a className={'flex gap-1 font-semibold underline'} target="_blank" href={'https://maps.google.com/?q='+'Croatia'}>
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-6 h-6">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15 10.5a3 3 0 11-6 0 3 3 0 016 0z" />
                    <path strokeLinecap="round" strokeLinejoin="round" d="M19.5 10.5c0 7.142-7.5 11.25-7.5 11.25S4.5 17.642 4.5 10.5a7.5 7.5 0 1115 0z" />
                </svg>
                <p className={'text-serif truncate'}>{'Varaždin Breg, Varaždinska županija'}</p>
            </a>

            <div className={'flex w-full place-items-center justify-items-center'}>
                <div className={'grid md:grid-cols-4 grid-cols-2 gap-4 mt-2'}>
                    <div className={'col-span-2'}>
                        <img src={sampleImg} className={'rounded-2xl object-cover'}/>
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <div>
                            <img src={sampleImg} className={'rounded-2xl object-cover'}/>
                        </div>
                        <div>
                            <img src={sampleImg} className={'rounded-2xl object-cover'}/>
                        </div>
                    </div>
                    <div className={'flex flex-col gap-2'}>
                        <div>
                            <img src={sampleImg} className={'rounded-2xl object-cover'}/>
                        </div>
                        <div>
                            <img src={sampleImg} className={'rounded-2xl object-cover'}/>
                        </div>
                    </div>
                </div>
            </div>

            <div className={'grid md:grid-cols-2 grid-cols-1 gap-2 md:mt-4 mt-2'}>
                <div>
                    <div className={'flex gap-1 flex-col'}>
                        <div className={'flex gap-2'}>
                            <p className={'md:text-2xl text-xl font-semibold'}>Whole property - the host is Adrian</p>
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M17.982 18.725A7.488 7.488 0 0012 15.75a7.488 7.488 0 00-5.982 2.975m11.963 0a9 9 0 10-11.963 0m11.963 0A8.966 8.966 0 0112 21a8.966 8.966 0 01-5.982-2.275M15 9.75a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                        </div>

                        <div className={'mt-0'}>
                            <span className={'font-serif text-gray-700'}>6 guests </span>
                            <span className={'font-serif text-gray-700 font-semibold'}> . </span>
                            <span className={'font-serif text-gray-700'}>2 bedrooms </span>
                            <span className={'font-serif text-gray-700 font-semibold'}> . </span>
                            <span className={'font-serif text-gray-700'}>5 beds </span>
                        </div>

                        <div className={'w-full border border-gray-300 border-1'}></div>

                        <div className={'md:mt-2 mt-1'}>
                            <p className={'text-lg font-serif font-semibold'}>What you will find in this place?</p>

                            <div className={'grid grid-cols-2 mt-1'}>
                                <div className={'flex flex-col justify-center'}>
                                    <FindingIcon name={'Wi-fi'} icon={<NetworkWifiIcon/>}/>
                                    <FindingIcon name={'Allowed animals'} icon={<PetsIcon/>}/>
                                    <FindingIcon name={'Kitchen'} icon={<KitchenIcon/>}/>
                                    <FindingIcon name={'Air conditioning'} icon={<AcUnitIcon/>}/>
                                </div>

                                <div className={'flex flex-col justify-center'}>
                                    <FindingIcon name={'Swimming pool'} icon={<PoolIcon/>}/>
                                    <FindingIcon name={'Place for work'} icon={<WorkIcon/>}/>
                                    <FindingIcon name={'Gas meter'} icon={<GasMeterIcon/>}/>
                                    <FindingIcon name={'Washing machine'} icon={<LocalLaundryServiceIcon/>}/>
                                </div>
                            </div>
                        </div>

                        <div className={'w-full border border-gray-300 border-1'}></div>

                        <div className={'flex flex-col gap-2 mt-2'}>
                            <p className={'font-serif text-lg font-semibold'}>Place description</p>
                            <p className={'font-serif'}>The house is a charming two-story brick home with a peaked roof and dormer windows. It has a neatly manicured front lawn with a winding stone path leading up to the front porch. The porch is spacious and features two white rocking chairs, perfect for enjoying the fresh air on a warm summer day.
                                Upon entering the house, you are greeted by a cozy living room with plush carpeting and a large bay window that lets in plenty of natural light. To the left is a spacious dining area with a beautiful wooden table and six matching chairs. The kitchen is adjacent to the dining area and features modern stainless steel appliances and sleek granite countertops.</p>
                        </div>

                        <div className={'flex flex-col gap-2 mt-2'}>
                            <p className={'font-serif text-lg font-semibold'}>Extra information</p>
                            <p className={'font-serif'}>The house has a total of 3 bedrooms and 2.5 bathrooms, including the master en-suite.
                                The flooring on the main level is a combination of plush carpeting and hardwood.
                                </p>
                        </div>
                    </div>


                </div>

                <div className={'flex justify-center items-center'}>
                    <div className={'bg-white shadow shadow-gray-300 p-4 rounded-2xl'}>
                        <div className={'flex justify-between'}>
                            <p className={'font-serif text-2xl'}>100$ / per night</p>
                            <div className={'flex gap-1 items-center'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                                </svg>
                                <p className={'text-serif text-sm'}>5,0</p>
                            </div>
                        </div>

                        <div className={'border rounded-2xl mt-4'}>
                            <div className={'flex'}>
                                <div className={'py-3 px-4 border-r'}>
                                    <label>Check in:</label>
                                    <input type={'date'} />
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

                        <button className={'w-full bg-red-500 mt-2 rounded-2xl p-2'}>
                            <p className={'text-lg text-white font-serif font-semibold'}>Book this place</p>
                        </button>

                        <div className={'flex flex-col gap-2'}>
                            <div className={'mt-2'}>
                                <p className={'text-serif text-center text-sm'}>The payment has not been processed yet</p>
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
            </div>

            <div className={'w-full border border-gray-200 border-1 my-2'}></div>

            <div className={'grid md:grid-cols-2 grid-cols-1 gap-2'}>
                <div>
                    <p className={'text-xl font-serif font-semibold'}>The host is Adrian</p>
                    <p className={'text-sm font-serif'}>With us from October 2022</p>
                </div>
                <div>
                    <p className={'text-xl font-serif font-semibold'}>Reviews about the host:</p>

                    <div className={'border border-1 rounded-2xl p-2'}>
                        <div className={'flex gap-1 justify-center'}>
                            <div className={'flex gap-1 items-center'}>
                                <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth="1.5"
                                     stroke="currentColor" className="w-4 h-4">
                                    <path strokeLinecap="round" strokeLinejoin="round"
                                          d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                                </svg>
                                <p className={'text-serif text-sm'}>5,0</p>
                            </div>
                            <p className={'text-base font-serif '}>Adrian October 2023</p>
                        </div>
                        <p className={'text-base font-serif '}>As a frequent Airbnb user, I can confidently say that my experience with my recent host was nothing short of exceptional. From the moment I made the booking, the host went above and beyond to ensure that my stay was comfortable and enjoyable.</p>
                    </div>
                </div>
            </div>

            <div className={'w-full h-5'}></div>
        </div>
    )
}

export const FindingIcon = (props: any) => {
    return (
        <div className={'flex gap-2'}>
            {props.icon}
            <p className={'font-serif text-gray-700'}>{props.name}</p>
        </div>
    )
}