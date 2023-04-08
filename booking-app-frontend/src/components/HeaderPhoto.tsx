import { FC } from "react";
import loginPagePhoto from "../assets/authorization/loginPagePhoto 1.png";
export const HeaderPhoto: FC = () => {
    return (
        <div className="w-1/2 h-screen bg-red-300 hidden md:block">
            <img src={loginPagePhoto} alt={'Header photo'} className={'h-full w-full object-cover'}/>
        </div>
    )
}
