import {TextField} from "@mui/material";
import React, {FC, useState} from "react";
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
import {AccommodationError} from "../../model/AccommodationError";
import {PropertyRequest} from "../../model/PropertyRequest";
import {User} from "../../model/User";
import {useAppSelector} from "../../hooks/reduxHooks";
import {AxiosError} from "axios";
import {connector} from "../../utils/axios";
import {ApiErrorObject} from "../../model/ApiErrorObject";

export const AccommodationForm: FC = () => {
    const [title, setTitle] = useState<string>('');
    const [country, setCountry] = useState<string>('');
    const [city, setCity] = useState<string>('');
    const [street, setStreet] = useState<string>('');
    const [images, setImages] = useState<Blob[]>([]);
    const [description, setDescription] = useState<string>('');
    const [wifi, setWifi] = useState<boolean>(false);
    const [placeToWork, setPlaceToWork] = useState<boolean>(false);
    const [pool, setPool] = useState<boolean>(false);
    const [allowedAnimals, setAllowedAnimals] = useState<boolean>(false);
    const [kitchen, setKitchen] = useState<boolean>(false);
    const [airConditioning, setAirConditioning] = useState<boolean>(false);
    const [gasMeter, setGasMeter] = useState<boolean>(false);
    const [washingMachine, setWashingMachine] = useState<boolean>(false);
    const [extraInformation, setExtraInformation] = useState<string>('');
    const [numberOfBeds, setNumberOfBeds] = useState<number>(1);
    const [maximumNumberOfPeople, setMaximumNumberOfPeople] = useState<number>(1);
    const [numberOfBedrooms, setNumberOfBedrooms] = useState<number>(1);
    const [pricePerNight, setPricePerNight] = useState<number>(1);
    const [priceCleaning, setPriceCleaning] = useState<number>(1);
    const [error, setError] = useState<AccommodationError>({
        title: false,
        city: false,
        country: false,
        description: false,
        extraInformation: false,
        maximumNumberOfPeople: false,
        priceCleaning: false,
        street: false,
        pricePerNight: false,
        internal: false
    });
    const user: User = useAppSelector(state => state.user.value);
    const [loading, setLoading] = useState<boolean>(false);

    async function checkAccommodationInfo() {
        if (title.length == 0) {
            await setError({...error, internal: true, title: true});
        }

        if (city.length == 0) {
            await setError({...error, internal: true, city: true});
        }

        if (country.length == 0) {
            await setError({...error, internal: true, country: true});
        }

        if (description.length == 0) {
            await setError({...error, internal: true, description: true});
        }

        if (extraInformation.length == 0) {
            await setError({...error, internal: true, extraInformation: true});
        }

        if (priceCleaning <= 0) {
            await setError({...error, internal: true, title: true});
        }

        if (pricePerNight <= 0) {
            await setError({...error, internal: true, pricePerNight: true});
        }
    }

    async function handleAddButton() {
        await checkAccommodationInfo();

        if (error.internal) {
            return;
        }

        const propertyRequest: PropertyRequest = {
            title: title,
            city: city,
            airConditioning: airConditioning,
            country: country,
            allowedAnimals: allowedAnimals,
            description: description,
            extraInformation: extraInformation,
            gasMeter: gasMeter,
            kitchen: kitchen,
            numberOfGuests: maximumNumberOfPeople,
            numberOfBedrooms: numberOfBedrooms,
            numberOfBeds: numberOfBeds,
            pool: pool,
            placeToWork: placeToWork,
            cleaningFee: priceCleaning,
            price: pricePerNight,
            wifi: wifi,
            washingMachine: washingMachine,
            street: street
        };

        const userId: number = user.id;

        const request = {
            propertyDto: propertyRequest, photos: images, userId: 1
        };

        const formData: FormData = new FormData();
        formData.append('userId', request.userId.toString());
        formData.append('propertyDto', JSON.stringify(request.propertyDto));

        for (let i = 0; i < images.length; ++i) {
            formData.append('photos', images[i]);
        }


        try {
            setLoading(true);

            await new Promise(resolve => setTimeout(resolve, 2000));

            await connector.post('/api/v1/property/add', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });
        } catch (error: any) {
            const axiosError: AxiosError = error as AxiosError;
            const errorData = axiosError.response?.data as ApiErrorObject | undefined;

            await new Promise(resolve => setTimeout(resolve, 2000));
            console.log(errorData);
        } finally {
            setLoading(false);
        }
    }

    return (
        <div>
            <AccommodationFormHeading/>

            <div className={'flex flex-col gap-2 mx-4'}>
                <InputDescription heading={'Title'} helperText={'Text for you property should be catchy!'}/>
                <TextField label={'Title of the place'}
                           placeholder={'Title for example: Beautiful place in England'}
                           size={'small'}
                           helperText={error.title ? 'You should pass proper title of the place' : ''}
                           error={error.title}
                           onChange={(event: any) => setTitle(event.target.value)}
                />

                <InputDescription heading={'Address'} helperText={'Place here the address of the place'}/>
                <div className={'grid md:grid-cols-2 grid-cols-1 gap-2'}>
                    <TextField label={'Country of the place'}
                               placeholder={'Country for example: England'}
                               helperText={error.country ? 'You should place proper title here!' : ''}
                               size={'small'}
                               onChange={(event: any) => setCountry(event.target.value)}
                               error={error.country}
                    />
                    <TextField label={'City of the place'}
                               placeholder={'Example street: Bumming'}
                               size={'small'}
                               helperText={error.city ? 'You should pass proper name of the city' : ''}
                               onChange={(event: any) => setCity(event.target.value)}
                               error={error.city}
                    />
                </div>
                <TextField label={'Street of the place'}
                           placeholder={'Title for example: Beautiful place in England'}
                           size={'small'}
                           helperText={error.street ? 'You should pass proper name of the city' : ''}
                           onChange={(event: any) => setStreet(event.target.value)}
                           error={error.street}
                />

                <InputDescription heading={'Photos'} helperText={'The more photos, the better it is!'}/>

                <p className={'text-xl text-black font-bold font-serif text-center'}>Upload photos from your device!</p>
                <UploadForm images={images} setImages={setImages}/>


                <InputDescription heading={'Description'} helperText={'Description is the most important!'}/>
                <TextField
                    label="Description of the place"
                    placeholder={'Example description: This a good house!'}
                    multiline
                    rows={3}
                    onChange={(event: any) => setDescription(event.target.value)}
                    helperText={error.description ? 'You should pass proper description' : ''}
                    error={error.description}
                />

                <InputDescription heading={'Perks'} helperText={'Select all the perks of your place!'}/>
                <div className={'grid md:grid-cols-4 grid-cols-2 gap-2'}>
                    <PerksInformation name={'Wi-fi'} icon={<NetworkWifiIcon/>} elem={wifi} onChange={setWifi}/>
                    <PerksInformation name={'Place to work'} icon={<WorkIcon/>} elem={placeToWork}
                                      onChange={setPlaceToWork}/>
                    <PerksInformation name={'Pool'} icon={<PoolIcon/>} elem={pool} onChange={setPool}/>
                    <PerksInformation name={'Allowed animals'} icon={<PetsIcon/>} elem={allowedAnimals}
                                      onChange={setAllowedAnimals}/>
                    <PerksInformation name={'Kitchen'} icon={<KitchenIcon/>} elem={kitchen} onChange={setKitchen}/>
                    <PerksInformation name={'Air-conditioning'} icon={<AcUnitIcon/>} elem={airConditioning}
                                      onChange={setAirConditioning}/>
                    <PerksInformation name={'Gas-meter'} icon={<GasMeterIcon/>} onChange={setGasMeter} elem={gasMeter}/>
                    <PerksInformation name={'Washing-machine'} icon={<LocalLaundryServiceIcon/>} elem={washingMachine}
                                      onChange={setWashingMachine}/>
                </div>

                <InputDescription heading={'Extra info'} helperText={'Place here house rules etc.'}/>
                <TextField
                    label="Extra info about the place"
                    placeholder={'Example: do not do it'}
                    multiline
                    rows={2}
                    onChange={(event: any) => setExtraInformation(event.target.value)}
                    helperText={error.extraInformation ? 'You should pass proper extra-information about the place' : ''}
                    error={error.extraInformation}
                />

                <div className={'justify-between md:flex'}>
                    <div>
                        <InputDescription heading={'Number of beds'} helperText={'Specify number of beds'}/>
                        <TextField
                            id="outlined-number"
                            type="number"
                            size={'small'}
                            defaultValue={1}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event: any) => setNumberOfBeds(event.target.value)}
                        />
                    </div>

                    <div>
                        <InputDescription heading={'Maximum number of guests'} helperText={'Specify number of guests'}/>
                        <TextField
                            id="outlined-number"
                            type="number"
                            size={'small'}
                            defaultValue={1}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event: any) => setMaximumNumberOfPeople(event.target.value)}
                            helperText={error.maximumNumberOfPeople ? 'You should pass positive number!' : ''}
                            error={error.maximumNumberOfPeople}
                        />
                    </div>
                    <div>
                        <InputDescription heading={'Number of bedrooms'} helperText={'Specify number of bedrooms'}/>
                        <TextField
                            id="outlined-number"
                            type="number"
                            size={'small'}
                            defaultValue={1}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event: any) => setNumberOfBedrooms(event.target.value)}
                        />
                    </div>

                </div>

                <div className={'justify-center gap-4 md:flex'}>
                    <div>
                        <InputDescription heading={'Price per night'}
                                          helperText={'Specify the price for one night in dollars'}/>
                        <TextField
                            id="outlined-number"
                            type="number"
                            size={'small'}
                            defaultValue={1}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event: any) => setPricePerNight(event.target.value)}
                            helperText={error.pricePerNight ? 'You should pass proper price of the place!' : ''}
                            error={error.pricePerNight}
                        />
                    </div>

                    <div>
                        <InputDescription heading={'Price for cleaning'}
                                          helperText={'Specify the price for cleaning in dollars'}/>
                        <TextField
                            id="outlined-number"
                            type="number"
                            size={'small'}
                            defaultValue={1}
                            InputLabelProps={{
                                shrink: true,
                            }}
                            onChange={(event: any) => setPriceCleaning(event.target.value)}
                            helperText={error.priceCleaning ? 'You should pass proper price of cleaning' : ''}
                            error={error.priceCleaning}
                        />
                    </div>
                </div>

                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full transition-all"
                    onClick={() => handleAddButton()}
                >
                    <p className={'text-xl font-serif text-white font-semibold'}>{!loading ? 'Create a place!' : 'Loading...'}</p>
                </button>
            </div>
        </div>
    )
}
