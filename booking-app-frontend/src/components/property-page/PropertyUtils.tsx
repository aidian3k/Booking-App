import React, {FC} from "react";
import {FindingIcon} from "./FindingIcon";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PetsIcon from "@mui/icons-material/Pets";
import KitchenIcon from "@mui/icons-material/Kitchen";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PoolIcon from "@mui/icons-material/Pool";
import WorkIcon from "@mui/icons-material/Work";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";

export const PropertyUtils: FC = () => {
    return (
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
    )
}