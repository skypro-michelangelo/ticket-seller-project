import { Autocomplete, TextField } from "@mui/material"
import { FC } from "react"

export interface IEventsSearchAutocompleteProps {
    options: string[];
}

export const EventsSearchAutocomplete: FC<IEventsSearchAutocompleteProps> = (
    { options }
): JSX.Element => {
    return (
        <Autocomplete
            disablePortal
            options={options}
            sx={{ width: "250px" }}
            renderInput={(params) => <TextField {...params} label="Событие" />}
        />
    )
}