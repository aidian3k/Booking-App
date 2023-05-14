import React, {FC, useEffect, useState} from "react";
import {AccommodationError} from "../../model/AccommodationError";
import {NavigateFunction, useNavigate, useParams} from "react-router-dom";
import {User} from "../../model/User";
import {useAppSelector} from "../../hooks/reduxHooks";
import {AccommodationFormHeading} from "./AccommodationFormHeading";
import {InputDescription} from "./InputDescription";
import {TextField} from "@mui/material";
import {PerksInformation} from "./PerksInformation";
import NetworkWifiIcon from "@mui/icons-material/NetworkWifi";
import WorkIcon from "@mui/icons-material/Work";
import PoolIcon from "@mui/icons-material/Pool";
import PetsIcon from "@mui/icons-material/Pets";
import KitchenIcon from "@mui/icons-material/Kitchen";
import AcUnitIcon from "@mui/icons-material/AcUnit";
import GasMeterIcon from "@mui/icons-material/GasMeter";
import LocalLaundryServiceIcon from "@mui/icons-material/LocalLaundryService";
import {Property, propertyInitialState} from "../../model/Property";
import {connector} from "../../utils/axios";
import {PropertyRequest} from "../../model/PropertyRequest";
import {AxiosError} from "axios";
import {ApiErrorObject} from "../../model/ApiErrorObject";

