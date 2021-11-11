import AdapterDayJS from "@mui/lab/AdapterDayjs"
import LocalizationProvider from "@mui/lab/LocalizationProvider"
import { DatePicker  } from "@mui/lab"
import { TextField } from "@mui/material"
import { useState } from "react"

import ruLocale from "dayjs/locale/ru"

export const EventDatePicker = (): JSX.Element => {
    const [selectedDate, setSelectedDate] = useState<Date | null>(new Date())

    return (
        <LocalizationProvider dateAdapter={AdapterDayJS} locale={ruLocale}>
            <DatePicker 
              label={"Дата события"}
              mask={"__.__.____"}
              value={selectedDate}
              onChange={(v) => setSelectedDate(v)}
              renderInput={(params) => <TextField {...params} />}
            />
        </LocalizationProvider>
    )
}