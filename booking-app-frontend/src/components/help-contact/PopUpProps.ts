import {ReactNode} from "react";

export interface PopUpWindowProps {
    isOpen: boolean;
    onClose: () => void,
    children: ReactNode
}

export interface SinglePopUpProps {
    isOpen: boolean,
    onClose: () => void
}