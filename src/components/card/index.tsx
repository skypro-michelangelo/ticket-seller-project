import { FC, useCallback, useState } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CardTag } from "../card-tag";
import { DetailsModal } from "../modal";
import { getActionURL, IEvent } from "../../pages/MainPage/afisha/afisha";
import "dayjs/locale/ru";
import customParseFormat from "dayjs/plugin/customParseFormat"
import dayjs from "dayjs";

dayjs.extend(customParseFormat)

export const localizatedType: Record<string, string> = {
    "concert": "Концерт",
    "opera":"Опера",
    "ballet":"Балет",
    "cinema":"Кино",
    "exhibition":"Выставка",
    "perfomance":"Спектакль",
}

// img 250px + content 250px
export const Card: FC<IEvent> = (
   props
): JSX.Element => {
    const { name, date, time, picture, type_event } = props;
    /* TODO: поправь на нормальный урл */
    const imgUrl = getActionURL("/" + picture);

    const dateString = dayjs(`${date} ${time}`, "DD.MM.YYYY HH:mm").locale("ru").format("D MMMM, HH:mm")
    
    const eventTypeString = localizatedType[type_event] ?? "Неизвестный тип события";
    const dataTags = [eventTypeString, dateString];
   
    const [open, setOpen] = useState(false);
    const toggle = useCallback(() => setOpen(v => !v), [])
  
    return (
        <>
            <img src={imgUrl} alt="тута будет картинка фильма" />

            <div onClick={toggle}>
                <Box 
                    sx={{ 
                        backgroundColor: "darkblue",
                        padding: "10px",
                    }}
                >
                    <Stack direction={"row"} spacing={2}>
                    {dataTags.map(elem => <CardTag key={elem} text={elem} />)}
                    </Stack>

                    <div style={{ height: "10px" }} />

                    <Typography color={"white"}>
                        {name}
                    </Typography>  
                </Box>
            </div>

            <DetailsModal 
                isOpen={open}
                handleClose={toggle}
                eventName={name}
                eventDescription={props.event_description || "Забыли указать описание события gneorbgihebr higberhbgh erbghie ghiebrhigb bgherb gerbg highiebrg hibghieghier"}
                eventTicketsCountLeft={props.tickets_number}
                eventDateString={dateString}
                eventTypeStringInRussian={eventTypeString}
                eventId={props._id}
            />
        </>
    )
}