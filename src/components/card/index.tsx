import { FC, useCallback, useState, useEffect  } from "react";
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
    const { name, date_time, time, picture, type_event } = props;
    /* TODO: поправить на нормальный урл */

    const dateString = dayjs(`${date_time} ${time}`, "DD.MM.YYYY HH:mm").locale("ru").format("D MMMM, HH:mm")
    const eventPrice = `${props.price} ₽`;
    const eventTypeString = localizatedType[type_event] ?? "Неизвестный тип события";
    const dataTags = [eventTypeString, dateString, eventPrice];
   
    const [open, setOpen] = useState(false);
    const toggle = useCallback(() => setOpen(v => !v), [])
 /* TODO: СТИЛИ ДЛЯ ПЛЕЙСХОЛДЕРА ИМГШКИ box-shadow: 0px 0px 10px rgb(0 0 0 / 65%);*/ 
    // let cardImg = <div style={{
    //     height: 100,
    //     backgroundColor: "#F0F1F2",
    // }} />


    // useEffect(() => {
    //     try {
    //         const url = getActionURL("/" + picture);

    //         fetch(url).then(() => {
    //             cardImg = <img src={url} alt="тута будет картинка фильма" />;
    //         })

    //     } catch(err) {}
    // }, [])


  

  
    return (
        <>
            {/* { cardImg } */}

            {
                <div style={{
                    height: 250,
                    backgroundImage: getActionURL("/" + picture),
                    backgroundColor: "#F0F1F2",
                    minWidth: "370px",
                    maxWidth: "620px",
                    boxShadow: "0px 0px 10px rgb(0 0 0 / 65%)",
                }} />
            }

            <div onClick={toggle}>
                <Box 
                    sx={{ 
                        backgroundColor: "#434ADC",
                        padding: "20px",
                        borderRadius: "0 0 16px 16px",
                        boxShadow: "0px 0px 10px rgb(0 0 0 / 65%)",
                        minWidth: "350px",
                        maxWidth: "600px"
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
                eventPrice={props.price}
                eventLocation={props.location}
                eventName={name}
                eventDescription={props.description || "К сожалению, к этому событию пока нет описания!"}
                eventTicketsCountLeft={props.tickets_number}
                eventDateString={dateString}
                eventTypeStringInRussian={eventTypeString}
                eventId={props._id}
            />
        </>
    )
}