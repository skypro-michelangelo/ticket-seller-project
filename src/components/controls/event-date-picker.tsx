import AdapterDayJS from "@mui/lab/AdapterDayjs"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { DatePicker  } from "@mui/lab"
import { TextField } from "@mui/material"
import { Dayjs  } from "dayjs"
import ruLocale from "dayjs/locale/ru"
import { FC } from "react"

export interface IEventDatePickerProps {
    selectedDate: Dayjs | null;
    onDateChange: (v: Dayjs | null) => void;
}

export const EventDatePicker: FC<IEventDatePickerProps> = (
    {
        selectedDate,
        onDateChange
    }
): JSX.Element => {
    return (
        <LocalizationProvider dateAdapter={AdapterDayJS} locale={ruLocale}>
            <DatePicker 
              label={"Дата события"}
              mask={"__.__.____"}
              value={selectedDate}
              onChange={onDateChange}
              renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}