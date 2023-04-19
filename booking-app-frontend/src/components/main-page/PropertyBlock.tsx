import {FC} from "react";

export const PropertyBlock: FC = () => {
    return (
        <div className={'flex flex-col items-center cursor-pointer hover:scale-105 transition-all'}>
            <div className={'bg-gray-500 rounded-2xl w-72'}>
                <img className={'rounded-2xl object-cover'} alt={'image'}
                     src={'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg'}/>
            </div>

            <div className={'flex flex-col mt-2 w-72'}>
                <div className={'flex items-center justify-between'}>
                    <p className="font-semibold">{'Schadming, Austria'}</p>

                    <div className={'flex gap-1 items-center'}>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="yellow" viewBox="0 0 24 24" strokeWidth="1.5"
                             stroke="currentColor" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round"
                                  d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"/>
                        </svg>
                        <p className={'text-serif text-sm'}>5,0</p>
                    </div>
                </div>

                <h3 className="text-sm text-gray-500">{'View for mountains'}</h3>

                <div className="mt-1 flex gap-1">
                    <p className="font-semibold">${100}</p>
                    <p className={'font-serif'}> per night </p>
                </div>
            </div>
        </div>
    )
}