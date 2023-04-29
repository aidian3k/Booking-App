import React, {FC} from "react";
import {Navbar} from "../navbar/Navbar";
import AddIcon from "@mui/icons-material/Add";
import {Footer} from "../footer/Footer";

export const AccommodationPage: FC = () => {
    return (
        <>
            <Navbar/>
            <div className={'flex flex-col md:gap-4 gap-2 md:mx-8 mx-2 my-2'}>
                <PropertyElement/>
                <PropertyElement/>
            </div>
            <div className={'flex w-full justify-center'}>
                <button className={'rounded-full border border-1 px-2 py-2 bg-red-500 hover:scale-105 cursor-pointer border-1 flex gap-2 items-center transition-all'}>
                    <AddIcon/>
                    <p className={'font-serif text-lg text-white font-semibold'}>Add new place</p>
                </button>
            </div>
            <Footer/>
        </>
    )
}

export const PropertyElement: FC = () => {
    return (
        <div className={'w-full bg-gray-300 md:p-4 p-2 hover:scale-105 transition-all cursor-pointer flex gap-2 border-1 outline'}>
            <div className={'md:block flex items-center rounded-2xl w-52'}>
                <img className={'rounded-2xl object-cover'} alt={'image'}
                     src={'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg'}/>
            </div>

            <div className={'w-4/5 bg-red p-1 max-h-44 overflow-hidden'}>
                <p className={'md:text-2xl text-base font-serif font-semibold'}>Amazing apartment in Austria</p>
                <p className={'md:text-base text-xs font-serif md:overflow-hidden'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid pariatur, ullam. Alias architecto dolorem dolores eaque enim eum exercitationem nemo nisi perspiciatis. Accusantium assumenda earum odit, porro quia quisquam ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, officia, reprehenderit. Ab doloribus dolorum in molestias nisi rem tempore tenetur voluptas! Assumenda consequatur error minus natus quas vel voluptatem voluptatibus.</p>
            </div>
        </div>
    )
}