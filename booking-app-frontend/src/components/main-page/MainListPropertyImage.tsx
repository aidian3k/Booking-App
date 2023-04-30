import {FC} from "react";

export const MainListPropertyImage: FC = () => {
    return (
        <div className={'bg-gray-500 rounded-2xl w-72'}>
            <img className={'rounded-2xl object-cover'} src={'https://fujifilm-x.com/wp-content/uploads/2021/01/gfx100s_sample_04_thum-1.jpg'} alt="A sample image of a Fujifilm camera"/>
        </div>
    )
}