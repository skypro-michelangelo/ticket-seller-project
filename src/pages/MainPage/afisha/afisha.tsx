import React from 'react';
import { FC } from 'react';
import { Card, ICardProps } from '../../../components/card';
import { Header } from '../../../components/header';
import { CardsLayout } from '../../../components/cards-layout';
import { Grid } from '@mui/material';
import { Controls  } from '../../../components/controls';

const stub: ICardProps[] = [
  {
    cost: "555 рублей",
      eventName: "Хуета",
      cardType: "Фильм",
      beginningDate: "24 мая, 18:00"
  },
  {
    cost: "555 рублей",
    eventName: "Хуета",
    cardType: "Фильм",
    beginningDate: "24 мая, 18:00"
  },
  {
    cost: "555 рублей",
    eventName: "Хуета",
    cardType: "Фильм",
    beginningDate: "24 мая, 18:00"
  },
  {
    cost: "555 рублей",
    eventName: "Хуета",
    cardType: "Фильм",
    beginningDate: "24 мая, 18:00"
  }
]


export const MainPage: FC = () => {
    return (
        <>
          <Header/>
          <Controls />  
          <CardsLayout>
              <Grid container spacing={2}>
                {stub.map(e => (
                  <Grid item xs={12} sm={4}>
                       <Card {...e} />
                  </Grid>
                ))}
              </Grid>
          </CardsLayout>
        </>
    );
};