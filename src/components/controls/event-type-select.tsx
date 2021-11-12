import { Select, MenuItem, SelectChangeEvent } from "@mui/material";
import React, { FC } from "react";
import { localizatedType } from "../card";


export interface IEventTypeSelectProps {
    selectedOption: string | undefined;
    handleChange: (e: SelectChangeEvent) => void;
}

export const EventTypeSelect: FC<IEventTypeSelectProps> = (
    {
        selectedOption, 
        handleChange,
     }
): JSX.Element => {
  return (
    <>
      <Select
        value={selectedOption}
        onChange={handleChange}
        placeholder={"Тип события"}
        sx={{ width: "200px" }}
        >
            {Object.entries(localizatedType).map(([value, russianDescription]) => {
                return (
                    <MenuItem key={value} value={value}>
                        {russianDescription}
                    </MenuItem>
                )
            })}
        </Select>
    </>
    
  )
}