import React, {FC} from "react";
import {FindingIcon} from "../../assets/FindingIcon";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PetsIcon from "@mui/icons-material/Pets";
import KitchenIcon from "@mui/icons-material/Kitchen";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PoolIcon from "@mui/icons-material/Pool";
import WorkIcon from "@mui/icons-material/Work";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import {Property} from "../../model/Property";

export const PropertyUtils: FC<{property: Property}> = (props) => {
    const {property} = props;

    return (
        <div className={'md:mt-2 mt-1'}>
            <p className={'text-lg font-serif font-semibold'}>What you will find in this place?</p>

            <div className={'grid grid-cols-2 mt-1'}>
                <div className={'flex flex-col justify-center'}>
                    <FindingIcon name={'Wi-fi'} icon={<NetworkWifiIcon/>} is={property.wifi}/>
                    <FindingIcon name={'Allowed animals'} icon={<PetsIcon/>} is={property.allowedAnimals}/>
                    <FindingIcon name={'Kitchen'} icon={<KitchenIcon/>} is={property.kitchen}/>
                    <FindingIcon name={'Air conditioning'} icon={<AcUnitIcon/>} is={property.airConditioning}/>
                </div>

                <div className={'flex flex-col justify-center'}>
                    <FindingIcon name={'Swimming pool'} icon={<PoolIcon/>} is={property.pool}/>
                    <FindingIcon name={'Place for work'} icon={<WorkIcon/>} is={property.placeToWork}/>
                    <FindingIcon name={'Gas meter'} icon={<GasMeterIcon/>} is={property.gasMeter}/>
                    <FindingIcon name={'Washing machine'} icon={<LocalLaundryServiceIcon/>} is={property.washingMachine}/>
                </div>
            </div>
        </div>
    )
}