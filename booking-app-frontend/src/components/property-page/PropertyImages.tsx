import {FC} from "react";

export const PropertyImages: FC<{photos: any[]}> = (props) => {
    const {photos} = props;
    const photosLength = photos.length;

    return (
        <div className={'flex w-full place-items-center justify-items-center'}>
            <div className={'grid md:grid-cols-4 grid-cols-2 gap-4 mt-2'}>
                <div className={'col-span-2'}>
                    <img src={`data:image/png;base64,${photos[0]?.data}`} className={'rounded-2xl object-cover'}/>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <div>
                        <img src={photosLength >= 2 ? `data:image/png;base64,${photos[1]?.data}` : ''} className={'rounded-2xl object-cover w-72 md:h-52 h-36'} alt={'Photo'}/>
                    </div>
                    <div>
                        <img src={photosLength >= 3 ? `data:image/png;base64,${photos[2]?.data}` : ''} className={'rounded-2xl object-cover w-72 md:h-52 h-36'}/>
                    </div>
                </div>
                <div className={'flex flex-col gap-2'}>
                    <div>
                        <img src={photosLength >= 4 ? `data:image/png;base64,${photos[3]?.data}` : ''} className={'rounded-2xl object-cover w-72 md:h-52 h-36'}/>
                    </div>
                    <div>
                        <img src={photosLength >= 5 ? `data:image/png;base64,${photos[4]?.data}` : ''} className={'rounded-2xl object-cover w-72 md:h-52 h-36'}/>
                    </div>
                </div>
            </div>
        </div>
    )
}