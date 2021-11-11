import React, { FC } from "react";
import { Box, Stack, Typography } from "@mui/material";
import { CardTag } from "../card-tag";
import DetailsModal from "../modal";

export interface ICardProps {
    // TODO: добавить урл картинки
    /** Фильм */
    cardType: string;
    /** 24 мая, 18:00 */
    beginningDate: string;

    cost: string;
    eventName: string;
}

// img 250px + content 250px
export const Card: FC<ICardProps> = (
    {
        cardType,
        beginningDate,
        cost,
        eventName
    }
): JSX.Element => {
    const data = [cardType, beginningDate, cost]

    return (
        <>
            <img src="/" alt="тута будет картинка фильма" />

            <Box 
              sx={{ 
                backgroundColor: "darkblue",
                padding: "10px",
                
              }}
            >
                <Stack direction={"row"} spacing={2}>
                  {data.map(elem => <CardTag key={elem} text={elem} />)}
                </Stack>

                <div style={{ height: "10px" }} />

                <Typography color={"white"}>
                    {eventName}
                </Typography>  
                <DetailsModal/>
            </Box>
        </>
    )
}