import { Box, Stack } from "@mui/material"
import { FC } from "react"
import { EventsSearchAutocomplete, IEventsSearchAutocompleteProps  } from "./events-search-autocomplete"
import { EventTypeSelect, IEventTypeSelectProps  } from "./event-type-select"
import { EventDatePicker, IEventDatePickerProps } from "./event-date-picker"


export interface IControlsProps 
  extends IEventsSearchAutocompleteProps, 
    IEventTypeSelectProps, 
    IEventDatePickerProps {}

export const Controls: FC<IControlsProps> = (
  {
    selectedOption,
    handleChange,

    searchQuery,
    onChange,

    selectedDate,
    onDateChange
  }
): JSX.Element => {
  return (
      <Box
        sx={{
            padding: "30px",
        }}
      >
          <Stack direction={"row"} spacing={3}>
            <EventsSearchAutocomplete 
              searchQuery={searchQuery}
              onChange={onChange}
            />
            
            <EventTypeSelect
              selectedOption={selectedOption}
              handleChange={handleChange}
            />

            <EventDatePicker 
              selectedDate={selectedDate}
              onDateChange={onDateChange}
            />
          </Stack>
      </Box>
  )
}