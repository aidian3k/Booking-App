import React from "react";
import {PopUpWindowProps} from "./PopUpProps";
import {Button} from "@mui/material";

export const FilterAbstractPopUpWindow: React.FC<PopUpWindowProps> = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
        return null;
    }

    return (
        <div className="fixed inset-0 z-50 flex items-center justify-center w-full h-full">
            <div
                className="absolute inset-0 bg-gray-800 opacity-75 cursor-pointer"
                onClick={onClose}
            />

            <div className="relative bg-white rounded-md shadow-lg p-6">
                {children}

                <div className={'flex gap-2 mt-2'}>
                    <Button variant="contained" color="error" sx={{width: 1 / 2}}>
                        Clear all
                    </Button>

                    <Button variant="contained" color="success" sx={{width: 1 / 2}}>
                        Show places
                    </Button>
                </div>
            </div>
        </div>
    );
};