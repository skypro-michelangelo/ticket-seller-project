import { TextField } from "@mui/material"
import { ChangeEvent, FC } from "react"

export interface IEventsSearchAutocompleteProps {
    searchQuery: string;
    onChange: (e: ChangeEvent<HTMLInputElement>) => void;
}

export const EventsSearchAutocomplete: FC<IEventsSearchAutocompleteProps> = (
    { 
        searchQuery,
        onChange
     }
): JSX.Element => {
    return (
        <TextField
            value={searchQuery}
            onChange={onChange}
            label="Событие" 
        />
    )
}