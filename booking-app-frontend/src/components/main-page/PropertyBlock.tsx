import {FC} from "react";
import {MainListPropertyImage} from "./MainListPropertyImage";
import {MainListPropertyInformation, MainPageProperty} from "./MainListPropertyInformation";
import {NavigateFunction, useNavigate} from "react-router-dom";

export const PropertyBlock: FC<{property: MainPageProperty}> = (props) => {
    const navigate: NavigateFunction = useNavigate();

    function handlePropertyBlockClick() {
        navigate(`accommodation/${props.property.id}`)
    }

    return (
        <div className={'flex flex-col items-center cursor-pointer hover:scale-105 transition-all'}
             onClick={() => handlePropertyBlockClick()}
        >
            <MainListPropertyImage photo={props.property.photo}/>
            <MainListPropertyInformation property={props.property}/>
        </div>
    )
}