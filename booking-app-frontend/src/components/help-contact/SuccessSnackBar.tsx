import React, {FC} from "react";
import {Alert, Snackbar} from "@mui/material";
import {useAppDispatch} from "../../hooks/reduxHooks";

export const SuccessSnackBar: FC<{open: boolean, message: string, setOpen: any}> = (props) => {
    const {open, message, setOpen} = props;
    const dispatch = useAppDispatch();

    const handleClose = (event?: React.SyntheticEvent | Event, reason?: string) => {
        if (reason === 'clickaway') {
            return;
        }

        dispatch(setOpen(false));
    };

    return (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
            <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                {message}
            </Alert>
        </Snackbar>
    )
}