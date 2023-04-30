import {Button, TextField} from "@mui/material";
import SendIcon from '@mui/icons-material/Send';
import React, {FC} from "react";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import PetsIcon from "@mui/icons-material/Pets";
import KitchenIcon from "@mui/icons-material/Kitchen";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import PoolIcon from "@mui/icons-material/Pool";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import WorkIcon from "@mui/icons-material/Work";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import {PerksInformation} from "./PerksInformation";
import {UploadForm} from "./UploadForm";
import {AccommodationFormHeading} from "./AccommodationFormHeading";
import {InputDescription} from "./InputDescription";

export const AccommodationForm: FC = () => {
    return (
        <div>
            <AccommodationFormHeading/>

            <div className={'flex flex-col gap-2 mx-4'}>
                <InputDescription heading={'Title'} helperText={'Text for you property should be catchy!'}/>
                <TextField label={'Title of the place'}
                           placeholder={'Title for example: Beautiful place in England'}
                           size={'small'}
                />

                <InputDescription heading={'Address'} helperText={'Place here the address of the place'}/>
                <div className={'grid md:grid-cols-2 grid-cols-1 gap-2'}>
                    <TextField label={'Country of the place'}
                               placeholder={'Country for example: England'}
                        //helperText={'You should place proper title here!'}
                               size={'small'}
                    />
                    <TextField label={'City of the place'}
                               placeholder={'Example street: Bumming'}
                               size={'small'}
                    />
                </div>
                <TextField label={'Street of the place'}
                           placeholder={'Title for example: Beautiful place in England'}
                           size={'small'}
                />

                <InputDescription heading={'Photos'} helperText={'The more photos, the better it is!'}/>
                <div className={'grid grid-cols-4 gap-2'}>
                    <TextField label={'Add photo using link'}
                               placeholder={'Place here link to photo!'}
                               size={'small'}
                               className={'col-span-3'}
                    />

                    <Button variant="contained" endIcon={<SendIcon />} color={'secondary'}>
                        <p className={'font-serif md:text-xl text-xs text-white-300'}>SEND</p>
                    </Button>
                </div>

                <p className={'text-xl text-black font-bold font-serif text-center'}>Or upload it from your device!</p>
                <UploadForm/>


                <InputDescription heading={'Description'} helperText={'Description is the most important!'}/>
                <TextField
                    label="Description of the place"
                    placeholder={'Example description: This a good house!'}
                    multiline
                    rows={3}
                />

                <InputDescription heading={'Perks'} helperText={'Select all the perks of your place!'}/>
                <div className={'grid md:grid-cols-4 grid-cols-2 gap-2'}>
                    <PerksInformation name={'Wi-fi'} icon={<NetworkWifiIcon/>}/>
                    <PerksInformation name={'Place to work'} icon={<WorkIcon/>}/>
                    <PerksInformation name={'Pool'} icon={<PoolIcon/>}/>
                    <PerksInformation name={'Allowed animals'} icon={<PetsIcon/>}/>
                    <PerksInformation name={'Kitchen'} icon={<KitchenIcon/>}/>
                    <PerksInformation name={'Air-conditioning'} icon={<AcUnitIcon/>}/>
                    <PerksInformation name={'Gas-meter'} icon={<GasMeterIcon/>}/>
                    <PerksInformation name={'Washing-machine'} icon={<LocalLaundryServiceIcon/>}/>
                </div>

                <InputDescription heading={'Extra info'} helperText={'Place here house rules etc.'}/>
                <TextField
                    label="Extra info about the place"
                    placeholder={'Example: do not do it'}
                    multiline
                    rows={2}
                />

                <button className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full transition-all">
                    <p className={'text-xl font-serif text-white font-semibold'}>Create a place!</p>
                </button>
            </div>
        </div>
    )
}
