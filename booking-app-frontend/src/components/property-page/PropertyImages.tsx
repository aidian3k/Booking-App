import {FC} from "react";

export const PropertyImages: FC = () => {
    const sampleImg = 'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg';

    return (
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
    )
}