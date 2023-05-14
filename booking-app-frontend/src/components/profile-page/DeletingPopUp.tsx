import React, {FC} from "react";
import {FilterAbstractPopUpWindow} from "../filter/PopUpAbstractWindow";
import {Button} from "@mui/material";
import {PropertyElementModel} from "../../pages/UserAccommodationPage";
import {Close} from "@mui/icons-material";
import {connector} from "../../utils/axios";

export const DeletingPopUp: FC<{isDeleting: boolean, setIsDeleting: any, property: PropertyElementModel}> = (props) => {
    async function deleteAccommodation() {
        await connector.delete(`/api/v1/property/profile/${1}/${props.property.id}`);
        window.location.reload();
    }

    return (
        <FilterAbstractPopUpWindow isOpen={props.isDeleting} onClose={() => props.setIsDeleting(false)}>
            <div className={'flex gap-2'}>
                <button className={'rounded-full bg-gray-300 p-1 hover:bg-red-300 hover:scale-105 transition-all self-center mb-1'}
                        onClick={() => props.setIsDeleting(false)}
                >
                    <Close/>
                </button>
                <p className={'font-serif font-semibold text-2xl text-center '}>Deleting property:</p>
            </div>

            <div>
                <p className={'font-serif font-semibold text-lg'}>You wish to delete the following property:</p>
                <p className={'font-serif text-center font-semibold'}>Title: {props.property.title}</p>
                <p className={'font-serif text-center font-semibold'}>Country: {props.property.country}</p>
                <p className={'font-serif text-center font-semibold'}>Street: {props.property.street}</p>
                <p className={'font-serif text-center font-semibold'}>City: {props.property.city}</p>
            </div>

            <p className={'text-center font-semibold text-red-500'}>Remember that deleting property is irreversible!</p>
            <div className={'flex gap-2 mt-2'}>
                <Button variant="contained" color="success" sx={{width: 1 / 2}}
                        onClick={() => props.setIsDeleting(false)}
                >
                    Close
                </Button>

                <Button variant="contained" color="error" sx={{width: 1 / 2}} onClick={() => deleteAccommodation()}>
                    Delete
                </Button>
            </div>
        </FilterAbstractPopUpWindow>
    )
}