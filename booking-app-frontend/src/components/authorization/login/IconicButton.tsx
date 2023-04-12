import React, {FC} from "react";
import {Button} from "@mui/material";

export const IconicButton: FC<any> = (props) => {
    return (
        <Button
            variant={'outlined'}
            size={'medium'}
            fullWidth={true}
            startIcon={props.icon}
            sx={{color: 'black', height: '50px', borderRadius: '10px'}}>
            {props.text}
        </Button>
    )
}