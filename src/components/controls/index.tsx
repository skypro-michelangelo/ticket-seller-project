import { Box, Stack } from "@mui/material"
import { FC } from "react"
import { EventsSearchAutocomplete  } from "./events-search-autocomplete"
import { EventTypeSelect  } from "./event-type-select"
import { EventDatePicker } from "./event-date-picker"


export const Controls: FC = (): JSX.Element => {
  return (
      <Box
        sx={{
            padding: "30px",
        }}
      >
          <Stack direction={"row"} spacing={3}>
            <EventsSearchAutocomplete options={['Godfather', 'some shit movie']} />
            <EventTypeSelect options={['Godfather', 'some shit movie']} />
            <EventDatePicker />
          </Stack>
      </Box>
  )
}