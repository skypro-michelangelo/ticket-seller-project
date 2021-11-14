import Box, { BoxProps } from '@mui/material/Box';
import Modal from '@mui/material/Modal';
import Button from '@mui/material/Button';
import { FC, useCallback, useMemo, useState } from 'react';
import { Stack, Typography, TextField, Alert, AlertTitle } from '@mui/material';
import IconButton from '@mui/material/IconButton';
import CloseIcon from '@mui/icons-material/Close';
import { getActionURL, ITicket } from '../../pages/MainPage/afisha/afisha';


const modalStyles: BoxProps["sx"] = {
  position: 'absolute',
  top: '50%',
  left: '50%',
  transform: 'translate(-50%, -50%)',
  bgcolor: 'background.paper',
  boxShadow: 24,
  padding: "30px",
  width: "830px",
  borderRadius: "25px"
};


export interface IBuyTicketsModalProps {
  isOpen: boolean;
  handleClose: VoidFunction;
  eventTypeStringInRussian: string;
  eventName: string;
  dateTime: string;
  eventId: string;
}


const ChildModal: FC<IBuyTicketsModalProps> = (
  {
    isOpen,
    handleClose,
    eventTypeStringInRussian,
    eventName,
    dateTime,
    eventId
  }
) => {
  const headerString = useMemo(() => {
    return `Купить билет на ${eventTypeStringInRussian.toLowerCase()} ${eventName}`
  }, [eventTypeStringInRussian, eventName]);

  const [ticketsCount, setTicketsCount] = useState<string>("0");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [resultTicket, setResultTicket] = useState<ITicket | null>(null)

  const submitForm = () => {
    const buyTicketActionURL = getActionURL(`/events/${eventId}/ticket/buy`);
    const formDataToSubmit = {
      number: Number(ticketsCount),
      first_name: firstName,
      second_name: lastName
    }

    fetch(buyTicketActionURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataToSubmit)
    })
      .then(r => r.json())
      .then(setResultTicket)
      .then()
      .catch(e => console.error(e))
  }

  return (
    <Modal
      hideBackdrop
      open={isOpen}
      onClose={handleClose}
      aria-labelledby="child-modal-title"
      aria-describedby="child-modal-description"
    >
      <Box sx={modalStyles}>
        <Stack direction="row" gap={"30px"} alignItems="flex-start" justifyContent="space-between">
          <Typography color="black" variant="h4">
            {headerString}
          </Typography>

          <IconButton onClick={handleClose} sx={{ color: "black" }}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <CellEmpty height={20} />

        <Typography color="black" variant="h5">
          {dateTime}
        </Typography>
        <CellEmpty height={20} />

        <TextField 
          label="Количество билетов" 
          variant="outlined" 
          required
          onChange={e => setTicketsCount(e.target.value)}
        />
        <CellEmpty height={20} />

        <TextField 
          label="Имя" 
          variant="outlined" 
          required
          onChange={e => setFirstName(e.target.value)}  
        />
        <CellEmpty height={20} />

        <TextField 
          label="Фамилия"
          variant="outlined"
          required
          onChange={e => setLastName(e.target.value)} 
        />
        <CellEmpty height={100} />

        <Stack justifyContent="center" alignItems="center">
          <Button variant="outlined" onClick={submitForm}>
            Купить билет
          </Button>
        </Stack>

       

        {resultTicket && (
          <Alert 
            severity="success" 
            sx={{
              position: 'absolute',
              top: '65%',
              left: '65%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <AlertTitle>Поздравляем! Вы купили билет № {eventId}</AlertTitle>
          </Alert>
        )}
      </Box>
    </Modal>
  );
}

export interface SecondSceneProps {
  handleClose: VoidFunction;
  eventTypeStringInRussian: string;
  eventName: string;
  dateTime: string;
  eventId: string;
}

const SecondScene: FC<SecondSceneProps> = (
  {
    eventTypeStringInRussian,
    eventName,
    dateTime,
    eventId,
    handleClose
  }
) => {
  const headerString = `Купить билет на ${eventTypeStringInRussian.toLowerCase()} ${eventName}`;

  const [ticketsCount, setTicketsCount] = useState<string>("0");
  const [firstName, setFirstName] = useState<string>("");
  const [lastName, setLastName] = useState<string>("");
  const [resultTicket, setResultTicket] = useState<ITicket | null>(null)

  const submitForm = () => {
    const buyTicketActionURL = getActionURL(`/events/${eventId}/ticket/buy`);
    const formDataToSubmit = {
      number: Number(ticketsCount),
      first_name: firstName,
      second_name: lastName
    }

    fetch(buyTicketActionURL, {
      method: "POST",
      mode: "no-cors",
      headers: {
        'Content-Type': 'application/json'
      },
      body: JSON.stringify(formDataToSubmit)
    })
      .then(r => r.json())
      .then(setResultTicket)
      .then()
      .catch(e => console.error(e))
  }

  return (
      <Box sx={modalStyles}>
        <Stack direction="row" gap={"30px"} alignItems="flex-start" justifyContent="space-between">
          <Typography color="black" variant="h4">
            {headerString}
          </Typography>

          <IconButton onClick={handleClose} sx={{ color: "black" }}>
            <CloseIcon />
          </IconButton>
        </Stack>

        <CellEmpty height={20} />

        <Typography color="black" variant="h5">
          {dateTime}
        </Typography>
        <CellEmpty height={20} />

        <TextField 
          label="Количество билетов" 
          variant="outlined" 
          required
          onChange={e => setTicketsCount(e.target.value)}
        />
        <CellEmpty height={20} />

        <TextField 
          label="Имя" 
          variant="outlined" 
          required
          onChange={e => setFirstName(e.target.value)}  
        />
        <CellEmpty height={20} />

        <TextField 
          label="Фамилия"
          variant="outlined"
          required
          onChange={e => setLastName(e.target.value)} 
        />
        <CellEmpty height={100} />

        <Stack justifyContent="center" alignItems="center">
          <Button variant="outlined" onClick={submitForm}>
            Купить билет
          </Button>
        </Stack>

       

        {resultTicket && (
          <Alert 
            severity="success" 
            sx={{
              position: 'absolute',
              top: '65%',
              left: '65%',
              transform: 'translate(-50%, -50%)',
            }}
          >
            <AlertTitle>Поздравляем! Вы купили билет № {eventId}</AlertTitle>
          </Alert>
        )}
      </Box>
  );
}


export const CellEmpty: FC<{ height: number }> = ({ height }) => <Box sx={{ height: `${height}px`}} /> 

export interface IDetailsModalProps {
  isOpen: boolean;
  handleClose: VoidFunction;
  eventLocation: string;
  eventName: string;
  eventDescription: string;
  eventPrice: number;
  eventDateString: string;
  eventTicketsCountLeft: number;
  eventTypeStringInRussian: string;
  eventId: string;
}

// Взято: https://gist.github.com/realmyst/1262561
// ["контакт", "контакта", "контактов"]
export function getDeclension(
  count: number,
  titles: [string, string, string]
): string {
  const cases = [2, 0, 1, 1, 1, 2];

  return titles[
    count % 100 > 4 && count % 100 < 20
      ? 2
      : cases[count % 10 < 5 ? count % 10 : 5]
  ];
}

const getTicketsDeclencionString = (count: number): string => {
  return getDeclension(count, ["билет", "билета", "билетов"])
}

export const DetailsModal: FC<IDetailsModalProps> = (
  {
    isOpen,
    handleClose,
    eventPrice,
    eventLocation,
    eventName,
    eventDescription,
    eventDateString,
    eventTicketsCountLeft,
    eventTypeStringInRussian,
    eventId
  }
): JSX.Element => {
  const [index, setIndex] = useState<number>(0);
  
  const onTicketBuyClick = () => {
    setIndex(1);
  }

  const onTicketBuyModalClose = () => {
    setIndex(0);
  }


  const eventInformation: JSX.Element = (
    <Typography color="black">
      <Typography variant={'h3'}>
        {eventName}
      </Typography>

      <CellEmpty height={30}/>
      {eventDateString}

      <CellEmpty height={30}/>
      Место проведения : {eventLocation}

      <CellEmpty height={30}/>
      {eventDescription}

      <CellEmpty height={30}/>
      Цена : {eventPrice} ₽
      
      <CellEmpty height={150}/>
      осталось {eventTicketsCountLeft} {getTicketsDeclencionString(eventTicketsCountLeft)} 

      <CellEmpty height={20} />

      <Button variant="outlined" onClick={onTicketBuyClick}>
        Купить билет
      </Button>
    </Typography>
  )


  return (
    <>
         <Modal
        open={isOpen}
        onClose={handleClose}
        aria-labelledby="parent-modal-title"
        aria-describedby="parent-modal-description"
      >
        <Box sx={modalStyles}>
          {index === 0 && (
            <Stack 
            direction="row" 
            justifyContent="space-between"
          >
            {eventInformation}
            <img alt="Сломанная картинка" width="340px" height="340px" />
          </Stack>
          )}

{index === 1 && (
           <SecondScene
                eventTypeStringInRussian={eventTypeStringInRussian}
                eventName={eventName}
                dateTime={eventDateString}
                eventId={eventId}
                handleClose={onTicketBuyModalClose}
            />
          )}
        </Box>
      </Modal>

      {/* <ChildModal
        isOpen={isBuyTicketModalOpen}
        handleClose={toggleTicketModalOpenness}
        eventTypeStringInRussian={eventTypeStringInRussian}
        eventName={eventName}
        dateTime={eventDateString}
        eventId={eventId}
      /> */}
    </>
  );
}