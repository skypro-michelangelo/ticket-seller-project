import { Autocomplete, TextField } from "@mui/material";
import React, { FC } from "react";


interface IEventTypeSelectProps {
    options: string[];
}

export const EventTypeSelect: FC<IEventTypeSelectProps> = (
    { options }
): JSX.Element => {

  // TODO: добавить onSelect
  return (
        <Autocomplete
            disablePortal
            options={options}
            sx={{ width: "200px" }}
            renderInput={(params) => <TextField {...params} label="Тип" />}
        />
  )
}