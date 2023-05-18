import {MainPageProperty} from "../components/main-page/MainListPropertyInformation";

export interface AdvancedFilter {
    minimalPrice: number,
    maximalPrice: number,
    numberOfBeds: number,
    numberOfBedrooms: number,
    propertyDtoList: MainPageProperty[]
}