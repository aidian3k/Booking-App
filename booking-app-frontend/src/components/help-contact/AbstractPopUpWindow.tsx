import React from "react";
import {PopUpWindowProps} from "./PopUpProps";

export const AbstractPopUpWindow: React.FC<PopUpWindowProps> = ({ isOpen, onClose, children }) => {
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

                <button
                    className="px-4 py-2 bg-red-500 text-white rounded-md mt-4 hover:bg-red-600"
                    onClick={onClose}
                >
                    Close
                </button>
            </div>
        </div>
    );
};