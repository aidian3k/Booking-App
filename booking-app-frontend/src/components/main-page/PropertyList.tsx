import {FC, useEffect} from "react";
import {PropertyBlock} from "./PropertyBlock";
import {connector} from "../../utils/axios";
import {MainPageProperty} from "./MainListPropertyInformation";
import {useAppDispatch, useAppSelector} from "../../hooks/reduxHooks";
import {setMainProperties} from "../../redux/slices/PropertiesSlice";

export const PropertyList: FC = () => {
    const properties: MainPageProperty[] = useAppSelector(state => state.properties.value);
    const dispatch = useAppDispatch();

    useEffect(() => {
        try {
            connector.get("/api/v1/property")
                .then(response => {
                    dispatch(setMainProperties(response.data));
                });
        } catch(error: any) {
            console.log(error);
        }
    }, [dispatch]);

    const getProperties = () => {
            return properties.map(property => {
                return <PropertyBlock property={property}/>
            });
    }

    const mappedProperties = getProperties();

    return (
        <div className={'mt-6 grid gap-2 gap-y-8 grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 sm:mx-12 md:mx-16 lg:mx-20 xl: mx-24 mx-0'}>
            {mappedProperties}
        </div>
    )
}