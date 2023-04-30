import React, {FC} from "react";

export const PropertyElement: FC = () => {
    return (
        <>
            <div className={'w-full bg-gray-300 hover:scale-105 transition-all cursor-pointer border-1 outline'}>
                <div className={'flex gap-2 md:p-4 p-2'}>
                    <div className={'md:block flex items-center rounded-2xl w-52'}>
                        <img className={'rounded-2xl object-cover'} alt={'image'}
                             src={'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg'}/>
                    </div>

                    <div className={'w-4/5 bg-red p-1 max-h-44 overflow-hidden'}>
                        <p className={'md:text-2xl text-base font-serif font-semibold'}>Amazing apartment in Austria</p>
                        <p className={'md:text-base text-xs font-serif md:overflow-hidden'}>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid pariatur, ullam. Alias architecto dolorem dolores eaque enim eum exercitationem nemo nisi perspiciatis. Accusantium assumenda earum odit, porro quia quisquam ut. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dolorem, officia, reprehenderit. Ab doloribus dolorum in molestias nisi rem tempore tenetur voluptas! Assumenda consequatur error minus natus quas vel voluptatem voluptatibus.</p>
                    </div>
                </div>

                <div className={'flex gap-2 justify-center py-2 md:px-2'}>
                    <button className={'cursor-pointer bg-red-500 hover:scale-105 transition-all hover:bg-red-700 rounded-full p-2 mt-1'}>
                        <p className={'font-serif text-white '}>Delete accommodation</p>
                    </button>

                    <button className={'cursor-pointer bg-orange-400 hover:scale-105 transition-all hover:bg-orange-500 shadow rounded-full p-2 mt-1'}>
                        <p className={'font-serif text-white '}>Edit accommodation</p>
                    </button>
                </div>
            </div>
        </>

    )
}