import React, {FC} from "react";

export const FilteringButton: FC<{text: string, number: number, setNumber:any }> = (props) => {

    function getClassName(): string {
        if(Number(props.text) === props.number) {
            return "bg-blue-700 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        } else {
            return "bg-gray-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded-full"
        }
    }

    function handleButtonClick() {
        props.setNumber(Number(props.text));
    }

    function getText() {
        if(props.text === '0') {
            return 'Any';
        } else if(props.text === '6') {
            return '5+';
        } else {
            return props.text;
        }
    }

    return (
        <button
            className={getClassName()}
            onClick={() => handleButtonClick()}
        >
            {getText()}
        </button>
    )
}