export const AccommodationEditForm: FC = () => {
    const [property, setProperty] = useState<Property>(propertyInitialState);
    const routerParams = useParams();

    useEffect(() => {
        fetchData();
    }, []);

    async function fetchData() {
        await connector
            .get(`/api/v1/property/${routerParams.id}`)
            .then((response) => setProperty(response.data.property));
    }

    useEffect(() => {
        if (property) {
            setTitle(property.title);
            setCountry(property.country);
            setCity(property.city);
            setStreet(property.street);
            setDescription(property.description);
            setWifi(property.wifi);
            setPlaceToWork(property.placeToWork);
            setPool(property.pool);
            setAllowedAnimals(property.allowedAnimals);
            setKitchen(property.kitchen);
            setAirConditioning(property.airConditioning);
            setGasMeter(property.gasMeter);
            setWashingMachine(property.washingMachine);
            setExtraInformation(property.extraInformation);
            setNumberOfBeds(property.numberOfBeds);
            setMaximumNumberOfPeople(property.numberOfGuests);
            setNumberOfBedrooms(property.numberOfBedrooms);
            setPricePerNight(property.price);
            setPriceCleaning(property.cleaningFee);
        }
    }, [property]);

    const [title, setTitle] = useState<string>(property.title);
    const [country, setCountry] = useState<string>(property.country);
    const [city, setCity] = useState<string>(property.city);
    const [street, setStreet] = useState<string>(property.street);
    const [description, setDescription] = useState<string>(property.description);
    const [wifi, setWifi] = useState<boolean>(property.wifi);
    const [placeToWork, setPlaceToWork] = useState<boolean>(property.placeToWork);
    const [pool, setPool] = useState<boolean>(property.pool);
    const [allowedAnimals, setAllowedAnimals] = useState<boolean>(property.allowedAnimals);
    const [kitchen, setKitchen] = useState<boolean>(property.kitchen);
    const [airConditioning, setAirConditioning] = useState<boolean>(property.airConditioning);
    const [gasMeter, setGasMeter] = useState<boolean>(property.gasMeter);
    const [washingMachine, setWashingMachine] = useState<boolean>(property.washingMachine);
    const [extraInformation, setExtraInformation] = useState<string>(property.extraInformation);
    const [numberOfBeds, setNumberOfBeds] = useState<number>(property.numberOfBeds);
    const [maximumNumberOfPeople, setMaximumNumberOfPeople] = useState<number>(property.numberOfGuests);
    const [numberOfBedrooms, setNumberOfBedrooms] = useState<number>(property.numberOfBedrooms);
    const [pricePerNight, setPricePerNight] = useState<number>(property.price);
    const [priceCleaning, setPriceCleaning] = useState<number>(property.cleaningFee);
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
    const navigate: NavigateFunction = useNavigate();
    const user: User = useAppSelector(state => state.user.value);
    const [loading, setLoading] = useState<boolean>(false);

    async function checkAccommodationInfo() {
        if (title.length == 0) {
            await setError({...error, internal: true, title: true});
            return;
        }

        if (city.length == 0) {
            await setError({...error, internal: true, city: true});
            return;
        }

        if (country.length == 0) {
            await setError({...error, internal: true, country: true});
            return;
        }

        if (description.length == 0) {
            await setError({...error, internal: true, description: true});
            return;
        }

        if (extraInformation.length == 0) {
            await setError({...error, internal: true, extraInformation: true});
            return;
        }

        if (priceCleaning <= 0) {
            await setError({...error, internal: true, title: true});
            return;
        }

        if (pricePerNight <= 0) {
            await setError({...error, internal: true, pricePerNight: true});
            return;
        }
    }

    async function handleEditButton() {
        await checkAccommodationInfo();
        setLoading(true);

        if (error.internal) {
            setLoading(false);
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

        const formData: FormData = new FormData();
        formData.append('propertyDto', JSON.stringify(propertyRequest));

        try {
            await new Promise(resolve => setTimeout(resolve, 2000));
            debugger

            await connector.put(`/api/v1/property/${1}/${routerParams.id}`, formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                }
            });

            navigate('/profile/accommodations');
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
                           value={title}
                           helperText={error.title ? 'You should pass proper title of the place' : ''}
                           error={error.title}
                           onChange={(event: any) => setTitle(event.target.value)}
                />

                <InputDescription heading={'Address'} helperText={'Place here the address of the place'}/>
                <div className={'grid md:grid-cols-2 grid-cols-1 gap-2'}>
                    <TextField label={'Country of the place'}
                               placeholder={'Country for example: England'}
                               value={country}
                               helperText={error.country ? 'You should place proper title here!' : ''}
                               size={'small'}
                               onChange={(event: any) => setCountry(event.target.value)}
                               error={error.country}
                    />
                    <TextField label={'City of the place'}
                               placeholder={'Example street: Bumming'}
                               size={'small'}
                               value={city}
                               helperText={error.city ? 'You should pass proper name of the city' : ''}
                               onChange={(event: any) => setCity(event.target.value)}
                               error={error.city}
                    />
                </div>
                <TextField label={'Street of the place'}
                           placeholder={'Title for example: Beautiful place in England'}
                           size={'small'}
                           value={street}
                           helperText={error.street ? 'You should pass proper name of the city' : ''}
                           onChange={(event: any) => setStreet(event.target.value)}
                           error={error.street}
                />
                <InputDescription heading={'Description'} helperText={'Description is the most important!'}/>
                <TextField
                    label="Description of the place"
                    placeholder={'Example description: This a good house!'}
                    multiline
                    value={description}
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
                    value={extraInformation}
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
                            value={numberOfBeds}
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
                            value={maximumNumberOfPeople}
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
                            value={numberOfBedrooms}
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
                            value={pricePerNight}
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
                            value={priceCleaning}
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

                {error.internal && <div className="bg-red-100 border border-red-400 text-red-700 px-4 py-3 rounded relative text-center" role="alert">
                    <strong className="font-bold">Error: </strong>
                    <span className="block sm:inline">{'There is an error in the form!'}</span>
                </div>}

                <button
                    className="px-4 py-2 bg-blue-500 text-white rounded hover:bg-blue-600 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2 rounded-full transition-all"
                    onClick={() => handleEditButton()}
                >
                    <p className={'text-xl font-serif text-white font-semibold'}>{!loading ? 'Edit property!' : 'Loading...'}</p>
                </button>
            </div>
        </div>
    )
}